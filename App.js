import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/LoginScreen";
import Home from "./screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Home" component={ Home }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;