import { StyleSheet, Appearance } from "react-native";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    messageBox:
    {
        borderRadius: 5,
        padding: 5
    },
    name:
    {
        color : Colors[colorScheme!].tint,
        fontWeight: 'bold',
        marginBottom: 5
    },
    message: {},
    time:
    {
        alignSelf: 'flex-end',
        fontSize: 11,
        color: "grey",
    }
});

export default styles;