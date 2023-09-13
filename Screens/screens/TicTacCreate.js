import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as RoomModel from '../../firebase/roomModel'
import * as TicTacModel from '../../firebase/tictacModel'

export const TicTacCreate = ({navigation,route}) => {
  const user_data = useSelector((state) => state.auths)
  const userDocID = user_data.profile.id
  const [roomName,setRoomName] = useState('')

  const createRoomSuccess = (doc) => {
        //console.log(doc)
        setRoomName('')
    }

  const onSubmitPress = () => {
    console.log('press')
    let random = Math.floor(Math.random()*10000000)
    RoomModel.createRoom(random,roomName,userDocID,createRoomSuccess)
    TicTacModel.createGame(random,'x')
    console.log('pass')
    navigation.navigate({name:'TicTacToe',params:{room:random,emblem:'x'}})
    console.log('pass')
  }



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput style={{borderWidth:1}}
        onChangeText={(text)=>{
          setRoomName(text)
        }}
      />
      <TouchableOpacity
        onPress={()=>{
          onSubmitPress()
        }}
      >
        <Text>สร้าง</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
        onPress={()=>{
          navigation.navigate('TicTacHome')
        }}
      >
      <Text>กลับ</Text>
      </TouchableOpacity>
    </View>
  )
}