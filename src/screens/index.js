import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../library/navigation/TabNavigator';
import {navigationRef} from '../library/utils/RootNavigation';
const Stack = createStackNavigator();

function SplashScreen() {
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      source={{
        uri: 'https://static.remove.bg/remove-bg-web/8fb1a6ef22fefc0b0866661b4c9b922515be4ae9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
      }}
      style={{width: '100%', height: '100%'}}
    />
  );
}

function MainStackNavigator(props, {navigation}) {
  return (
    <NavigationContainer ref={navigationRef}>
      {/*<Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>*/}
      <TabNavigator />
    </NavigationContainer>
  );
}

export default MainStackNavigator;
