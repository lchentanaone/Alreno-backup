/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {transStyle} from './../Styling/TransacStyle';
import comingSoon from '../../assets/comingSoon.png';
import {styles} from '../Styling/Styles';
const underContruction = () => {
  return (
    <View style={transStyle.underContainer}>
      <Image source={comingSoon} style={styles.comingSoon} />
    </View>
  );
};

export default underContruction;
