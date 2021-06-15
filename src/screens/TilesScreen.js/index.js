import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from '../../components/StyledComponents';
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import styles from '../../util/styles';
import generateRandomNumber from '../../util/utility.js';
import {W} from '../../util/GlobalStyles';
import { useIsFocused } from '@react-navigation/core';
import { Screens } from '../../constants/appConstants';
import useBackButton from '../../util/useBackHandler';
const colors = ['red', 'blue', 'green', 'skyblue', 'pink', 'magenta'];
const Tile = ({onPress,title},...props) => (

  <TouchableOpacity
    {...props}
    style={{
      backgroundColor: colors[generateRandomNumber(6, []) - 1],
      padding: 5,
      borderRadius: W(10),
      width: W(60),
      height: W(60),
      alignSelf:'center'
,      margin: W(20),
      alignItems: 'center',
      justifyContent: 'center',
    }} onPress={onPress}>
    <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
  </TouchableOpacity>
);
export default props => {
    
    useBackButton(()=>{
       props.navigation.navigate(Screens.HOME)
        return true
    });
    const tiles=[]
    const [numberOfAttempts,setNumberOfAttempts]=useState(3)
    const [numberLocation,setNumberLocation]=useState(generateRandomNumber(9,[]))
    const isFocussed=useIsFocused()
    useEffect(()=>
    {
        setNumberOfAttempts(3)
        setNumberLocation(generateRandomNumber(9,[]))
    },[isFocussed])
    const check=(index)=>
    {
    if(index==numberLocation)
    {
        AsyncStorage.getItem('scores').then(res=>
            {
              
                if(res==undefined)
                {
                    AsyncStorage.setItem('scores',numberOfAttempts)
                }
                else
                {
                    AsyncStorage.setItem('scores',res+","+numberOfAttempts)
                }
            })
       Alert.alert('You Won',`Congrats you won, Number:${props.route.params.val}`,[{
           title:"Play Again",
           onPress:()=>props.navigation.navigate(Screens.HOME)
       },
       {
        title:"See Scores",
        onPress:()=>props.navigation.navigate(Screens.SCORES)
    }])
    }
    else if(numberOfAttempts==1)
    {
        AsyncStorage.getItem('scores').then(res=>
            {
                
                if(res==undefined)
                {
                    AsyncStorage.setItem('scores',"0")
                }
                else
                {
                    AsyncStorage.setItem('scores',res+",0")
                }
            })
            Alert.alert('You Loose',`Sorry you Loose the number is in Tile ${numberLocation}`,[{
                text:"Play Again",
                onPress:()=>props.navigation.navigate(Screens.HOME)
            },
            {
             text:"See Scores",
             onPress:()=>props.navigation.navigate(Screens.SCORES)
         }])
    }
    else
    { 
        alert(`Try Again you have ${numberOfAttempts-1} attempt s left`)
        setNumberOfAttempts(numberOfAttempts-1)
    }
    }
    for(let i=1;i<=9;i++)
    {
        tiles.push(<Tile key={i} title={i} onPress={()=>check(i)}></Tile>) 
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} />
      <View style={[{...styles.absoluteContainer}]}>
        <Text style={{fontWeight: 'bold'}}>Select a Tile</Text>
        <View style={{flexDirection: 'row', flexWrap: "wrap",justifyContent:'center'}}>
         {tiles}
        </View>
      </View>
    </SafeAreaView>
  );
};
