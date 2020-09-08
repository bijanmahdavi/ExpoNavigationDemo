import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//creating component
class MovieList extends React.Component {

    styles = StyleSheet.create({
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

    constructor() {
        super()
        this.state = {
            data:"",
            data2:""
        }
        console.warn('construtor')
    }

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

    render() {
        return (
            <View style ={this.styles.container}>
                <FlatList
                    data ={this.state.data}
                    renderItem={({item}) =>
                        <Text style={this.styles.item}
                            onPress={getListViewItem.bind(this, item)}>Flight Number: {item.abilities}, {/* {item.title} */}, Passangers: {/* item.passangers */}, Status: {/* item.description */}
                        </Text>}
                ItemSeparatorComponent = {renderSpace}
                />
          </View> 
        )
    }

Welcome(props) {
    return(
        <View style="auto">
        <Text>Welcome, <Text/>{/*props.name*/}</Text>
        </View>
        )
}

Canditate(props) {
    return(
        <View>
        <Text>{/*props.name*/}</Text>
        <DevType/>
        </View>
        )
}

DevType() {
    return(
        <Text>Android Developer</Text>
        )
}

         
}

//export
export default MovieList