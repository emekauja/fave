import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { Favorite } from './Favorite.screen';
import { CatIcon, HeartIcon } from '../components/Icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = ({}) => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({}) => ({
        tabBarActiveTintColor: theme.colorBlack,
        tabBarInactiveTintColor: theme.colorGrey,
        headerTitleAlign: 'left',
        headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        tabBarLabelStyle: {
          fontFamily: theme.fontFamilyRegular,
          fontSize: 13,
        },
        headerStyle: {
          // below four properties will remove the shadow
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          elevation: 0,
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'All Cats',
          tabBarLabel: 'All cats',
          tabBarIcon: ({ color, size }) => (
            <CatIcon {...{ color }} {...{ size }} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: 'Cats I Like',
          tabBarLabel: 'Cats i like',
          tabBarIcon: ({ color, size }) => (
            <HeartIcon {...{ color }} {...{ size }} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
