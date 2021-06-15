import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ThemeContext from './src/contexts/theme';
import OnBoardStack from './src/navigations';
export default (props) => {
  return (
      <ThemeContext>
        <NavigationContainer>
          <OnBoardStack />
        </NavigationContainer>
      </ThemeContext>
  );
}