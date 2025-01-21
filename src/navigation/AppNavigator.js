import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        if (route.name === 'NewReleases') {
          iconName = focused ? 'film' : 'film-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        }
        
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen 
      name="NewReleases" 
      component={HomeScreen} 
      options={{ title: 'New Releases' }}
    />
    <Tab.Screen 
      name="Search" 
      component={HomeScreen} 
      options={{ title: 'Search' }}
    />
    <Tab.Screen 
      name="Favorites" 
      component={HomeScreen} 
      options={{ title: 'Favorites' }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Main" 
        component={TabNavigator} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;