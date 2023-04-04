import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"


const Inbox = ({navigation}) => {
  const [check, setCheck] = useState(false)
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%', height:60, elevation:5, justifyContent:'center', shadowColor:'#E9E9E8', backgroundColor:'#fff'}}>
            <View  style={{flexDirection:'row', width:'50%',justifyContent:'space-between', marginLeft:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                  <AntDesign name="arrowleft" size={25} color="#1C1C1F"/>
                </TouchableOpacity>
                <Text style={{fontSize:19,color:'#1D1D1E'}}>Inbox</Text>
            </View>   
        </View>
        <View style={{flexDirection:'row', width:'90%', justifyContent:'space-between', alignSelf:'center', marginTop:10}}>
          <Entypo name="dot-single" size={20} color="red"/>
          <View style={{}}>
            <Text style={{fontSize:15, fontWeight:'700',color:'#6C6F70'}}>MealMonkey Promotions</Text>
            <Text style={{fontSize:12,color:'#B7B8B6'}}>Lorem ipsum dolar sit omet, consectetur</Text>
          </View>
          <View>
            <Text style={{fontSize:10, color:'#7C7C7E'}}>6th july</Text>
            {check == true && 
            <TouchableOpacity activeOpacity={1} onPress={()=>{setCheck(false)}} style={{
              alignSelf:'flex-end',
              marginTop:12
            }}>
              <AntDesign name="star" size={20} color="red"/>
            </TouchableOpacity>}
            {check==false && 
            <TouchableOpacity activeOpacity={1} onPress={()=>{setCheck(true)}} style={{
              alignSelf:'flex-end',
              marginTop:12
            }}>
              <AntDesign name="staro" size={20} color="red"/>
            </TouchableOpacity>}
          </View>
          </View>
          <View style={{width:'90%', borderWidth:1, alignSelf:'center', marginTop:7, borderColor:'#E2E3E2'}}/>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({})