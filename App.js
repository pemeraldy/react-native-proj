import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import FirstNav from './src/screens/FirstNav'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Nav: FirstNav

  },
  {
    initialRouteName: "Nav",
    defaultNavigationOptions: {
      title: "First App"
    }
  }
);

export default createAppContainer(navigator);
