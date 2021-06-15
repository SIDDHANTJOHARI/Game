import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from '../../components/StyledComponents';
import Header from '../../components/Header';
import styles from '../../util/styles';
import generateRandomNumber from '../../util/utility.js';
import {W} from '../../util/GlobalStyles';
import { Screens } from '../../constants/appConstants';
import { useIsFocused } from '@react-navigation/core';
import { BackHandler } from 'react-native'
import useBackButton from '../../util/useBackHandler';
const colors = ['red', 'blue', 'green', 'yellow', 'skyblue', 'pink', 'magenta'];
const NumberPicker = ({val,onPress, ...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: colors[generateRandomNumber(7, []) - 1],
      padding: 5,
      borderRadius: W(25),
      width: W(50),
      height: W(50),
      margin: W(20),
      alignItems: 'center',
      justifyContent: 'center',
    }}  onPress={onPress}>
    <Text style={{fontWeight: 'bold', fontSize: 20}}>{val}</Text>
  </TouchableOpacity>
);
export default props => {
    useBackButton(()=>{
        BackHandler.exitApp()
        return true
    });
    const [numbers,setNumbers]=useState([])
    const isFocussed=useIsFocused()
  useEffect(()=>
  {
    const num1 = generateRandomNumber(50, []);
    const num2 = generateRandomNumber(50, [num1]);
    const num3 = generateRandomNumber(50, [num1, num2]);
    setNumbers([num1,num2,num3])
  },[isFocussed])
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} />
      <View style={[{...styles.absoluteContainer}]}>
        <Text style={{fontWeight: 'bold'}}>Pick a Number</Text>
        <View style={{flexDirection: 'row'}}>
        {numbers.map(it=>(
          <NumberPicker  key={it} onPress={()=>props.navigation.navigate(Screens.TILES_SCREEN,{val:it})} val={it} />))
        }</View>
      </View>
    </SafeAreaView>
  );
};
