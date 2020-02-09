import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './router';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
