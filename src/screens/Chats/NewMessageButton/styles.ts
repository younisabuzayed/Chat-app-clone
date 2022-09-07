import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { AppearanceMode } from "../../../constants/Theme";

const styles = StyleSheet.create({
    container:
    {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors[AppearanceMode!].mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
    }
});

export default styles;