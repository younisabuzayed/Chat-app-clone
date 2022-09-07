import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { API, graphqlOperation } from "aws-amplify";


// import users from '../../../assets/data/users';
import Sizes from '../../constants/Sizes';
import ContactListItem from './ContactListItem';
import styles from './styles';
import { listUsers } from '../../graphql/queries';


const Contacts = () => {
  const [users, setUsers] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchUser =React.useCallback( async () => {
    try {
      const userData: any = await API.graphql(
        graphqlOperation(listUsers)
      );
      setUsers(userData.data.listUsers.items);
      
    } catch (error) {
      console.log(error);
      
    }
  },[]);
  React.useEffect(() => {
    fetchUser();
    return () => {
      setUsers([]);
    };
  },[]);

  const onRefreshFlatList = () => {
    setRefreshing(true);
    fetchUser();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const renderItemChatList = ({item}: any) => (
    <ContactListItem
      user={item} />
  );

  return (
    <View
      style={styles.container}>
        <FlatList
          data={users}
          onRefresh={onRefreshFlatList}
          refreshing={refreshing}
          renderItem={renderItemChatList}
          showsVerticalScrollIndicator={false}
          style={{height: Sizes.height}}
          keyExtractor={(item, index) => `chatrooms-${index}`} />
    </View>
  );
};

export default Contacts;