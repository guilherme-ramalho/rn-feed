import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#7640E0" />
    </Container>
  );
};

export default Loader;
