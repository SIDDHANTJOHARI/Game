import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from '../../components/StyledComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import {W} from '../../util/GlobalStyles';
import useBackButton from '../../util/useBackHandler';
import {Screens} from '../../constants/appConstants';
import {useIsFocused} from '@react-navigation/core';

const Scores = props => {
  const isFocussed = useIsFocused();
  useBackButton(() => {
    props.navigation.navigate(Screens.HOME);
    return true;
  });
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('scores').then(res => {
      if (res == undefined) setScores([]);
      else setScores(res.split(','));
      setLoading(false);
    });
  }, [isFocussed]);
  return (
    <View style={{flex: 1}}>
      <Header {...props} />
      {loading ? (
        <ActivityIndicator color="red" />
      ) : scores.length == 0 ? (
       <View style={{alignItems:'center'}}><Text>No Record</Text></View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 60}}>Scores</Text>
          <ScrollView style={{padding: 10}}>
            {scores.map(it => (
              <View
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginRight: W(100),
                  }}>
                  Test User:
                </Text>
                <Text>{it}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Scores;
