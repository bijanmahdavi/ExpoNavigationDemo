import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import OurTextInput from './OurTextInput.js'
import { SetValuePass } from './OurTextInput.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListt, { Welcome } from './FlatList.js'
import MovieList from './MovieList.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Welcome name="Bijan"/>
      <Text>Login!</Text>
      <OurTextInput></OurTextInput>
      <SetValuePass></SetValuePass> 
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
    <MovieList></MovieList>
    </View>)
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
    <MovieList></MovieList>
    </View>)
}

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}