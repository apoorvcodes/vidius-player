import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import VideoPlayer from '../components/Video';

export default function VideoPlayerScreen({ route, navigation }) {
 const {uri, array} = route.params
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <VideoPlayer
          source={{ uri: uri }}
          resizeMode="cover"
          shouldPlay
          fullscreenMode = "LANDSCAPE"
          useNativeControls
          style={{ width: Dimensions.get('window').width, height: 200 }}
          
        />
         <Text style={{paddingTop: 25, padding:20, fontSize:25}}>More Vids</Text>
      <View> 
      {
        array.map((v,i) => {
            return (

            <Text style={styles.list}>{`Click to play video ${v.name}`}</Text>
            )  
        })
      }
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    shadowColor: "#000000",
    borderTopWidth: 1,
    borderBottomWidth:1,
    fontSize: 15,
    padding: 20,
 },
});