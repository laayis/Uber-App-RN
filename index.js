import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';

import store from './redux/configureStore';


registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'uberApp.MapScreen', // unique ID registered with Navigation.registerScreen
    title: 'App Uber', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarHidden: true,
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
