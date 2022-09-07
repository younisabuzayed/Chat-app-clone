import React from 'react';
import { View, Text, Image, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native';
import styles from './styles';
type AvatarProps = {
    source: ImageSourcePropType,
    style?: StyleProp<ImageStyle> | undefined,
};

const Avatar = ({ source, style }: AvatarProps) => {
  return (
    <Image
      source={source}
      style={[styles.avatar, style]} />
  );
};

export default Avatar;