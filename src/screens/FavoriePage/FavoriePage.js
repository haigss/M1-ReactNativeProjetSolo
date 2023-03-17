import React, { useState } from 'react';
import { View, Text, FlatList,  Image,  TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const FavoriteCharactersPage = ({ favorites }) => {
  const [data, setData] = useState(favorites);

  const renderItem = ({ item }) => (
    <CharacterBlock>
      <CharacterContainer>
        <CharacterImage source={{ uri: item.poster }} />
        <CharacterName>{item.title}</CharacterName>
      </CharacterContainer>
    </CharacterBlock>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const CharacterBlock = styled.View`
  background-color: #fff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
  margin: 5px;
  flex-basis: 0;
  flex-grow: 1;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const CharacterContainer = styled.View`
  padding: 10px;
  align-items: center;
`;

const CharacterImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const CharacterName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

const CharacterInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const FavoriteButton = styled.TouchableOpacity`
  background-color: ${({ isFavorite }) => (isFavorite ? '#FFC107' : '#f2f2f2')};
  padding: 5px 10px;
  border-radius: 5px;
`;

const FavoritesButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const FavoritesButton = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 10px;
  background-color: #4caf50;
  border-radius: 5px;
`;

const Separator = styled.View`
  height: 1px;
  background-color: #ccc;
`;

export default FavoriteCharactersPage;