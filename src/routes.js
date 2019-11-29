import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
// import Hero from './pages/Hero';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
    }
    // createStackNavigator(
    //   {
    //     Hero,
    //   },
    //   {
    //     headerLayoutPreset: 'center',
    //     headerBackTitleVisible: false,
    //     defaultNavigationOptions: {
    //       headerStyle: {
    //         backgroundColor: '#FFF',
    //       },
    //       headerTintColor: '#000',
    //     },
    //   }
    // )
  )
);

export default Routes;
