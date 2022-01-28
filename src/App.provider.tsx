import React, { useCallback, useState } from 'react';
import { CatType, ILikedCat } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'my-app-data';

interface IAppData {
  cats: ILikedCat[];
}

const getAppData = async (): Promise<IAppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: IAppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

interface IAppContext {
  likedCatList: ILikedCat[];
  handleCatLike: (cat: CatType) => void;
  handleDeleteCat: (cat: ILikedCat) => void;
}
const defaultValue = {
  likedCatList: [],
  handleCatLike: () => {},
  handleDeleteCat: () => {},
};
const AppContext = React.createContext<IAppContext>(defaultValue);

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [likedCatList, setLikedCatList] = useState<ILikedCat[]>([]);

  React.useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setLikedCatList(data.cats);
      }
    };
    getDataFromStorage();
  }, []);

  const handleCatLike = useCallback((cat: CatType) => {
    setLikedCatList(current => {
      const newCatArray = [...current, { cat, liked: true }];
      setAppData({ cats: newCatArray });

      return newCatArray;
    });
  }, []);

  const handleDeleteCat = React.useCallback((catToDelete: ILikedCat) => {
    setLikedCatList(current => {
      const newValue = current.filter(
        item => item.cat.id !== catToDelete.cat.id,
      );
      setAppData({ cats: newValue });
      return newValue;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ likedCatList, handleCatLike, handleDeleteCat }}>
      {children}
    </AppContext.Provider>
  );
};
