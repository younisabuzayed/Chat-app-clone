export type MainTabParamList = {
    Camera: undefined;
    Chats: undefined;
    Status: undefined;
    Calls: undefined;
};

export type RootNavigationParamList = {
    Main: undefined;
    ChatRoom: {
        id: string,
        name: string, 
        imageUri?: string
    } | undefined;
    Contacts: undefined;
};

export type User ={
    id: string;
    name: string;
    imageUri?: string | "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg";
    status?: string;
};

export type Message ={
    id: string;
    content: string;
    createdAt: string;
    user: User;
};

export type ChatRoom ={
    chatRoom: {
        id: any,
        chatRoomUser:{
            items: any
        }
        
    }

};