import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ISkeletonLoaderProps } from '../types';
import { Loader, SkeletonLoader } from './loader/SkeletonLoader';

export const ItemListLoader = ({
  backgroundColor,
  highlightColor,
}: ISkeletonLoaderProps) => {
  return (
    <SafeAreaView>
      <SkeletonLoader
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}>
        <View style={styles.container}>
          {new Array(10).fill(null).map((_, index) => (
            <CatItem key={index} />
          ))}
        </View>
      </SkeletonLoader>
    </SafeAreaView>
  );
};

const CatItem = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.row}>
      <Loader style={styles.catImage} />
      <Loader
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.line, { width: width * 0.5, marginRight: 'auto' }]}
      />
      <Loader style={[styles.line, { width: width * 0.06 }]} />
    </View>
  );
};

export const CatImageLoader = ({}) => {
  return (
    <SkeletonLoader backgroundColor="#efefee" highlightColor="#fff">
      <Loader style={styles.catImage} />
    </SkeletonLoader>
  );
};
export const FaveCatImageLoader = ({}) => {
  return (
    <SkeletonLoader backgroundColor="#efefee" highlightColor="#fff">
      <Loader style={styles.favCatImage} />
    </SkeletonLoader>
  );
};

const Item = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.row}>
      <Loader style={styles.image} />
      <View>
        <Loader style={[styles.line, { width: width * 0.6 }]} />
        <Loader style={[styles.line, { width: width * 0.4 }]} />
        <Loader style={[styles.line, { width: width * 0.2 }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  row: { flexDirection: 'row', marginBottom: 40, alignItems: 'center' },
  justifyBetween: { flexDirection: 'row', alignItems: 'center' },
  image: { height: 40, width: 40, marginRight: 10 },
  catImage: { height: 40, width: 40, marginRight: 10, borderRadius: 10 },
  favCatImage: { width: 150, height: 150, borderRadius: 10, marginBottom: 5 },
  line: { height: 20, marginBottom: 10 },
});
