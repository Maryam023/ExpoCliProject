import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

 function App() {
   const clickMe=(msg)=>{
     alert("Message:" +msg);

   }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my first React Native app!</Text>
      <View style={styles.button} >
        <Button  title="Press me!" onPress={clickMe.bind(this, "You pressed the button!")}></Button>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize : 24

  },
  button:{
    color:"maroon",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71"
  }
});
export default App;