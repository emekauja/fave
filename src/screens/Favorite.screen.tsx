import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Favorite: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
