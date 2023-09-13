import { View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,SafeAreaView,ImageBackground,TextInput,FlatList } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import { useState,useEffect,createContext } from 'react'
import {isEqual,reject} from 'lodash'
const CardContext = createContext()
import { useSelector } from 'react-redux'
import * as RoomModel from '../../firebase/roomModel'

export const HomePokdengScreen = ({navigation,route}) => {
  const user_data = useSelector((state) => state.auths)
  const userDocID = user_data.profile.id
  const [roomList,setRoomList] = useState([])
  
  const isArrObjEqual = (arr1,arr2) => {
      let temp = arr1.map(arr => ({...arr})) // temp = arr ( deep copy ) 
      if(temp.length !== arr2.length){
        return false
      }else{
        temp.forEach(obj1 => {
          arr2 = reject(arr2,(obj2)=>{
            if(isEqual(obj2,obj1)){
              arr1 = reject(obj1)
              return obj2
            }
          })
        })
        if(arr1.length === 0 && arr2.length === 0){
          return true
        }else{
          return false
        }
      }
    }
    
    const getAllRoomSuccess = (rooms) =>{
      if(!isArrObjEqual(rooms,roomList)){
        //console.log(`not equal`)
        setRoomList(rooms)
      }else{
        //console.log(`Equal`)
      }
    }

    const unsuccess = (err) => {
        //console.log(`${err}`)
    }

    const enterRoomSuccess = (doc) => {
      //console.log(doc)
    }

    useEffect(()=>{
      //SensorModel.getAllSensor(getAllSensorSuccess,unsuccess)
      RoomModel.listenAllRooms(getAllRoomSuccess,unsuccess)

    },[roomList])
  
  const renderCard = (item, index) => {
    //console.log(item)
        return (
            <View style={{width:'100%',height:80,borderWidth:1,backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
              <Text>ห้อง : {item.roomName}
              </Text>
              <Text>ไอดีห้อง : {item.room}
              </Text>
              <Text>สถานะ : {item.status}
              </Text>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
                onPress={()=>{
                  RoomModel.enterRoom(item.room,enterRoomSuccess)
                  setTimeout(()=>{
                    navigation.navigate({name:'Pokdeng',params:{room:item.room,player:'2'}})
                  },100)
           
                }}
              >
                <Text>เข้าร่วม
                </Text>
              </TouchableOpacity>
            </View>
        )
    }

    const renderSeparator = () => (
        <View style={{ padding: 8 }} />
    )

    return (
        <SafeAreaView style={sensorStyle.container}>
            <CardContext.Provider value={{ roomList }}>
                <FlatList
                    data={roomList}
                    renderItem={({ item, index }) => renderCard(item, index)}
                    keyExtractor={item => item.username}
                    ItemSeparatorComponent={renderSeparator}
                />
            </CardContext.Provider>
        </SafeAreaView>
    )
}

const sensorStyle = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor:'#EEFCDC',
    paddingHorizontal:100,
    paddingVertical:30,
  },
  titleTxt:{
    fontSize:30,
    color:'#447706',
    fontWeight:'bold'
  },
  normalTxt:{
    fontSize:20,
    fontWeight:'bold'
  }
})