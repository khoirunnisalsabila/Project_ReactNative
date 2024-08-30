import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './Halaman/HomeScreen';
import AddScreen from './Halaman/User/AddScreen'; // Pastikan ini sesuai dengan nama file yang ada
import EditScreen from './Halaman/User/EditScreen'; // Perbaiki penulisan agar konsisten
import ProfileScreen from './Halaman/ProfileScreen';
import DetailScreen from './Halaman/DetailScreen';
import ProductsScreen from './Halaman/MyProducts/ProductsScreen';
import ProductIdScreen from './Halaman/MyProducts/ProductIdScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HalamanUser() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

function HalamanProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function HalamanProduct() {
  return (
    <Stack.Navigator initialRouteName="ProductBaru">
      <Stack.Screen name="Product" component={ProductsScreen} />
      <Stack.Screen name="Detail Product" component={ProductIdScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          component={HalamanUser}
        />
        <Tab.Screen
          name="Profil"
          component={HalamanProfile}
          options={{
            headerShown: false,
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyProducts"
          component={HalamanProduct}
          options={{
            headerShown: false,
            tabBarLabel: 'Toko Baru',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping-search" color="red" size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
