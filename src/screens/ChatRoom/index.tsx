import React from 'react';
import { View, Text, FlatList, ImageBackground, useColorScheme } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainTabParamList, RootNavigationParamList } from '../../types';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import chats from '../../../assets/data/chats';
import ChatMessage from './ChatMessage';

import LightBG from '../../../assets/image/BG/defaultBackground.png';
import DarkBG from '../../../assets/image/BG/darkBackground.jpeg';
import InputBox from './InputBox';
import { messagesByChatRoom } from '../../graphql/queries';
import { onCreateMessage } from '../../graphql/subscriptions';

const ChatRoom = () => {
  const imageSchema = useColorScheme();
  const route = useRoute<RouteProp<RootNavigationParamList, "ChatRoom">>();
  const [messages, setMessages] = React.useState<any>([]);
  const [myUserId, setMyUserId] = React.useState(null);


  React.useEffect(() =>{
    const fetchMessages =async () => {
      const messageData: any = await API.graphql(
        graphqlOperation(
          messagesByChatRoom,
          {
            chatRoomID: route.params?.id,
            sortDirection: "DESC"
          }
        )
      );
      setMessages(messageData.data.messagesByChatRoom.items);
    };
    fetchMessages();
  },[]);
  
  React.useEffect(()=> {
    const fetchUser =async () => {
      const userInfo =await Auth.currentAuthenticatedUser();
      setMyUserId(userInfo.attributes.sub);
    };
    fetchUser();
  },[]);
  React.useEffect(() =>
  {
    const subscriptionsMessage = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next:({value}) =>{
        const newMessage = value.data.onCreateMessage;
        if (newMessage.chatRoomID !== route.params?.id)
        {
          return;
        }
        setMessages((prev: any)=> [newMessage, ...prev]);
        //  console.log(data.value.data);
      }
    });
    () => subscriptionsMessage.unsubscribe();
  },[]);
  return (
    <ImageBackground
      source={ imageSchema === "light" 
        ? LightBG
        : DarkBG
      }
      style={{flex:1}}>
        <FlatList
          data={messages}
          keyExtractor={(item,index) => `${index}`}
          inverted
          renderItem={({item}) => 
            <ChatMessage 
              messages={item}
              myId={myUserId} />
          } />
        <InputBox
          chatRoomID={route.params?.id} />
    </ImageBackground>
  );
};

export default ChatRoom;