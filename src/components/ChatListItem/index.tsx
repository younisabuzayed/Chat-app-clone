import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { ChatRoom, RootNavigationParamList } from '../../types';
import styles from './styles';
import moment from 'moment';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
type ChatRoomItemProps = {
    chatRoom: ChatRoom;
    userID: String | undefined;
};
const ChatListItem = ({ chatRoom: { chatRoom }, userID }: ChatRoomItemProps) => {

  const navigation = useNavigation<NavigationProp<RootNavigationParamList,"ChatRoom">>();
  const userSenderTo = chatRoom.chatRoomUser.items.find(({user}: any) => user.id !== userID);
  // const userInfo = Auth.currentAuthenticatedUser();

  const user = userSenderTo.user;
  const onPressNavigation = () =>
  {
    navigation.navigate(
      'ChatRoom',
      {
        id :chatRoom.id,
        name: user.name,
        imageUri: user.imageUri
      },
      );
    
  };
  const createdAt = chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: 'dddd',
    sameElse: 'DD/MM/YYYY'
  });
  // console.log(JSON.stringify(chatRoom,null, 2));
  if (!userID )
  {
    return null;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() =>onPressNavigation()}>
      <View>
        <View
          style={styles.container}>
            <View
              style={styles.left}>
                <Image
                source={{uri: user.imageUri}}
                style={styles.avatar} />
                <View
                  style={styles.middle}>
                    <Text
                      style={styles.username}>{user.name}</Text>
                    <Text
                      style={styles.lastMessage}
                      numberOfLines={1}>{chatRoom.lastMessage && chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <View
              style={styles.right}>
                <Text
                  style={styles.time}>{createdAt}</Text>
            </View>
        </View>
        <View
          style={styles.underlineItem}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;