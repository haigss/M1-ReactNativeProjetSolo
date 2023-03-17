import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import disney from "../../image/disney.jpg";
import { useNavigation } from '@react-navigation/native';
import Login from '../LoginForm/loginFormDisney';

const BackgroundImage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };
  return (
    <Container>
      <ImageBackground source={disney} />
      <Content>
        <ButtonContainer>
          <Button onPress={handlePress}>
            <ButtonText>LOGIN</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content:center;
`;

const ImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  reziseMode:cover;
  justifyContent:flex-end;
`;

const ButtonContainer = styled.View`
  alignItems: center;
  marginTop:200px;
`;

const Content = styled.View`
  // Add your content styles here
`;
const Button = styled.TouchableOpacity`
  background-color: #fff;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 10px;
  align-self: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;


export default BackgroundImage;