import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../SignInScreen';
import GroupsScreen from '../GroupsScreen';
import AddGroupScreen from '../AddGroupScreen';
import ChatScreen from '../ChatScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator name="Chat">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Groups Screen"
          component={GroupsScreen}
          options={{title: 'Groups'}}
        />
        <Stack.Screen
          name="Add Group Screen"
          component={AddGroupScreen}
          options={{title: 'Add Group'}}
        />
        <Stack.Screen
          name="Chat Screen"
          component={ChatScreen}
          options={{title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*function MainStackNavigator() {
  return ChatFlow();
}*/

export default MainStackNavigator;
