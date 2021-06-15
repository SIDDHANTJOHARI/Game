import { useBackButton } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { 
    SafeAreaView,
    Text,
} from '../../components/StyledComponents';
import { App, Screens } from '../../constants/appConstants';
import Colors from '../../constants/color';
import styles from '../../util/styles';
export default (props) => {
    useBackButton(()=>{
        console.log("chala")
        BackHandler.exitApp()
        return true
    });
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(Screens.HOME);
        }, App.SPLASH_SCREEN_DURATION);
    }, [])
    return (
        <SafeAreaView style={[styles.absoluteContainer, { backgroundColor: Colors.TWITTER_BLUE }]}>
            <Text style={{ color: Colors.WHITE, fontWeight: "bold" }}>
                {App.SPLASH_SCREEN_TEXT}
            </Text>
        </SafeAreaView>
    );
}