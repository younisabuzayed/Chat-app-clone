import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootNavigationParamList } from '../../../types';
const NewMessageButton = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootNavigationParamList>>();
  const onPressNavigation = () => {
    navigation.navigate("Contacts");
  }
  return (
    <TouchableOpacity
      onPress={onPressNavigation}
     style={{
        ...styles.container,
        bottom: insets.bottom > 0 ? insets.bottom : 15,
      }}>
        <MaterialCommunityIcons
          name="message-reply-text" 
          size={28}
          color="white" />
    </TouchableOpacity>
  );
};

export default NewMessageButton;