import React, {useState} from 'react';
import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

const Lunch = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Entypo name="arrow-long-left" size={20} color="#EC1C92" />
        <View style={styles.circle}>
          <Image
            style={styles.cricleimg}
            source={require('../assets/images/profile.png')}
          />
        </View>
      </View>




      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: '#51508D', fontWeight: '700'}}>
              Lunch
            </Text>
            <AntDesign name="caretdown" size={25} color="#E11C89" />
          </View>
          <View
            style={{
              borderWidth: 4,
              width: 35,
              borderRadius: 10,
              borderColor: '#ED2C7E',
            }}
          />
        </View>
        <Image
          style={styles.lunchbox}
          source={require('../assets/images/lunchbox.jpg')}
        />
      </View>

      <Text style={{fontSize:16, fontWeight:'600',marginLeft:20, marginTop:10}}>Select Veg or Non-veg</Text>
        
      <View style={styles.lunchboxview}>
            <View style={{flexDirection:'row', alignItems:'center',marginLeft:15}}>         
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={styles.checkbox}
                    tintColors={{ true: '#2686D3', false: '#B9B8B8' }}
                    
                />
                <Text style={{fontSize:16, color:'#2686D3'}}>Veg Items</Text>
            </View>
            <Text style={{width:'80%', marginLeft:15, fontSize:14, color:'#4B4A4B'}}>
                Sukhi bhaji, rassa bhaji, dal fry, rice,2 chapati
            </Text>
      </View>

      <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:15, color:'#fff'}}>Confirm</Text>
      </TouchableOpacity>




    </View>
  );
};

export default Lunch;

const styles = StyleSheet.create({
  cricleimg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  lunchbox: {
    width: 150,
    height: 170,
  },
  lunchboxview:{
    width:'90%',
    height:100,
    alignSelf:'center',
    marginTop:10,
    elevation:5,
    backgroundColor:'#fff',
    shadowColor:'#D8DADD'
  },
  checkbox:{
    // backgroundColor:'#2686D3'
    width:50,
    height:50
  },
  button:{
    width:100,
    height:60,
    backgroundColor:'#EF2A7E',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:20,

    }
});
