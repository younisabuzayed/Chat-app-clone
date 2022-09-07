import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    title:
    {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
        marginLeft: 8
    },
    avatar:
    {
        marginLeft: 5,
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

export default styles;