import 'react-native-gesture-handler'
import React from 'react' 
import { Home } from './screens/Home'
import { Profile } from './screens/Profile'
import { Chat } from './screens/Chat'
import { Matches } from './screens/Matches'
import { RegisterUser } from './screens/RegisterUser'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Pacq' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
         <Stack.Screen
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          name="Matches"
          component={Matches}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App




