import { Navigation } from 'react-native-navigation';

import MapScreen from './MapScreen/MapScreen';
import SearchScreen from './SearchScreen/SearchScreen';
import ProductsScreen from './ProductsScreen/ProductsScreen';
import RideScreen from './RideScreen/RideScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('uberApp.MapScreen', () => MapScreen, store, Provider);
  Navigation.registerComponent('uberApp.SearchScreen', () => SearchScreen, store, Provider);
  Navigation.registerComponent('uberApp.ProductsScreen', () => ProductsScreen, store, Provider);
  Navigation.registerComponent('uberApp.RideScreen', () => RideScreen, store, Provider);
}
