/* eslint-disable no-extra-boolean-cast */
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { CatType, ILikedCat } from '../types';
import { HeartIcon, HeartOutlineIcon } from './Icons';
import { CatImage } from './images/CatImage';

interface ICatCard {
  imageUrl: string;
  name: string;
  id: number;
  addToFave?: (catItem: CatType) => void;
  removeFromFave?: (catItem: ILikedCat) => void;
}

export const CatCard: React.FC<ICatCard> = ({
  imageUrl,
  name,
  id,
  addToFave,
  removeFromFave,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleSelect = React.useCallback(() => {
    if (isLiked) {
      setIsLiked(false);
      if (!!removeFromFave) {
        removeFromFave({ cat: { imageUrl, name, id }, liked: isLiked });
      }
    } else {
      setIsLiked(true);
      if (!!addToFave) {
        addToFave({ imageUrl, name, id });
      }
    }
  }, [addToFave, id, imageUrl, isLiked, name, removeFromFave]);

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <CatImage imageUrl={imageUrl} />
        <Text style={styles.text}>{name}</Text>
      </View>

      <Pressable onPress={handleSelect}>
        {isLiked ? (
          <HeartIcon size={18} color={theme.colorRed} />
        ) : (
          <HeartOutlineIcon size={18} color={theme.colorBlack} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  text: {
    paddingHorizontal: 15,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
