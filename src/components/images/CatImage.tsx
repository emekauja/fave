import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { CatImageLoader } from '../ItemList';

interface ICatImageProps {
  imageUrl: string;
}

export const CatImage = ({ imageUrl }: ICatImageProps) => {
  const [imageLoading, setImageLoading] = React.useState(false);

  return (
    <View style={styles.relative}>
      {imageLoading && (
        <View style={styles.activityIndicator}>
          <CatImageLoader />
        </View>
      )}
      <Image
        source={{ uri: imageUrl }}
        style={styles.catImage}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  relative: {
    position: 'relative',
  },
  catImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
