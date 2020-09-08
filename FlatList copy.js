import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

const DATA = [
    {
      id: '0',
      name: "bijan mahdavi",
      title: "Los Angeles -> San Francisco",
      description: "Arrival",
      passangers: 10,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '1',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '2',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '3',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '4',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '5',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
    {
      id: '6',
      name: "bijan mahdavi",
      title: "somewhere -> somewhere else",
      description: "Departure",
      passangers: 100,
      image_locations: ["loc_1","loc_2","loc_3"],
  
    },
  ];

renderSpace = () => {
  return(
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#FFC0CB"
      }} 
    />
  );
};

getListViewItem = (item) => {
  Alert.alert(item.name, item.description);
}

componentDidMount() {
  let url = "https://pokeapi.co/api/v2/pokemon/ditto";
  fetch(url).then(response => response.json()).then(responseJSON => console.log(responseJSON)).catch(error=>console.log(error));
  console.warn(this.state.data)
}

componentDidUpdate() {
  console.warn(this.state.data)
}

function App() {
  return (
/*     <View style={styles.container}>
      <Welcome/>
      <StatusBar style="auto" />
    </View> */
     <View style ={styles.container}>
      <FlatList
        data ={DATA}
        renderItem={({item}) =>
          <Text style={styles.item}
          onPress={getListViewItem.bind(this, item)}>Flight Number: {item.id}, {item.title}, Passangers: {item.passangers}, Status: {item.description}</Text>}
          ItemSeparatorComponent = {renderSpace}
      />
    </View> 
  );
}

export function Welcome(props) {
  return(
    <View style="auto">
      <Text>Welcome, <Text/>{props.name}</Text>
    </View>
  )
}

export function Canditate(props) {
  return(
    <View>
      <Text>{props.name}</Text>
      <DevType/>
    </View>
  )
}

export function DevType() {
  return(
      <Text>Android Developer</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
  },
  item: {
    backgroundColor: '#FFC0CB',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default App;
