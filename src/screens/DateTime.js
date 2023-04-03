import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'
import Feather from 'react-native-vector-icons/Feather'

const DateTime = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  console.log(month[date.getMonth()])




  // useEffect(() => {
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year
  //   var hours = new Date().getHours(); //Current Hours
  //   var min = new Date().getMinutes(); //Current Minutes
  //   var sec = new Date().getSeconds(); //Current Seconds
  //   setCurrentDate(
  //     date + '/' + month + '/' + year 
  //     + ' ' + hours + ':' + min + ':' + sec
  //   );
  // }, []);
  return (
    <View style={{flex:1, backgroundColor:'red'}}>
      <View style={styles.modal}>
        <Entypo name="arrow-long-left" size={20} color="#EC1C92" style={styles.icon}/>
        <View>
          <Text style={{alignSelf:'center', marginTop:30, fontSize:19, fontWeight:'800', color:'black'}}>SELECT ADDRESS</Text>
          <Text style={{alignSelf:'center', marginTop:30, fontSize:19, fontWeight:'800', color:'black'}}>SELECT DATE & TIME</Text>
        </View>
        <Text style={{marginTop:20, fontSize:16, color:'#464746', marginLeft:20}}>Delivery Date & Time</Text>
        <View style={[{width:'90%', height:60, alignSelf:'center', marginTop:10}, styles.xyz]}>
          <View style={[{width:'45%', height:40}, styles.view]}>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <AntDesign name="calendar" size={20}/>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
            <Text>{date.getDate()}</Text>
            <Text>{month[date.getMonth()]}</Text>
            <Text>{date.getFullYear()}</Text>
          </View>
          <View style={[{width:'45%', height:40}, styles.view]}>
              <Feather name="clock" size={20}/>
              <Text>{date.getTime()}</Text>
          </View>
        </View>
        <TouchableOpacity>
              <Text>Confirm & Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DateTime

const styles = StyleSheet.create({
  modal:{
    width:'100%',
    height:500,
    backgroundColor:'#fff',
    marginTop:"80%",
    borderTopLeftRadius:35
  },
  icon:{
    marginTop:20,
    marginLeft:30
  },
  xyz:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  view:{
    borderRadius:10,
    elevation:5,
    backgroundColor:'#fff',
    shadowColor:'#ECECEC',
    shadowOffset:{
      width:1,
      height:1
    },
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  }
})