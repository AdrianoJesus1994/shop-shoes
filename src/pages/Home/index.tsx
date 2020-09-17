import React from 'react';
import {Text} from 'react-native';
import {Header} from '../../components';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Text>Teste</Text>
    </Container>
  );
};

export default Home;
