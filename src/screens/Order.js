import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Order = () => {
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%', height:60, elevation:5, justifyContent:'center', shadowColor:'#E9E9E8', backgroundColor:'#fff'}}>
            <View  style={{flexDirection:'row', width:'50%',justifyContent:'space-between', marginLeft:10}}>
                <AntDesign name="arrowleft" size={25} color="#1C1C1F"/>
                <Text style={{fontSize:19,color:'#1D1D1E'}}>Orders</Text>
            </View>   
        </View>
        <Text style={{marginTop:10}}>Jan 2020</Text>
        <View style={{width:'90%', flexDirection:'row', alignItems:'center', marginLeft:10,marginTop:15}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>          
                <View>
                    <View style={{width:30,borderBottomWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#E2E3E2'}}>                
                        <Text>12</Text>
                    </View>
                    <Text>Mon</Text>
                </View>
                <Image
                    style={{width:100, height:100, borderRadius:10, marginLeft:10}}
                    source={require('../assets/images/photo.jpg')}
                />
            </View>
            <View style={{marginLeft:10}}>
                <Text style={{fontSize:16,fontWeight:'700', color:'#4B4A4D'}}>Draggen Burger</Text>
                <Text style={{fontSize:10, color:'#818180'}}>A One restaurent, Vegas</Text>
                <Text style={{fontSize:16,color:'#4B4A4D'}}>Quantity : 2</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>                
                    <Text style={{fontSize:16,color:'#4B4A4D'}}>Total Price : </Text>
                    <FontAwesome name="rupee" size={15} color="#4B4A4D"/>
                    <Text style={{fontSize:16, color:'#4B4A4D'}}>900</Text>
                </View>

            </View>
        </View>
        <View style={[{alignSelf:'flex-end', marginRight:20, marginTop:7}, styles.delivered]}>
            <Text style={{color:'#fff'}}>Delivered</Text>
        </View>
        <View style={styles.line}/>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
    line:{
        borderWidth:1,
        width:'95%',
        alignSelf:'center',
        marginTop:4,
        borderColor:"#E2E3E2"
    }, 
    delivered:{
        width:80,
        height:30,
        backgroundColor:'green',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    }
})