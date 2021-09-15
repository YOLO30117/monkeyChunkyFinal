import * as React from 'react';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text : '',
      display : '',
    }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header
        backgroundColor = {"purple"}
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <TextInput
        onChangeText = {(info)=>{
          this.setState({
            text : info,
          })
        }}
        value = {this.state.text}
        style = {styles.inputBox} 
      />
      <TouchableOpacity 
      style = {styles.goButton}
      onPress = {()=>{
        this.setState({
          display : this.state.text
        })
      }}>
        <Text style = {styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style = {styles.displayText}>
        {this.state.display}
      </Text>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});
