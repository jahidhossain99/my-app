import React from 'react'
import {View, Text ,SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './components/ColorBox';

const App = () =>{
return (
<SafeAreaView>
<View style={styles.heading}>
  <Text style={styles.text}>Here are some boxes of different color</Text>
  <ColorBox ColorName='Cyan' ColorHex='#2aa198'/>
  <ColorBox ColorName='Blue' ColorHex='#268bd2'/>
  <ColorBox ColorName='Magenta' ColorHex='#d33682'/>
  <ColorBox ColorName='Orange' ColorHex='#cb4b16'/>
 </View>
</SafeAreaView>
);
};


const styles = StyleSheet.create({
  heading:{
    paddingTop:20,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
  },

});
export default App;