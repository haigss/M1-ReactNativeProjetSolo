import React, { useState } from 'react';
import { View, ScrollView, Image, Text, Modal, TouchableOpacity,FlatList } from 'react-native';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const films = [
  {
    id: 1,
    title: 'Aasman Ko Chukar',
    description: 'Hanuman Returns',
    poster: 'https://i1.sndcdn.com/artworks-000007062388-xiwflc-t500x500.jpg',
    trailer: 'https://www.youtube.com/watch?v=b5Tqpdj8tRs&list=RDMMb5Tqpdj8tRs&start_radio=1',
  },
  {
    id: 2,
    title: 'Le Roi lion',
    description:
      'Un lionceau nommé Simba est exilé de son royaume après avoir été accusé dêtre responsable de la mort de son père, Mufasa',
    poster: 'https://i1.sndcdn.com/artworks-000007062388-xiwflc-t500x500.jpg',
    trailer: 'https://www.youtube.com/watch?v=tvvQitXftGk',
  },
  {
    id: 3,
    title: 'Dangal',
    description: 'The story of a former wrestler who trains his daughters to become world champions',
    poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-eAZoxBzm-lW88kcC50log_jC7sBxwbsrx8Tvy3vRVLy-IF5r',
    trailer: 'https://www.youtube.com/watch?v=x_7YlGv9u1g',
  },
];


const FilmCard = ({ film }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavouritePress = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{margin:5}}>
        <Poster source={{ uri: film.poster }} />
        <Title>{film.title}</Title>
      </TouchableOpacity>
      <FavoriteButton onPress={handleFavouritePress}>
        <FontAwesomeIcon icon={faHeart} size={15} color={isFavourite ? '#FF0000' : '#ffffff'} />
      </FavoriteButton>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <WebView source={{ uri: film.trailer }} startInLoadingState={true}/>
        <TrailerButton onPress={() => setModalVisible(false)}>
          <TrailerButtonText>FERMER</TrailerButtonText>
        </TrailerButton>
      </Modal>
    </Container>
  );
};

const FilmList = ({ films }) => {
  return (
    <FlatList
      data={films}  
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <FilmCard film={item} />}
    />
  );
};

const App = () => {
  return (
    <AppWrapper>
      <FilmList films={films} />
    </AppWrapper>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Poster = styled.Image`
  width: 150px;
  height: 150px;
`;

const Title = styled.Text`
  font-weight: bold;
  margin-top: 10px;
  color:white;
`;

const TrailerButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #1976d2;
  padding: 10px;
  border-radius: 5px;
`;

const TrailerButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index:1;
`;

export default App;
