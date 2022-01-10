import React from 'react';
import styled from 'styled-components/native'
import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';



// These are Styled Componenets(you write css normally)
const RestaurantCard = styled(Card)`
background-color: white`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 7px;
background-color: white`;

const Title = styled(Text)`
padding: 16px;
color: black;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
        "https://www.sweetandsorrel.com/wp-content/uploads/2020/03/BakedJerkChicken-4-scaled.jpg" ,  
     ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

   return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};


