import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import VideoPlayer from '../components/Video';
import color from '../theme/color';

export default function VideoPlayerScreen({ route, navigation }) {
 const {uri, array} = route.params
  return (
    <View style={styles.containerTwo}>
      <StatusBar style="auto" />
       <VideoPlayer
          source={{ uri: uri }}
          resizeMode="cover"
          shouldPlay
          fullscreenMode = "LANDSCAPE"
          useNativeControls
          style={{ width: Dimensions.get('window').width, height: 200 }}
          
        />
         <Text style={{paddingTop: 15, padding:15, fontSize:25}}>More Videos</Text>
      <View style={styles.middle}> 
      {
        array.map((v,i) => {
            return (
            <Text onPress={() => {
              navigation.navigate('Video', {
                  screen: 'Player',
                  params: {
                    uri: v.uri,
                    array: array
                  }
                })}} key={i} style={styles.list}>{`Click to play video ${v.name}`}</Text>
            )  
        })
      }
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  containerTwo: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding:10,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor:  color.APP_BG,
    padding: 20,
    margin: 10,
  },
  list: {
 

 },
 middle: {
  flex:0.1,
  backgroundColor: color.FONT_LIGHT,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
},
});