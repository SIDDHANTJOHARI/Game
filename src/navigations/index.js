import React from 'react';
import {Screens} from '../constants/appConstants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import Home from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';
import TilesScreenJs from '../screens/TilesScreen.js';
import Scores from '../screens/Scores';
import Splash from '../screens/SplashScreen'
const Drawer = createDrawerNavigator();
const DrawerNavigator = props => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={Screens.SPLASH} component={Splash} />

      <Drawer.Screen name={Screens.HOME} component={Home} />
      <Drawer.Screen name={Screens.ABOUT_US} component={AboutUs} />
      <Drawer.Screen name={Screens.TILES_SCREEN} component={TilesScreenJs} />
      <Drawer.Screen name={Screens.SCORES} component={Scores} />
    </Drawer.Navigator>
  );
};
export default props => {
  return <DrawerNavigator />;
};
