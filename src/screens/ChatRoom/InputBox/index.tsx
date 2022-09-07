import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import styles from './styles';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessage, updateChatRoom } from '../../../graphql/mutations';


const InputBox = ({ chatRoomID }: any) => {
  const insets = useSafeAreaInsets();
  const [message, setMessage] =React.useState('');
  const [myUserId, setMyUserId] = React.useState<String | null>();
  
  React.useEffect(()=> {
    const fetchUser =async () => {
      const userInfo =await Auth.currentAuthenticatedUser();
      setMyUserId(userInfo.attributes.sub);
    };
    fetchUser();
  },[]);
  
  const updateChatRoomLastMessage =async (messageId:string) => {
    try {
      API.graphql(
        graphqlOperation(
          updateChatRoom,
          {
            input:
            {
              id: chatRoomID,
              lastMessageID: messageId,
            }
          }
        )
      )
    } catch (error) {
      console.log(error);
      
    }
  };

  const onMicrophone= () => {};
  const onSendMessage= async() => {
    try {
      const {data : newMessageData }: any = await API.graphql(
        graphqlOperation(
          createMessage,
          {
            input:{
              content: message,
              userID: myUserId,
              chatRoomID,
            }
          }
        )
      );
      await updateChatRoomLastMessage(newMessageData.createMessage.id);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };
  const onPress = () =>
  {
    if (!message)
    {
      onMicrophone();

    } else 
    {
      onSendMessage();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{height: 'auto'}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}>
    <View
      style={{
        ...styles.container,
        paddingBottom: insets.bottom > 0 ? insets.bottom : 5
      }}>
        <View
          style={styles.mainContainer}>
            <FontAwesome5
              name="laugh-beam"
              size={22}
              color="grey" />
            <TextInput
              placeholder="Message"
              style={styles.input}
              multiline
              value={message}
              onChangeText={setMessage} />
            <Entypo
              name="attachment"
              size={20}
              color="grey" />
            <View style={{width: 15}}/>
            {!message &&
              <>
              <Fontisto
                name="camera"
                size={20}
                color="grey" />
              <View style={{width: 5}}/>
              </>
            }
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
            {!message 
             ? <MaterialCommunityIcons
                name="microphone" 
                size={24}
                color="white" />
             : <MaterialIcons
                name="send" 
                size={24}
                color="white" /> }
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;