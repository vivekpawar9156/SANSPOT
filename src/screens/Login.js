import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';



const Login = ({ navigation }) => {
  return (
    <View style={{flex:1, backgroundColor:'#FFF'}}>
      <Image
        style={{width:'100%', height:450}}
        source={require('../assets/images/login1.jpg')}
      />
      <View style={{flex:1}}>
        <View style={{marginTop:10}}>
          <Text style={styles.text}>Discover the best foods from over 1,000</Text>
          <Text style={styles.text}>restaurants and fast delivery to your doorstep</Text>
        </View>

          <TouchableOpacity >
            <LinearGradient
              colors={['#EA2584', '#F14773', '#F2566A']}
              style={styles.save}>
              <Text style={styles.buttontext}>Login In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Profile')}>
            <Text style={{fontSize:15, color:'#E82F7F'}}>Create an Account</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  text:{
    alignSelf:'center',
    fontSize:15,
    color:'#4B4A4D'
  },
  save: {
    width: '90%',
    height: 55,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
  button:{
    width: '90%',
    height: 55,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:'#D6377C'
  }
})