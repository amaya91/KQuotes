import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Quote from './Quote';

class App extends Component {

      state = {
        data: ''
      }

   handleQuote = () => {
        fetch('http://api.kanye.rest', {
              method: 'GET'
            })

            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson.quote);
              this.setState({
                data: responseJson.quote
              })
            })
            .catch((error) => {
              console.error(error);
            });
   }


  componentDidMount = () => {
    this.handleQuote();
  }

  render() {
    return (
    <View style={styles.container}>
          <Quote props={this.state.data}></Quote>
          <TouchableHighlight
            onPress={this.handleQuote}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get New Quote</Text>
          </TouchableHighlight>
     </View>
    );
  }
}

export default App;

 const styles = StyleSheet.create({
   container: {
     padding: 10,
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
     button: {
       height: 50,
       backgroundColor: 'black',
       borderColor: 'black',
       alignSelf: 'center',
       margin: 10,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 5,
       padding: 10
     },
     buttonText: {
       color: '#fff',
       fontSize: 18,
     },
 });
