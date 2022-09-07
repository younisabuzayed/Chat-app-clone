import { StyleSheet } from "react-native";
import Sizes from "../../../constants/Sizes";

const avatarSize = 60;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: Sizes.width,
        justifyContent: 'flex-start',
        padding: 10,
        marginVertical: 10,
        alignItems:'center'
    },
    middle:
    {
        marginLeft: 15,
    },
    username:
    {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 3
    },
    lastMessage:
    {
        fontSize: 15,
        color: 'gray',
        width: Sizes.width - avatarSize - 50,
    },
    avatar:
    {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2,
    },
    underlineItem:
    {
        height: 1,
        backgroundColor: 'gray',
        width: Sizes.width * 0.8,
        alignSelf: 'flex-end',
        opacity: 0.3
    }
});

export default styles;