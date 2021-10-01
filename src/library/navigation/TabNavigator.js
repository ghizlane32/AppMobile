import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen1StackNavigator, Screen2StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarActiveTintColor: '#5089fa',
  tabBarInactiveTintColor: '#928e93',
  tabBarShowLabel: true,
  tabBarStyle: [
    {
      height: 60,
      paddingVertical: 10,
      display: 'flex',
      backgroundColor: '#f7f6f6',
    },
    null,
  ],
};

const BottomTabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="screen1"
        component={Screen1StackNavigator}
        options={{
          headerTitle: 'Trending Repos',
          tabBarLabel: 'Trending',
          headerStyle: {
            backgroundColor: '#f7f6f6',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            // color: '#8e8e93',
          },
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={!focused ? 'star-outline' : 'star'}
              color={focused ? '#5089fa' : '#928e93'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="scree2"
        component={Screen2StackNavigator}
        options={{
          tabBarLabel: 'Settings',
          headerTitle: 'Settings',
          tabBarLabelStyle: {
            fontSize: 14,
            color:'#928e93'
          },
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={!focused ? 'settings-outline' : 'settings-sharp'}
              color={focused ? '#5089fa' : '#928e93'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
