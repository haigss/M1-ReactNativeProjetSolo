import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Linking } from 'react-native';
import styled from 'styled-components/native';

const API_URL = 'https://api.disneyapi.dev/characters';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState(new Set());


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data))
      .catch((error) => console.error(error));
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const renderCharacter = ({ item }) => {
    const isFavorite = favorites.has(item._id);

    return (
      <CharacterBlock>
        <CharacterContainer>
          <CharacterImage source={{ uri: item.imageUrl }} />
          <CharacterInfo>
            <CharacterName>{item.films}</CharacterName>
            <CharacterMovie>{item.movie}</CharacterMovie>
            <CharacterSpecies>{item.species}</CharacterSpecies>
            <FavoriteButton onPress={() => toggleFavorite(item._id)} isFavorite={isFavorite}>
              <FavoriteIcon isFavorite={isFavorite}>{isFavorite ? '★' : '☆'}</FavoriteIcon>
            </FavoriteButton>
            <FavoriteButton onPress={() => Linking.openURL("")} isFavorite={isFavorite}>
              <FavoriteIcon isFavorite={isFavorite}>{isFavorite ? '★' : '☆'}</FavoriteIcon>
            </FavoriteButton>
          </CharacterInfo>
        </CharacterContainer>
      </CharacterBlock>
    );
  };

  return (
    <FlatList
      data={characters}
      renderItem={renderCharacter}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <Separator />}
      contentContainerStyle={{ paddingBottom: 10 }}
    />
  );
};

const CharacterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const CharacterImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const CharacterInfo = styled.View`
  flexDirection: row;
`;

const CharacterName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CharacterMovie = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
`;

const CharacterSpecies = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 10px;
  background-color: #fff;
`;

const CharacterBlock = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
`;

const FavoriteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isFavorite ? '#ffcc00' : '#fff')};
  border-radius: 30px;
  border-width: 1px;
  border-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const FavoriteIcon = styled.Text`
  font-size: 24px;
  color: ${(props) => (props.isFavorite ? '#fff' : '#ccc')};
`;

export default App;
