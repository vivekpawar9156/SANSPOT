import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearTextGradient} from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  var [password, setPassword] = useState("");
  var [errorPassword, setErrorPassword] = useState("");


  var [phone, setPhone] = useState("");
  var [errorPhone, setErrorPhone] = useState("");

  const [PassswordConfirm, setPassswordConfirm] = useState("");
  const [PassswordConfirmerror, setPassswordConfirmerror] = useState(null);


  const [username, setusername] = useState('')
  const [usernameerror, setusernameerror] = useState(null)

  const emailValidate = email => {
    var status = true;
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Please enter your email');
      status = false;
    } else if (!Regex.test(email)) {
      setErrorEmail('*Please enter valid email');
      status = false;
    } else {
      setErrorEmail(null);
      status = true;
    }
    return status;
  };


  var passwordValidate = (password) => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    if (password === "" || password === undefined || password === null) {
      setErrorPassword("*Please enter valid password");
    } else if (!Regex.test(password)) {
      setErrorPassword(
        "*Please enter valid password"
      );
    } else {
      setErrorPassword(null);
      return true;
    }
  };



  function validateMobile(text) {
    const mobileReg = /^([0-9]){7,20}$/;
    if (text.length == 0) {
      setErrorPhone('**Please enter valid phone number');
    } else if (mobileReg.test(text)) {
      setErrorPhone(null);
      return true;
    } else {
      setErrorPhone('**Please enter valid phone number.');
      return false;
    }
  }


  const confirmvalidate = (txt) => {
    console.log(password, txt);
    if (txt === "" || txt === undefined || txt === null) {
      setPassswordConfirmerror("*Please enter your confirm password");
      return false;
    } else if (password !== txt) {
      console.log("dsf");
      setPassswordConfirmerror("*Please enter your confirm password");
      return false;
    } else {
      setPassswordConfirmerror(null);
      return true;
    }
  };


  const usernamevalidate = (txt) => {
    if (txt == "" || txt == null || txt == undefined) {
      setusernameerror('Please enter username')
      return false
    } else if (txt.length <= 3) {
      setusernameerror('max 6 and min 16, do not enter capital letter');
      return true;
    }
    else {
      setusernameerror(null)
      return true
    }
  }


  const onSubmit = () => {
    var flag = true;
    if (
      PassswordConfirm === "" ||
      PassswordConfirm === undefined ||
      PassswordConfirm === null
    ) {
      setPassswordConfirmerror("*Please enter your confirm password");
      flag = false;
    }
    if (password === "" || password === undefined || password === null) {
      setErrorPassword("*Please enter your password");
      flag = false;
    }
    if (!passwordValidate(password)) {
      setErrorPassword("*Please enter your password");
      flag = false;
    }
    if (!confirmvalidate(PassswordConfirm)) {
      setPassswordConfirmerror("*Please enter your confirm password");
      flag = false;
    }
    if (!validateMobile(phone)) {
      setErrorPhone("*Please enter valid phone number");
      flag = false;
    }
    if (!usernamevalidate(username)) {
      setusernameerror('please enter username')
      flag = false;
    }

    return flag;
  }


  return (
    <ScrollView
      style={{flex: 1, paddingBottom: 30}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#4B4B4C'}}>
            Profile
          </Text>
          <TouchableOpacity >          
            <Ionicons name="ios-cart-sharp" size={25} color="#4B4B4C" />
          </TouchableOpacity>
        </View>

        <View style={{width: '100%', height: 250}}>
          <Image
            style={{width: 150, height: 150, alignSelf: 'center'}}
            source={require('../assets/images/havemeal1.jpg')}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '22%',
              alignSelf: 'center',
              marginTop: 7,
              justifyContent: 'space-between',
            }}>
            <LinearTextGradient
              numberOfLines={1}
              useViewFrame={true}
              locations={[0.5, 0.95]}
              colors={['#D53D7C', '#AC4F78']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{width: '110%'}}>
              <MaterialIcons name="edit" size={10} color="#F11F76" />
              <Text style={{fontSize:12}}>Edit Profile</Text>
            </LinearTextGradient>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
                marginTop: 10,
                color: '#4B4B4C',
              }}>
              Hi there Emilia!
            </Text>
            <Text
              style={{fontSize: 12, fontWeight: '400', alignSelf: 'center'}}>
              Sign Out
            </Text>
          </View>
        </View>

        <View style={styles.textinput}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            placeholder="Enter Your Name"
            style={styles.textinputstyle}
            placeholderTextColor="#6E6E6F"
            keyboardType="default"
            // secureTextEntry={isSecureEntry}
            maxLength={16}
            onChangeText={(text) => {
              setusername(text), usernamevalidate(text);
            }}
          />
        </View>
        {usernameerror &&
          <Text style={styles.errorText}>*{usernameerror}</Text>
        }

        <View style={styles.textinput}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            style={styles.textinputstyle}
            placeholderTextColor="black"
            value={email}
            keyboardType='email-address'
            onChangeText={(text) => {
              setEmail(text), emailValidate(text);
            }}
          />
        </View>
        {errorEmail !== "" && <Text style={{color:"red", fontSize:12, marginLeft:20, marginTop:5}}>{errorEmail}</Text>}
        







        <View style={styles.textinput}>
          <Text style={styles.text}>Mobile No.</Text>
          <TextInput
            placeholder="Enter number"
            style={styles.textinputstyle}
            placeholderTextColor="black"
            keyboardType="phone-pad"
            maxLength={14}
            value={phone}
            onChangeText={(text) => {
              setPhone(text), validateMobile(text);

            }}
          />
        </View>
        {errorPhone ? (
          <Text style={[styles.errorText, { marginLeft: 20, fontSize:12, color:'red' }]}>{errorPhone} </Text>
        ) : null}








        <View style={styles.textinput}>
          <Text style={styles.text}>Address</Text>
          <TextInput
            placeholder="Enter your Adress"
            style={styles.textinputstyle}
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.textinput}>
          <Text style={styles.text}>Password</Text>
          <TextInput 
            style={styles.textinputstyle} 
            secureTextEntry={true} 
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              passwordValidate(text);
            }}
          
          />
        </View>
        {errorPassword ? (
          <Text style={{marginLeft:20, fontSize:12,color:'red'}}>{errorPassword} </Text>
        ) : null}







            
        <View style={styles.textinput}>
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput 
            style={styles.textinputstyle} 
            secureTextEntry={true} 
            onChangeText={(text) => {
              setPassswordConfirm(text), confirmvalidate(text);
            }}
          />
        </View>

        {PassswordConfirmerror !== null ? (
            <Text style={{ color: "red", fontSize: 12, marginLeft:20}}>
              {PassswordConfirmerror}
            </Text>
        ) : null}









        <TouchableOpacity activeOpacity={1} onPress={() => {
          if (onSubmit()){
            navigation.navigate("Lunch")
          }}
          
        }>
          <LinearGradient
            colors={['#EA2584', '#F14773', '#F2566A']}
            style={styles.save}>
            <Text style={styles.buttontext}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textinput: {
    width: '90%',
    backgroundColor: '#F3F2F3',
    height: 60,
    marginTop: 10,
    borderRadius: 40,
    alignSelf: 'center',
    paddingLeft: 17,
  },
  textinputstyle: {
    height: '60%',
    width: '90%',
    marginTop: 3,
    color: '#555455',
  },
  text: {
    fontSize: 14,
    marginLeft: 5,
    top: 5,
    color: '#6E6E6F',
  },
  save: {
    width: '90%',
    backgroundColor: 'red',
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
  errorText:{
    fontSize:12,
    color:'red',
    marginLeft:20
  }
});
