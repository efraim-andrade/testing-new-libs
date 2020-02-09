import React from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';

export default function App() {
  const {
    params: { names },
  } = useRoute();

  return (
    <Container>
      <Text>Profiles</Text>

      <AllNames>
        {names.map(name => (
          <Name key={name}>{name}</Name>
        ))}
      </AllNames>
    </Container>
  );
}

const Container = styled.View`
  padding: 0 16px;

  flex: 1;
  align-items: center;
  justify-content: center;

  background: #141414;
`;

const Text = styled.Text`
  margin-bottom: 8px;

  color: #fdfdfd;
  font-size: 32px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const AllNames = styled.View`
  margin-top: 16px;

  align-items: center;
  justify-content: center;
`;

const Name = styled(ButtonText)`
  margin-bottom: 8px;

  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;
