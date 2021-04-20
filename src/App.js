import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './screens/Home';

const src = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#7640E0" />
      <Home />
    </SafeAreaView>
  );
};

export default src;
