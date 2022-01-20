import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ICatCard {}

export const CatCard: React.FC<ICatCard> = ({}) => {
  return (
    <View>
      <Text>CatCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
