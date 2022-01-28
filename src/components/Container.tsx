import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

interface IContainerProps {}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.flexGrow}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexGrow: {
    flexGrow: 1,
    //padding: 25,
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.05,
  },
});
