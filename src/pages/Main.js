import React, { useState } from 'react';
import Joi from '@hapi/joi';
import styled from 'styled-components/native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Joi.object().keys({
  name: Joi.string()
    .email({ tlds: false })
    .required()
    .empty()
    .min(5)
    .max(20)
    .messages({
      'string.base': `Precisa ser um texto`,
      'string.email': `Precisa ser um email`,
      'string.empty': `Preencha o dado`,
      'string.min': `Precisa ter no minimo {#limit} caracteres`,
      'string.max': `Nao pode passar de  {#limit} caracteres`,
      'any.required': `Informe um nome`,
    }),
});

const resolver = (data, validationContext) => {
  const { error, value: values } = validationSchema.validate(data, {
    abortEarly: false,
  });

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous, currentError) => {
          return {
            ...previous,
            [currentError.path[0]]: currentError,
          };
        }, {})
      : {},
  };
};

export default function App() {
  const [names, setNames] = useState([]);

  const navigation = useNavigation();

  const { control, handleSubmit, errors } = useForm({
    nativeValidation: true,
    validationResolver: resolver,
    validationContext: { test: 'test' },
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

const Container = styled.View`
  padding: 0 16px;

  flex: 1;
  align-items: center;
  justify-content: center;

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

const Link = styled(Button)`
  margin-bottom: 8px;

  background: #666;
`;

const LinkText = styled(ButtonText)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
