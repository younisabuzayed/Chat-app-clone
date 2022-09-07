import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import { AppearanceMode } from "../../../constants/Theme";
const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    mainContainer:
    {
        flexDirection: 'row',
        backgroundColor: "white",
        alignItems: 'flex-end',
        maxHeight: Sizes.height * 0.17,
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        flex: 1,
    },
    input:
    {
        flex: 1,
        marginHorizontal: 2,
        paddingHorizontal: 3,
        fontSize: 17,
    },
    button:
    {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors[AppearanceMode!].mainColor
    },
});

export default styles;