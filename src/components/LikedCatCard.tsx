import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { HeartIcon, HeartOutlineIcon } from './Icons';
import { FavCatImage } from './images/FaveCatImag';

interface IFavoriteCardProps {
  imageUrl: string;
  name: string;
  removeFromFave: () => void;
  liked: Boolean;
}

export const LikedCatCard: React.FC<IFavoriteCardProps> = ({
  imageUrl,
  name,
  removeFromFave,
  liked,
}) => {
  return (
    <View style={styles.container}>
      <FavCatImage imageUrl={imageUrl} />
      <View style={styles.detail}>
        <Text style={styles.text}>{name}</Text>

        <Pressable onPress={removeFromFave}>
          {liked ? (
            <HeartIcon size={18} color={theme.colorRed} />
          ) : (
            <HeartOutlineIcon size={18} color={theme.colorBlack} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 150,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});
