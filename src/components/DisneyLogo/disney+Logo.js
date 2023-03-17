import React from 'react';
import { Image } from 'react-native';

const DisneyLogo = () => {
  return (
    <Image
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png'}}
      style={{width: 200, height: 50}}
    />
  );
};

export default DisneyLogo;
