import { View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,SafeAreaView,ImageBackground,TextInput,Alert } from 'react-native'

// import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProfile } from '../../redux/authSlice'
import * as AuthModel from '../../firebase/authModel'
import * as UserModel from '../../firebase/userModel'

export const LoginScreen = ({navigation}) => {

  const pic_back = {uri:"https://i.ibb.co/rfJ5TZ7/back.png"}
  const [credential, setCredential] = useState({ username: '', password: '' })
  const setUsername = (text) => {
    setCredential(oldValue => ({
      ...oldValue,
      username: text
    }))
  }

  const setPassword = (text) => {
    setCredential(oldValue => ({
      ...oldValue,
      password: text
    }))
  }
  const dispatch = useDispatch()

  const success = (doc) => {
    console.log(`user data = ${doc.data().username}`)
    let profile_state = {
      'id': doc.id,
      'username': doc.data().username
    }
    dispatch(addProfile(profile_state))
    navigation.navigate({
      name: 'createPok',
      params: {
        username: doc.data().username
      }
    })
    // navigation.navigate({
    //   name:'MainDrawer',
    //   params: {
    //     username:item.username
    //   }
    // })
  }

  const unsuccess = (msg) => {
    console.log(msg)
    Alert.alert(msg)
  }

  const signInSuccess = (username) => {
    console.log(`sign in success user = ${username}`)
    UserModel.getUserByUsername(username, success, unsuccess)
  }

  const onSignInPress = () => {
    AuthModel.singInEmailPass(credential.username, credential.password, signInSuccess, unsuccess)
    // if(authList.length > 0){
    //   let user = authList.find((item) => {
    //     return item.username == credential.username && item.password == credential.password
    //   })
    //   console.log(`user: ${user}`)
    //   if(user != undefined)
    //     success(user)
    //   else
    //     unsuccess('Wrong username or password')
    // }else{
    //   unsuccess(`No user in system yet`)
    // }
  }

  const onSignUpPress = () => {
    //navigation.push('Register')
  }

  const onForgotPress = () => {
    navigation.push('Recover')
  }





















  return (
    <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
      <View style={{backgroundColor:'lightblue',padding:30,width:'80%',borderRadius:0}}>
        <View style={{borderWidth:1,borderRadius:0,marginBottom:20,width:'100%'}}>
         <TextInput style={{borderColor:'red',borderWidth:0,height:50,width:'80%',marginLeft:40,fontSize:15}}
          placeholder='Username' secureTextEntry={false} value={credential.username} onChangeText={(text) => setUsername(text)}
         />
        </View>
        <View style={{borderWidth:1,borderRadius:0,marginBottom:20}}>
         <TextInput style={{borderColor:'red',borderWidth:0,height:50,width:'80%',marginLeft:40}}
          placeholder='Password' secureTextEntry={true} value={credential.password} onChangeText={(text) => setPassword(text)}
         />
        </View>
        <TouchableOpacity style={{borderColor:'red',borderWidth:0,borderRadius:0,height:50,width:'100%',backgroundColor:'orange',marginBottom:20,justifyContent:'center',alignItems:'center'}}
          onPress={onSignInPress}
        >
          <Text>ลงชื่อเข้าใช้</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red',borderWidth:0,borderRadius:0,height:50,width:'100%',backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}
          onPress={()=>{
            onSignUpPress()
          }}
        >
          <Text>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}