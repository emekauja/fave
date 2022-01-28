import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useAppContext } from '../App.provider';
import { Container } from '../components/Container';
import { LikedCatCard } from '../components/LikedCatCard';

export const Favorite: React.FC = () => {
  const appContext = useAppContext();

  return (
    <Container>
      {appContext.likedCatList.length ? (
        <View style={styles.listContainer}>
          {appContext.likedCatList.map((likedCat, index) => (
            <View style={styles.item}>
              <LikedCatCard
                key={`${likedCat.cat.id + index}`}
                imageUrl={likedCat.cat.imageUrl}
                name={likedCat.cat.name}
                removeFromFave={() => appContext.handleDeleteCat(likedCat)}
                liked={likedCat.liked}
              />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.text}>
          <Text>Like a cat to see your fave lineup!</Text>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item: {
    maxWidth: Dimensions.get('window').width / 2, // is 50% of container width: ;
    flex: 0.5,
    marginBottom: 20,
  },
});
