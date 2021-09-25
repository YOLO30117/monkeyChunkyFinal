import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PhonicSoundButton from './components/PhonicSoundButton'

import db from './localdb'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: '',
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"purple"}
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Image style={styles.imageIcon}
            source={{ uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png" }} />

          <TextInput
            onChangeText={(info) => {
              this.setState({
                text: info,
              })
              this.setState({
                chunks:[],
              })
            }}
            value={this.state.text}
            style={styles.inputBox}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              var word = this.state.text.toLowerCase().trim()
              console.log(word)
              db[word]
              ?(this.setState({
                chunks: db[word].chunks
              }),
              this.setState({
                phonicSounds: db[word].phones
              }))
              :alert("word does not exist in our database")
              
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <View>
                  <PhonicSoundButton
                    wordChunk={this.state.chunks[index]}
                    soundChunk={this.state.phonicSounds[index]}
                    buttonIndex={index}
                  />
                </View>

              )
            })}
          </View>
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
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 75
  },
  chunkButton: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 100,
    height: 40,
    alignSelf: 'center',
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 7,
  }
});
