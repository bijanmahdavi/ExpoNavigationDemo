import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import OurTextInput from './OurTextInput.js'
import { SetValuePass } from './OurTextInput.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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

function HomeScreen2() {
  return (
    <View style={styles.container}>
    <MovieList></MovieList>
    </View>)
}

function DetailsScreen2() {
  return (
    <View style={styles.container}>
    <MovieList></MovieList>
    </View>)
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
   );
 }

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
<Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
    
     return <Ionicons name={iconName} size={size} color={color}     />;
       },
    })}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component=     {SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}