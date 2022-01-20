import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { Favorite } from './Favorite.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = ({}) => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="All cats" component={Home} />
      <BottomTabs.Screen name="Cats i like" component={Favorite} />
    </BottomTabs.Navigator>
  );
};
