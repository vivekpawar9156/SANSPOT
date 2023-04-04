import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"

const Congratulations = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Entypo name="arrow-long-left" size={20} color="#EC1C92" style={styles.icon}/>
        </TouchableOpacity>
        <View style={styles.line}/>

        <Image
          style={styles.image}
          source={require('../assets/images/congratullations.jpg')}
        />

        <View style={{marginTop:10}}>
          <Text style={styles.boldtext}>Congratulations!!</Text>
          <Text style={styles.textmedium}>Your order has been successfully placed</Text>
          <View style={styles.dottedLine}/>
          <Text style={styles.text}>Order Number: 1234</Text>
        </View>
      </View>
    </View>
  )
}

export default Congratulations

const styles = StyleSheet.create({
  modal:{
    width:'100%',
    height:700,
    backgroundColor:'#fff',
    marginTop:'70%',
    borderTopLeftRadius:40,
    elevation:5
  },
  icon:{
    marginLeft:30,
    marginTop:40,

  },
  line:{
    borderWidth:1,
    width:'100%',
    marginTop:10,
    borderColor:'#e6e7e7'
  },
  image:{
    width:'50%',
    height:'30%',
    marginTop:10,
    alignSelf:'center'
  },
  boldtext:{
    fontSize:20,
    fontWeight:'bold',
    color:'#474747',
    alignSelf:'center',
    marginTop:10
  },
  textmedium:{
    fontSize:15,
    alignSelf:'center',
    color:'#6a6a6b'
  },
  dottedLine:{
    borderStyle: 'dashed',
    borderTopWidth: 1,
    width:'58%',
    zIndex: 0,
    borderColor:'#979796',
    alignSelf:'center',
    marginTop:10

  },
  text:{
    fontSize:12,
    color:'#5d5d5d',
    alignSelf:'center',
    marginTop: 10
  }

})