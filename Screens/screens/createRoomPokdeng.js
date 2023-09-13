import { View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,SafeAreaView,ImageBackground,TextInput,FlatList } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import { useState,useEffect,createContext } from 'react'
import {isEqual,reject} from 'lodash'
import { useSelector } from 'react-redux'

import * as RoomModel from '../../firebase/roomModel'
import * as GameModel from '../../firebase/gameModel'

const CardContext = createContext()

export const createRoomPokdeng = ({navigation}) => {
  const user_data = useSelector((state) => state.auths)
  const userDocID = user_data.profile.id
  const [roomName,setRoomName] = useState('')
  
  const createRoomSuccess = (doc) => {
        //console.log(doc)
        setRoomName('')
    }

  const unsuccess = (msg) => {
        console.log(msg)
        Alert.alert(msg)
    }

  const onCreatePress = () => {
        let random = Math.floor(Math.random()*10000000)
        RoomModel.createRoom(random,roomName,createRoomSuccess)
        GameModel.createGame(random)
        navigation.navigate({name:'Pokdeng',params:{room:random,player:'1'}})
    }



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput
        placeholder='ชื่อห้อง'
        onChangeText={(text)=>{
          setRoomName(text)
        }}
        value={roomName}
      />
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
        onPress={onCreatePress}
      >
        <Text>ยืนยัน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
        onPress={()=>{
          navigation.navigate('HomePok')
        }}
      >
        <Text>กลับ</Text>
      </TouchableOpacity>
    </View>
  )
}