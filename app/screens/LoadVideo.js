import { View, Text, Button , StyleSheet} from 'react-native';
import { useVideo } from '../hooks/useVideo';
import { useState, useEffect } from 'react';
//{ uri,  filename}
export default function Video({ navigation }) {
  const [vidArray, setArray] = useState([])
  return (
    <View style={styles.container}>
   <Button title='Sync Videos' onPress={useVideo(vidArray,setArray)}/>
   {
        vidArray.map((v,i) => {
            return (

            <Text key={i} onPress={() => {
                navigation.navigate('Video', {
                    screen: 'Player',
                    params: {
                      uri: v.uri,
                      array: vidArray
                    }
                  })
            }} style={styles.list}>{`Click to play video ${v.name}`}</Text>
            )  
        })
      }
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    paddingTop: 25,
    },
    list: {
       shadowColor: "#000000",
       borderTopWidth: 1,
       borderBottomWidth:1,
       fontSize: 15,
       padding: 20,
    },
    box: {
     flex:1,
     justifyContent: "center",
     alignContent: "center"
    }
  });
  