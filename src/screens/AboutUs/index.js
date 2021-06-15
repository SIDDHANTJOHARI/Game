import React from 'react';
import {SafeAreaView, Text as RNText, View} from '../../components/StyledComponents';
import { StyleSheet } from 'react-native'
import Header from '../../components/Header';
import styles from '../../util/styles';

export default props => {
    const Text=(props)=><RNText {...props}  style={customStyles.text} ></RNText>
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} />
      <View style={styles.absoluteContainer}>
      <RNText style={customStyles.boldText}>These are the steps to play the Game.</RNText>
        <Text>1. Select a Number from Given Numbers.</Text>
        <Text>
          2. Try your luck and guess which tile has the number you selected.
        </Text>
        <Text>3.You have 3 chances to select a Tile.</Text>
        <Text>
          4. If You will select right tile in 3 chances then you will Win.
        </Text>
      </View>
    </SafeAreaView>
  );
};
const customStyles=StyleSheet.create({
    text:
    {
        padding:10,
        textAlign:'center'
    },
    boldText:
    {
        fontWeight:'bold',
        padding:10,
        textAlign:'center'
    }
})