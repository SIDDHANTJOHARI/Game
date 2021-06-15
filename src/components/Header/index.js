import React from 'react';
import { View, Text } from '../StyledComponents';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/color';

export default (props) => {
    return (
        <View style={styles.wrapper}>
            <Icon 
                name="menu"
                size={30}
                color={Colors.TWITTER_BLUE}
                onPress={() => props.navigation.openDrawer()}
            />
        </View>
    );
}