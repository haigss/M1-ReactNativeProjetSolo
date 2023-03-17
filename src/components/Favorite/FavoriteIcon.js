import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const FavoriteIcon = ({ isFavorite, onPress }) => {
  return (
    <FavoriteButton onPress={onPress}>
      {isFavorite ? (
        <FontAwesome name="heart" size={24} color="#f00" />
      ) : (
        <FontAwesome name="heart-o" size={24} color="#ccc" />
      )}
    </FavoriteButton>
  );
};

const FavoriteButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export default FavoriteIcon;
