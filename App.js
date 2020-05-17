import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FirstNav from "./src/screens/FirstNav";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Nav: FirstNav,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First App",
    },
  }
);

export default createAppContainer(navigator);
