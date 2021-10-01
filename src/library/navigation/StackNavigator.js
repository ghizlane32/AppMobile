import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen1} from '../../screens/screen1';
import {Screen2} from '../../screens/screen2';

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const Screen1StackNavigator = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Screen1"
        component={Screen1}
      />
    </Stack.Navigator>
  );
};

const Screen2StackNavigator = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
  );
};
export {Screen1StackNavigator, Screen2StackNavigator};
