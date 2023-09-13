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
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { isEqual, reject } from 'lodash';
import * as TicTacModel from '../../firebase/tictacModel';
export const TicTacToe = ({ navigation, route }) => {
  const user_data = useSelector((state) => state.auths)
  const userDocID = user_data.profile.id
  let emblem = route.params.emblem;
  let room = route.params.room;
  const [pos1, setPos1] = useState('empty');
  const [pos2, setPos2] = useState('empty');
  const [pos3, setPos3] = useState('empty');
  const [pos4, setPos4] = useState('empty');
  const [pos5, setPos5] = useState('empty');
  const [pos6, setPos6] = useState('empty');
  const [pos7, setPos7] = useState('empty');
  const [pos8, setPos8] = useState('empty');
  const [pos9, setPos9] = useState('empty');
  const [turn, setTurn] = useState();
  const [winner,setWinner] = useState();
  const [thisRoom, setThisRoom] = useState([]);
  const [thisGame, setThisGame] = useState([]);

  const checkLine = () => {
    if(pos2 == emblem && pos5 == emblem && pos8 == emblem){
      
    }
    if(pos4 == emblem && pos5 == emblem && pos6 == emblem){
      
    }

  }

  const position1 = () => {
    if (turn == emblem) {
      if (pos1 == 'x') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>X</Text>
          </View>
        );
      }
      if (pos1 == 'o') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>O</Text>
          </View>
        );
      }
      if (pos1 == 'empty') {
        return (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              TicTacModel.updateGamePos1(room, emblem);
            }}></TouchableOpacity>
        );
      }
    } else {
      if (pos1 == 'x') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>X</Text>
          </View>
        );
      }
      if (pos1 == 'o') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>O</Text>
          </View>
        );
      }
      if (pos1 == 'empty') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text></Text>
          </View>
        );
      }
    }
  };
  const position2 = () => {
    if (turn == emblem) {
      if (pos2 == 'x') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>X</Text>
          </View>
        );
      }
      if (pos2 == 'o') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>O</Text>
          </View>
        );
      }
      if (pos2 == 'empty') {
        return (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              TicTacModel.updateGamePos2(room, emblem);
            }}></TouchableOpacity>
        );
      }
    } else {
      if (pos2 == 'x') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>X</Text>
          </View>
        );
      }
      if (pos2 == 'o') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>O</Text>
          </View>
        );
      }
      if (pos2 == 'empty') {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text></Text>
          </View>
        );
      }
    }
  };



  const isArrObjEqual = (arr1, arr2) => {
    //console.log('arr1 vvv')
    //console.log(arr1)
    //console.log('arr2 vvv')
    //console.log(arr2)
    let temp = arr1.map((arr) => ({ ...arr })); // temp = arr ( deep copy )
    //console.log('temp vvv')
    //console.log(temp)
    if (temp.length !== arr2.length) {
      return false;
    } else {
      temp.forEach((obj1) => {
        //console.log('obj1 vv')
        //console.log(obj1)
        arr2 = reject(arr2, (obj2) => {
          if (isEqual(obj2, obj1)) {
            //console.log('obj1 vv')
            //console.log(obj1)
            //console.log('arr1 vv')
            //console.log(arr1)
            arr1 = reject(obj1);
            //console.log('arr1 vv')
            //console.log(arr1)
            //console.log('obj2 vv')
            //console.log(obj2)
            return obj2;
          }
        });
      });
      if (arr1.length === 0 && arr2.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getThisRoomSuccess = (room) => {
    if (!isArrObjEqual(room, thisRoom)) {
      //console.log('Not Equal')
      setThisRoom(room);
    } else {
      //console.log('Equal')
    }
  };
  const getThisGameSuccess = (game) => {
    //console.log(game)
    if (!isArrObjEqual(game, thisGame)) {
      //console.log('Not Equal')
      setThisGame(game);
    } else {
      //console.log('Equal')
      //console.log(thisGame)
      thisGame.map((item) => {
        // console.log('item of thisGame');
        // console.log(item);
        // console.log(item.pos1);
        setPos1(item.pos1);
        setPos2(item.pos2);
        setTurn(item.turn)
        // setPos2(item.pos1)
        // setPos3(item.pos1)
        // setPos4(item.pos1)
        // setPos5(item.pos1)
        // setPos6(item.pos1)
      });
    }
  };
  console.log('pos1 vvv');
  console.log(pos1);

  useEffect(() => {
    TicTacModel.listenThisRoom(room, getThisRoomSuccess);
    TicTacModel.listenThisGame(room, getThisGameSuccess);
  }, [thisRoom, thisGame]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'blue',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}>
          {position1()}
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}>
          {position2()}
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'blue',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'blue',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightblue',
            borderWidth: 1,
          }}></View>
      </View>
    </View>
  );
};
