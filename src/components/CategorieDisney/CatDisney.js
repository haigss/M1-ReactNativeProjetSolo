import React from 'react';
import { FlatList, Image } from 'react-native';
import styled from 'styled-components/native';

const categories = [
  {
    id: 1,
    title: 'Marvel',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22Ic55Hxy_Ic3baFwWQ5QuEJ-Zu6S29LzIA&usqp=CAU',
  },
  {
    id: 2,
    title: 'Disney',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVdmyl4tfibQhofugaC4Sq-r7dGm7luI2bA&usqp=CAU',
  },
  {
    id: 3,
    title: 'Pixar',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLTsyP3g6QD0-t-RMZdWuDBvS0OGjs8KX2w&usqp=CAU',
  },
  {
    id: 4,
    title: 'National Geographic',
    poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAh1BMVEX///8AAAD61wD//PT60wD854f62Bj86Ir+99Xt7e374FfX19fo6Oj8/Pz19fVWVlb98LP73kq2traRkZHi4uKLi4uFhYXJyck0NDRfX1+jo6Nra2sjIyOurq6YmJh2dnZFRUUODg48PDxNTU0YGBgrKyv87J3976z98Ln74GW/v7/72TH9+eQiur4NAAAEt0lEQVRoge2XW3ujNhCGNek2W1VCNFggi5OwgR5o///v6zfCdg7rTeLEfnYv9F1gQFgvMxrNDEIkJSUlJSUlJSUlJSUlJSUlJSX99Prl4fdv9fDn7bl35/Tr7blf7u9fUu8/yM0u49799cdT/f3P0V4TFP8UJU9Y1cJsqqiirqQQumyaBQNLiMxNgaMNDscu6Pdwv7y49fXIlbTjn2oC1xJJM1NU5ckKRbQjaoToqeR3nCscN3xDBFKf5MZpyjbj2YkNEuRxyHdaEE8eaMMjMNJsmTvRLK/BnRgWuVTOTMyO3A5EPNHuMnB3ZuU6qvkdPs8tiHTkKtJs5CO3YYAQ+KlpgVsiNwyWPfR57uLAYW5JoqPlkWtHLLFgxFKT8FRkzIUPxtlcw14YVPTgUpCOTTlx/Tp3tFdoau2+gpudqeCHa3Blu23mTMU4Rsyc/FzGMMtysuCKgpqhAg8RTuEqXLEQbbOKlFMeppy4Lp4o2iOeo93YTRSUW6YWXPt5rqhoa4g3yQJTTn4WOZXazXiVyJUzbVw0E2+HRVfqDfTb3Gw7LzF4LU0moxxnHFTZyK7vxMrF2pYhnvRUBR7Zv541X+NmykS8let6WVxHO6ziSVVX8PhxUCu9/gln1n7G3lvq5+QuebvdSNH5xudYa9PPbbBc77JunPZ1JnrvfS3joyP7O3jf1EYUueMS1WQ253SqQttWzx3/6voGmhpOECXt8xF7eaS8iVUAZ9smJ4n9M4w0MdjHsrSncaBW1ByRiDyjONl0RL7hEHwnd0MegaMznMRaFKjmLdsa4Eoe4X3Lb9XjHDUEjwyk8bZLF7n5ysU/VJzmnVyUwcOzK9fSli8qKhQNh2eZu/Durueety+4MK+LuVwcuD5evNAr3CVW35XbK2UchfV2qNnwEzdejY1ls5lbkuvIoy+ZmRtkO5uLuDVPdOByiujWa+CrkwUN1TU73uIOzcwtNnBLvTYmkWuRSy/idjFS9N6zvcgZRcyWzF2LgkJr03C50PyODiVZg0scFPWjn4PeXci1CExwd+NhfQ+rCrPXFeDC2JDlsI48gj/Yz9FVp7gKuHemPL0WzzkvnJyO3GydoCVrWt5MKnIVlwtFndSKxjPcBhf+Mi56yAohwtzKLQsMnAqXs/dRHGvXr1x0eGYTcTsyw1oCn3HxOzoXvskbd9/jChVrTrXGFdy5cCO74c21sGOn/hDP1T5GfkndeLR3eeQKNCF0aEefcR+e698n+dkqrjJGs8AzSh1acoMRrKvUJo7GnWK0lGt6MPEGLjIdk6g+/e8J9+V3yv1Hv1Mu0fnvsq+v/SW77EvoO/rtnP6LQyb3o6i854zukKtkwx8DqEf9ODqV++ZMHrqGJCklBuxWxeVGIvdjQ6DcNYNyFt2UuoLZ57k4DIXYIjj3oRZ6nmtwFScKbKrbQCN3U4qx7Ccjut7lQg+KzKiKIYtc9Jm34nadGHPOTbkPJDWa5bxRS6wvjrIbYcGFYcNS4asLfftUSPSmW1ImpoCb+hkWbTtNqkYlqnI9Z4gtJVw7DM7RsH37c+RDyjhgrRQKHTTnKsMc7qklugCkLnUrRyclJSUlJSUlJSUlJSUlJSUlJf0o/Q8frV92qwqt3QAAAABJRU5ErkJggg==',
  },
];

const CategoryList = () => {
  const renderItem = ({ item }) => (
    <CategoryItem>
      <CategoryImage source={{ uri: item.poster }} />
    </CategoryItem>
  );

  return (
    <CategoryContainer>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </CategoryContainer>
  );
};

const CategoryContainer = styled.View`
  padding: 20px;
  background-color: #1A1D29;
`;

const CategoryItem = styled.View`
  margin-left: 10px;
`;

const CategoryImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export default CategoryList;
