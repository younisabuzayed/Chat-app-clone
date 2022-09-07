import { View, Text } from 'react-native';
import React from 'react';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import styles from './styles';
const HeaderRight = () => {
  return (
    <View
      style={styles.container}>
      <Octicons
        name="search"
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

export default HeaderRight;