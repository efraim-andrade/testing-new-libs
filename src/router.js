import React from 'react';
import styled from 'styled-components/native';
import LinearGradientLib from 'react-native-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer as Router } from '@react-navigation/native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

import { Main, Profile } from './pages';
import { Header } from './components';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Router>
      <Stack.Navigator
        screenOptions={{
          title: 'Home',
          headerTransparent: true,
          header: props => <Header {...props} title={props.scene.route.name} />,
        }}
      >
        <Stack.Screen name="Batalha da Centelha" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </Router>
  );
}
