import { View, Text, Button , StyleSheet} from 'react-native';
import { useVideo } from '../hooks/useVideo';
import { useState, useEffect } from 'react';
import { getAllKey, getKey, setKey } from '../hooks/useSaveHooks';
//{ uri,  filename}
export default function Video({ navigation }) {
  const [vidArray, setArray] = useState([])
  async function vidHook() {
    const result = await useVideo();
    if(result.cancelled) return
    setArray(vidArray => [...vidArray, {uri: result.uri, name: result.fileName}]);
    return;
  }

  return (
    <View style={styles.container}>
      <Button title="Load Video" onPress={vidHook} />
      <Text style={{paddingTop: 25, padding:20, fontSize:25}}>Play Videos bellow</Text>
      <View> 
      {
        vidArray.map((v,i) => {
            return (

            <Text onPress={() => {
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
  