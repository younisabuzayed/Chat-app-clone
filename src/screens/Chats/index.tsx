import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import ChatListItem from '../../components/ChatListItem';
import NewMessageButton from './NewMessageButton';


import Sizes from '../../constants/Sizes';
import data from '../../../assets/data';
import styles from './styles';
import { getUser } from './graphql/queries';
const Chats = () => {
  const [userId, setUserId] = React.useState<String>();
  const [chatRooms, setChatRooms] = React.useState<Array<Object>>();

  React.useEffect(() => {
    const fetchChatRooms = async() => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        setUserId(userInfo.attributes.sub);
        const { 
          data: {
            getUser: userData
          }
        } :any = await API.graphql(
          graphqlOperation(
            getUser,
            {
              id: userInfo.attributes.sub,
            }
          )
        );
        // console.log(JSON.stringify(userData.chatRoomUser.items, null ,2));
        setChatRooms(userData.chatRoomUser.items);
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    };
    fetchChatRooms();
  }, []);
  // console.log(JSON.stringify(chatRooms[0].chatRoom.chatRoomUser.items,null , 2))
  const renderItemChatList = ({item}: any) => (
    <ChatListItem
      chatRoom={item}
      userID={userId} />
  );

  return (
    <View
      style={styles.container}>
        <FlatList
          data={chatRooms}
          renderItem={renderItemChatList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{height: Sizes.height}}
          keyExtractor={(item, index) => `chatrooms-${index}`} />
        <NewMessageButton />
    </View>
  );
};
export default Chats;