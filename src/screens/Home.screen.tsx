import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text, Dimensions } from 'react-native';
import { useAppContext } from '../App.provider';
import { CatCard } from '../components/CatCard';
import { ItemListLoader } from '../components/ItemList';
import AppApi from '../gateway/api';
import { IBreed } from '../types';

export const Home: React.FC = ({}) => {
  const appContext = useAppContext();

  const [catsList, setCatsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreeds();
  }, []);
  const fetchBreeds = () => {
    AppApi.get('v1/breeds')
      .then(async response => {
        setLoading(false);
        setCatsList(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ItemListLoader backgroundColor="#efefee" highlightColor="#fff" />
      </View>
    );
  }

  if (!catsList) {
    return (
      <View style={styles.container}>
        <Text>Sorry! No cats here</Text>
      </View>
    );
  }
  const renderCatItem = ({ item }: { item: IBreed }) => {
    return (
      <CatCard
        id={item.id}
        imageUrl={item?.image?.url}
        name={item?.name}
        addToFave={catItem => appContext.handleCatLike(catItem)}
        removeFromFave={catItem => appContext.handleDeleteCat(catItem)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={catsList}
        showsVerticalScrollIndicator={false}
        renderItem={renderCatItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Dimensions.get('window').width / 20,
    paddingTop: 20,
  },
  loaderContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
});
