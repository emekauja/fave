import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-svg';

interface ICatCard {}

export const CatCard: React.FC<ICatCard> = ({}) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
        }}
        style={styles.catImage}
      />
      <Text>CatCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  catImage: {
    width: 40,
    height: 40,
  },
});
