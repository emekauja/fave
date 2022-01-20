import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';

export const Favorite: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView>
      <Text>Favorite</Text>
      <Text>
        {appContext.likedCatList.map(item => (
          <Text>{item.cat.name}</Text>
        ))}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
