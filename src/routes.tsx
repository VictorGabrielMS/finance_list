import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { Home } from './pages/Home';
import { Entries } from './pages/Entries';
import { Outflows } from './pages/Outflows';

import colors from './colors';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabRoutes: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Entries"
      screenOptions={({ route }) => ({
        headerTintColor: colors.font,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.font,
        tabBarIcon: ({ focused, color, size }) => {
          const ico = {
            Entries: {
              name: 'trending-up',
              color,
            },
            Outflows: {
              name: 'trending-down',
            },
          } as {
            [key: string]: any;
          };

          return <Icon name={ico[route.name].name} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name="Entries" component={Entries} />
      <BottomTab.Screen name="Outflows" component={Outflows} />
    </BottomTab.Navigator>
  );
};

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <></>,
        headerTitleStyle: {
          color: colors.font,
        },
        headerStyle: {
          backgroundColor: colors.secondary,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="App" component={BottomTabRoutes} />
    </Stack.Navigator>
  );
};
