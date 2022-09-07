import { View, Text } from 'react-native';
import React from 'react';
import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import styles from './styles';
const HeaderRightCR = () => {
  return (
    <View
      style={styles.container}>
      <FontAwesome5
        name="video"
        size={18}
        color={Colors.light.background} />
      <View
        style={styles.spaceBetween}/>
      <MaterialIcons
        name="call"
        size={22}
        color={Colors.light.background} />
      <View
        style={styles.spaceBetween}/>
      <MaterialCommunityIcons
        name="dots-vertical"
        size={22}
        color={Colors.light.background} />
    </View>
  );
};

export default HeaderRightCR;