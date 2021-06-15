import { StyleSheet } from 'react-native';
import Colors from '../../constants/color';

export default StyleSheet.create({
    profileWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 10
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    text: {
        marginTop: 5
    },
    boldLabel: {
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 18
    },
    username: {
        color: Colors.GRAY
    },
    separatorLine: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.6,
        marginVertical: 10,
        width: "100%"
    },
    row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 10
    },
    icon: {
        marginRight: 10
    }
});