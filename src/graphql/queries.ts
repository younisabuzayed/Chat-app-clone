/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
