import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootNavigationParamList } from '../../../types';
import styles from './styles';
import { Avatar } from '../../../components';
import { Feather } from '@expo/vector-icons';
type HeaderChatMessageProps = {
  route: RouteProp<RootNavigationParamList,"ChatRoom">,
  navigation: NavigationProp<RootNavigationParamList, "ChatRoom">,
  onPressBack?: () => void
};

const HeaderChatMessage = ({ route, navigation, onPressBack }: HeaderChatMessageProps) => {
  return (
    <View
      style={styles.container}>
        <TouchableWithoutFeedback
          onPress={onPressBack}>
            <Feather
              name="arrow-left"
              size={30}
              color={"white"}/>
        </TouchableWithoutFeedback>
        <Avatar
          source={{uri: route.params?.imageUri}}
          style={styles.avatar} />
        <Text
          style={styles.title}>{route.params?.name}</Text>
    </View>
  );
};

export default HeaderChatMessage;