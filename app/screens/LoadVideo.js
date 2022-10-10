import { View, Text, Button , StyleSheet} from 'react-native';
import { useVideo } from '../hooks/useVideo';
import { useState, useEffect } from 'react';
import color from '../theme/color';
//{ uri,  filename}
export default function Video({ navigation }) {
  const [vidArray, setArray] = useState([])
  return (
  <View style={styles.container}> 
    <Button title='' onPress={useVideo(vidArray,setArray)}/>
    <Text style={styles.center}>Play following Videos</Text>
    <View style={styles.container}>
 
   {
        vidArray.map((v,i) => {
            return (

            <View key={i}  style={styles.middle}>
              <Text style={styles.list} onPress={() => {
              navigation.navigate('Video', {
                  screen: 'Player',
                  params: {
                    uri: v.uri,
                    array: vidArray
                  }
                })
          }}>{`Click to play video ${v.name}`}</Text></View>
            )  
        })
      }
      </View>
      </View>
    
  );
}


const styles = StyleSheet.create({
  center: {
    fontSize: 25
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: color.APP_BG,
    padding: 20,
    margin: 10,
  },
    list: {
       fontSize: 15,
    },
    middle: {
      flex:0.1,
      backgroundColor: color.FONT_LIGHT,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
    },
    
  });
  