export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
          id
          chatRoomUser {
            items {
              id
              user {
                name
                id
                imageUri
                status
              }
            }
          }
          lastMessage {
            id
            content
            chatRoomID
            updatedAt
            user {
              id
              name
            }
          }
        }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;