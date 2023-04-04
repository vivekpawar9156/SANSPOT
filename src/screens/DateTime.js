import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import DateTimePickerModal from 'react-native-modal-datetime-picker';



const DateTime = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('selected')


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x  = dt.toISOString().split('T');
    const x1 = x[0].split('-')

    selectedDate(x1[2] + '/' + x1[1] + '/' + x1[0])
    hideDatePicker();
  };



  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideTimePicker();
  };




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
            <TouchableOpacity onPress={() => showDatePicker()}>
              <AntDesign name="calendar" size={20}/>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
            <Text>{selectedDate}</Text>

          </View>
          <View style={[{width:'45%', height:40}, styles.view]}>

              <TouchableOpacity onLongPress={()=>showTimePicker()}>              
                <Feather name="clock" size={20}/>
              </TouchableOpacity>



              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Congratulations')} style={styles.button}>
              <Text style={styles.textbutton}>Confirm & Continue</Text>
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
  },
  button:{
    width:'50%',
    height:50,
    backgroundColor:'#eb2c7f',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'

  },
  textbutton:{
    fontSize:15,
    fontWeight:'500',
    color:'#fff'
  }
})