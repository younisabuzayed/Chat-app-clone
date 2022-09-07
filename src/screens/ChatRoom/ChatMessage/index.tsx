import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { Message } from '../../../types';
import moment from 'moment';
import styles from './styles';
import Sizes from '../../../constants/Sizes';
import Colors from '../../../constants/Colors';
export type ChatMessageProps = {
    messages: Message,
    myId: string | null
};
const ChatMessage = ({ messages, myId } : ChatMessageProps) => {
  const colorScheme = useColorScheme();

  const createdAt = moment(messages.createdAt).calendar(null, {
        sameDay: 'HH:mm',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: 'dddd',
        sameElse: 'MMM Do YYYY'
      });

  const isMyMessage = () => 
  {
    return messages.user.id === myId;
  }; 
  const marginMessageBox = isMyMessage() ? 
  {
      marginLeft: Sizes.width * 0.2 
  }: 
  {
      marginRight: Sizes.width * 0.2 
  };
  return (
    <View
      style={styles.container}>
        <View
          style={[styles.messageBox, {
            backgroundColor: isMyMessage() 
              ? "#dcf8c6"
              : Colors[colorScheme!].backgroundMessage,
            ...marginMessageBox,
          }]}>
            {!isMyMessage() && 
                <Text 
                  style={styles.name}>{messages.user.name}</Text>}
            <Text
              style={styles.message}>{messages.content}</Text>
            <Text
              style={styles.time}>{createdAt}</Text>
        </View>
    </View>
  );
};

export default ChatMessage;