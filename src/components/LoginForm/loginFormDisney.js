import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import disney from "../../image/colorDisney.jpg";
import { Image, Text } from 'react-native';
import Logo from "../../image/logosvg.png";


const Login = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    axios({
      method: 'POST',
      url: 'https://login.hikkary.com/users/login',
      data: {
        username: inputs.email,
        password: inputs.password,
      },
    })
      .then(res => {
        //console.log(res.headers['x-access-token']);
        AsyncStorage.setItem('token', res.headers['x-access-token'])
          .then(() => {
            navigation.navigate('Home');
          })
          .catch(err => {
            console.log('🚀 ~ file: login.js:6 ~ Login ~ err', err);
          });
      })
      .catch(err => {
        console.log('🚀 ~ file: login.js:6 ~ Login ~ err', err);
      });
  };

  return (
    <Container>
      <Image source={Logo} 
      style={{width:400,height:250}}/>
      <TextH2>
        Identifiez-vous avec votre adresse e-mail.
      </TextH2>
      <TextDetail>
        Cette adresse e-mail et ce mot de passe vous permettrons de vous identifier sur votre compte Disney+ pour profiter de vos séries et fims préférés.
      </TextDetail>
        <InputContainer>
          <TextInputStyled
            placeholder="Email"
            value={inputs.email}
            onChangeText={text => setInputs({...inputs, email: text})}
          />
        </InputContainer>
        <InputContainer>
          <TextInputStyled
            placeholder="Password"
            value={inputs.password}
            onChangeText={text => setInputs({...inputs, password: text})}
          />
        </InputContainer>
        <Touchable onPress={handleLogin}>
          <StyledText>LOGIN</StyledText>
        </Touchable>
        <Touchable onPress={() => navigation.goBack()}>
          <StyledText>-Back</StyledText>
        </Touchable>
        <SignupContainer>
        <SignupText>Nouveau sur Disney+ ?</SignupText>
        <Touchable>
          <SignupLink>S'inscrire</SignupLink>
        </Touchable>
      </SignupContainer>
    </Container>
  );
};

const TextH2=styled.Text`
margin:15px;
color:white;
font-size:25px;
`;
const TextDetail=styled.Text`
color:white;
marginLeft:15px;
marginRight:15px;

`;


const SignupContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  marginTop: 50px;
`;

const SignupText = styled.Text`
  color: #999;
`;

const SignupLink = styled.Text`
  color: #1f82c0;
  marginLeft: 5px;
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

const InputContainer = styled.View`
  marginLeft: 10px;
  marginRight:10px;
  padding:4px;
`;

const TextInputStyled = styled.TextInput`
  background-color: #31343E;
  padding: 12px;
  background:white;
  color:black;
  border-radius:2px;
`;

const Touchable = styled.TouchableOpacity`
  marginLeft: 10px;
  marginRight:10px;
  `;

const StyledText = styled.Text`
  color: white;
  border:1px;
  background:white;
  padding:5px;
  textAlign:center;
  background-color: #0063E5;
  padding-vertical: 10px;
  border-radius: 2px;
  font-size:15px;
`;

const Container = styled.View`
  flex: 1;
  justify-content:center;
  background-color:#1A1D29;
`;


export default Login;