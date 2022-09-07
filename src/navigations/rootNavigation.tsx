import { Text } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import styles from './styles';

// Screen and Components
import { HeaderChatMessage, HeaderRight } from './components';
import MainTabNavigator from './MainTabNavigator';
import { ChatRoom, Contacts } from '../screens';
import { RootNavigationParamList } from '../types';
import HeaderRightCR from './components/HeaderRightCR';

const Stack = createStackNavigator<RootNavigationParamList>();

const RootNavigation = () =>
{
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
                backgroundColor: Colors.light.tint,
            },
            headerTintColor: Colors.light.background,
            headerTitleAlign:'left',
            headerTitleStyle:{
                fontWeight: 'bold',
            },
            headerShadowVisible: false,
            
          }}>
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
              options={{
                headerTitle: '',
                headerLeft: () => (
                    <Text
                      style={styles.headerTitle}>ChatApp</Text>
                ),
                headerRight: () =><HeaderRight />,
              }} />
              <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={({route, navigation})=> ({
                  headerStyle:{
                    height: 100,
                    backgroundColor: Colors.light.tint,
                  },
                  headerLeft: ({onPress}) => 
                    <HeaderChatMessage
                      route={route}
                      {...navigation}
                      onPressBack={onPress} />,
                  title: "",
                  headerRight: () =>< HeaderRightCR />,
                  })
                } />
              <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={({route}: any)=> ({
                  headerStyle:{
                    height: 100,
                    backgroundColor: Colors.light.tint,
                  },
                  headerBackTitle:' ',
                  headerTitleAlign:'center',
                  title: route.params?.name,
                  })
                } />
        </Stack.Navigator>
    );
};

export default RootNavigation;