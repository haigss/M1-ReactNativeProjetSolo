import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import FilmCard from "../DisneyList/FilmCard";
import styled from 'styled-components';
import home from '../../image/homeImg.jpg';
import Logo from "../../image/logosvg.png";
import CategoryList from '../../components/CategorieDisney/CatDisney';

const HomePage = () => {

  return (
    <Container>
      <ContainerB>
        <Image source={Logo} 
          style={{width:100,height:60}}/>
      </ContainerB>

      <Image
        source={home}
      />
      {/*<CategoryList/>*/}

      <TextT>Nouveautés</TextT>
      <FilmCard/>
    </Container>
  );
};

const Container=styled.View`
  width:100%;
  height:100%;
  background-color:#1A1D29;
`;
const ContainerB=styled.View`
  justify-content:center;
  align-items:center;
`;
const Image=styled.Image`
  width:100%;
  height:270px;
`;

  const TextT=styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-vertical: 10px;
  color:white;
`;


export default HomePage;
