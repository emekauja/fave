import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CatCard } from '../components/CatCard';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CatCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
