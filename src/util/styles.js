import { StyleSheet } from 'react-native';
import Colors from '../constants/color';

export default StyleSheet.create({
    darkThemeBackground: {
        backgroundColor: Colors.DARK_BG
    },
    darkThemeForeground: {
        color: Colors.DARK_FG
    },
    lightThemeBackground: {
        backgroundColor: Colors.LIGHT_BG
    },
    lightThemeForeground: {
        color: Colors.LIGHT_FG
    },
    absoluteContainer: {
        flex: 1,
        alignItems: "center",
        padding:20,
        justifyContent: "center"
    }
});
