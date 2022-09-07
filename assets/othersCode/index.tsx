/*
const userInfo: any = await Auth.currentAuthenticatedUser();
    const {
      data: {
        getUser: userData,
      }
    }: any = await API.graphql(
      graphqlOperation(
        getUser,
        { id: userInfo.attributes.sub }
        )
    );
    const getChatRoomId = userData.chatRoomUser.items.find(async(item:any) => {
      
      const { data: {
        getChatRoom: {
          chatRoomUser: {
            items: data
          }
        }
      } }: any = await API.graphql(
          graphqlOperation(
            getChatRoom,
            { id: item.chatRoomID }
            )
        );
      const { userID } = data.find((item: any) => item.userID === user.id);
      return userID === user.id;
    }); */