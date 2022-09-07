import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { Calls, Camera, Chats, Status } from '../screens';
import Colors from '../constants/Colors';
import { MainTabParamList } from '../types';
import { Fontisto } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  const screenOptions: MaterialTopTabNavigationOptions | ((props: {
    route: RouteProp<MainTabParamList, keyof MainTabParamList>;
    navigation: any;
}) => MaterialTopTabNavigationOptions) = ({route}) =>({
    tabBarActiveTintColor: Colors[colorScheme!].background,
    tabBarStyle: {
      backgroundColor: Colors[colorScheme!].tint
    },
    tabBarIndicatorStyle:{
      backgroundColor: Colors[colorScheme!].background,
      height: 4,
    },
    tabBarLabelStyle:{
      fontWeight: 'bold',
      fontSize: 15
    },

  });
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={screenOptions} >
        {/* Now is not create */}
        {/* <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: ({color})=>
              <View
                style={{height: 50, width: 50}}>
                <Fontisto
                  name="camera"
                  color={color}
                  size={20} />
              </View>,
            tabBarShowLabel: false,
          }} /> */}
        <Tab.Screen
          name="Chats"
          component={Chats} />
        {/* Now is not create */}
        {/* <Tab.Screen
          name="Status"
          component={Status} /> */}
        {/* <Tab.Screen
          name="Calls"
          component={Calls} /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;