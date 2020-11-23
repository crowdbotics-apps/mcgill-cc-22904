import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2177663Navigator from '../features/BlankScreen2177663/navigator';
import BlankScreen1177662Navigator from '../features/BlankScreen1177662/navigator';
import BlankScreen0177661Navigator from '../features/BlankScreen0177661/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2177663: { screen: BlankScreen2177663Navigator },
BlankScreen1177662: { screen: BlankScreen1177662Navigator },
BlankScreen0177661: { screen: BlankScreen0177661Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
