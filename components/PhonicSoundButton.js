import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Audio } from 'expo-av'

export default class PhonicSoundButton extends React.Component {
    constructor(){
        super()
        this.state={
            pressedButtonIndex : '',
        }
    }

    playSound = async (soundBox) => {
        var soundLink = "https://s3-whitehatjrcontent.whjr.online/phones/" + soundBox + ".mp3"
        await Audio.Sound.createAsync(
            { uri: soundLink },
            { shouldPlay: true }
        )
    }

    render (){
    return (
            <View>
                  <TouchableOpacity 
                  style ={this.state.pressedButtonIndex===this.props.buttonIndex
                ?[styles.chunkButton,{backgroundColor:"white"}]
                :[styles.chunkButton,{backgroundColor:"red"}]
                }

                    onPress={() => {
                    this.playSound(this.props.soundChunk)
                    this.setState({pressedButtonIndex : this.props.buttonIndex})
                    }}>
                    <Text style={this.state.pressedButtonIndex===this.props.buttonIndex
                    ?[styles.chunkButton,{color:"black"}]
                    :[styles.chunkButton,{color:"yellow"}]
                }

                    > {this.props.wordChunk} </Text>
                </TouchableOpacity>
            </View >
        ) 
    }
}

const styles = StyleSheet.create({
    displayText: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white'
    },
    chunkButton: {
        width: '60%',
        height: 50 ,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'red'
    }
})