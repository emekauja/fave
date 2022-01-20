import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IFavoriteCardProps {}

export const LikedCatCard: React.FC<IFavoriteCardProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>FavoriteCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
