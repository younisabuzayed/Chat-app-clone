/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser($owner: String) {
    onCreateChatRoomUser(owner: $owner) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser($owner: String) {
    onUpdateChatRoomUser(owner: $owner) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser($owner: String) {
    onDeleteChatRoomUser(owner: $owner) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($owner: String) {
    onCreateChatRoom(owner: $owner) {
      id
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        content
        userID
        createdAt
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
          owner
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($owner: String) {
    onUpdateChatRoom(owner: $owner) {
      id
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        content
        userID
        createdAt
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
          owner
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($owner: String) {
    onDeleteChatRoom(owner: $owner) {
      id
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        content
        userID
        createdAt
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
          owner
        }
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      userID
      createdAt
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      userID
      createdAt
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      userID
      createdAt
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUser {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          content
          userID
          createdAt
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
    }
  }
`;
