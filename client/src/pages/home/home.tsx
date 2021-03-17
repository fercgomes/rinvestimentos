import { Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

const HomePage = () => {
  return (
    <Container centerContent>
      <Heading size="lg" color="primary.900">
        Disclaimer
      </Heading>
      <Text style={{ textAlign: 'center' }}>
        Nenhuma informação encontrada dentro desse site é recomendação de
        investimento.
      </Text>
    </Container>
  );
};

export default HomePage;
