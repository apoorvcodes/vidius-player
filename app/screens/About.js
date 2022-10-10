import { View, Text, Button , StyleSheet} from 'react-native';
import color from '../theme/color';
//{ uri,  filename}
export default function About() {
  return (
  <View style={styles.container}> 
  <View style={styles.middle}>
  <Text style={{fontSize: 30}}>Vidius</Text>
    <Text style={{fontSize: 30}}>Version : 1.0.0</Text>
    <Text style={{fontSize: 20}}>Made By</Text>
    <Text style={{fontSize: 25}}>Sunbeam Bhagwanpur</Text>
    <Text style={{fontSize: 25}}>Team Code: CF 24</Text>
  </View>
  </View>
    
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: color.APP_BG,
    padding: 20,
    margin: 10,
  },
    middle: {
      flex:1,
      backgroundColor: color.FONT_LIGHT,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
    },
    
  });
  