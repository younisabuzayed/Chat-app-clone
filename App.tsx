import 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';

// Root Navigation
import RootNavigation from './src/navigations/rootNavigation';

import awsconfig from './src/aws-exports';

// GraphQL
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

Amplify.configure(awsconfig);

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

 const App =() =>
{
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  
  // run this when App is first mount
  React.useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if (userInfo) {
        const userData: any = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            )
        );

        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using WhatsApp',
        };

        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        );
      }
    };

    fetchUser();
  }, [])
  return (
    <NavigationContainer>
      <StatusBar
         style={colorScheme === "dark" ? "dark" : "light"}/>
      <RootNavigation />
    </NavigationContainer>
  );
}
export default withAuthenticator(App, {
  signUpConfig:{
    defaultCountryCode: "9",
    header:"Chat App",
    hiddenDefaults: ['phone_number'],
  }
});
//"prettier/prettier": [
  //   "error",
  //   {
  //     "singleQuote": true,
  //     "trailingComma": "all",
  //     "arrowParens": "avoid",
  //     "endOfLine": "auto"
  //   }
  // ],