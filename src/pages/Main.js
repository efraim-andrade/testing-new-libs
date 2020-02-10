import React, { useState } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  name: Yup.string().email('E-mail inválido').required('Preencha o campo')
});

export default function App() {
  const [names, setNames] = useState([]);

  const navigation = useNavigation();

  const { control, handleSubmit, errors } = useForm({
    nativeValidation: true,
    validationSchema
  });

  const onChange = props => ({
    value: props[0].nativeEvent.text,
  });

  async function onSubmit({ name }) {
    setNames([...names, name]);
  }

  return (
    <Container>
      <Text>E-Mail</Text>

      <Controller
        name="name"
        as={<Input />}
        control={control}
        onChange={onChange}
      />

      {errors.name && <Error>{errors.name.message}</Error>}

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Enviar</ButtonText>
      </Button>

      <AllNames>
        {names.map(name => (
          <Name key={name}>{name}</Name>
        ))}
      </AllNames>

      <Link
        onPress={() =>
          navigation.push('Profile', {
            names,
          })
        }
      >
        <LinkText>Profile --></LinkText>
      </Link>
    </Container>
  );
}

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {

    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})`
  padding: 200px 16px;


  background: #333;
`;

const Text = styled.Text`
  margin-bottom: 8px;

  color: #fdfdfd;
  font-size: 32px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #f58;

  color: #fff;
`;

const Error = styled.Text`
  margin-bottom: 8px;

  color: #f58;
  font-size: 24px;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  padding: 0 20px;
  margin-top: 16px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background: #f58;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const AllNames = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})`
  margin-top: 16px;


`;

const Name = styled(ButtonText)`
  margin-bottom: 8px;

  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

const Link = styled(Button)`
  margin-bottom: 8px;

  background: #666;
`;

const LinkText = styled(ButtonText)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
