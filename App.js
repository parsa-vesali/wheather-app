import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import HomeScreens from './screens/HomeScreens';
export default function App() {
  return (
    <HomeScreens />
  );
}

