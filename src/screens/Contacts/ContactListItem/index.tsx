import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createChatRoom, createChatRoomUser} from '../../../graphql/mutations';
import { RootNavigationParamList, User } from '../../../types';
import styles from './styles';


type ContactListItemProps = {
    user: User;
};
const ContactListItem = ({ user }: ContactListItemProps) => {

  const navigation = useNavigation<NavigationProp<RootNavigationParamList,"ChatRoom">>();

  const onPress = async() =>
  {
    // create neew chat room 
    const newChatRoomData: any = await API.graphql(
      graphqlOperation(createChatRoom, {input: {}}),
    );
    if( !newChatRoomData.data )
    {
      console.log("Failed to create a chat room");
      return;
    }

    const newChatRoom = newChatRoomData.data.createChatRoom;
    
    
    // add user to chat room
    await API.graphql(
      graphqlOperation(
        createChatRoomUser,
        {
          input: 
          {
            userID: user.id,
            chatRoomID: newChatRoom.id,
          }
        }
      )
    );
    // Add authenticated user to the chat room // my self to room
    const useInfo: any = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(
        createChatRoomUser,
        {
          input:
          {
            userID: useInfo.attributes.sub,
            chatRoomID: newChatRoom.id,
          }
        }
      )
    );
    navigation.navigate("ChatRoom", {
      id: newChatRoom.id,
      name: user.name
    });
    // console.log(JSON.stringify(newChatRoom, null, 2));
    
  };
  return (
    <TouchableWithoutFeedback
      onPress={onPress}>
      <View
        style={styles.container}>
          <Image
            source={{uri: user.imageUri}}
            style={styles.avatar} />
          <View
            style={styles.middle}>
              <Text
                style={styles.username}>{user.name}</Text>
              <Text
                style={styles.lastMessage}
                numberOfLines={1}>{user.status}</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;