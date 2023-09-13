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
import * as RoomModel from '../../firebase/roomModel';
import * as GameModel from '../../firebase/gameModel';
import { useSelector } from 'react-redux';
import { isEqual, reject } from 'lodash';

import { useState, useEffect } from 'react';
// import pic_AC from '../../cards/AC.png';
// import pic_AD from '../../cards/AD.png';
// import pic_AH from '../../cards/AH.png';
// import pic_AS from '../../cards/AS.png';
// import pic_2C from '../../cards/2C.png';
// import pic_2D from '../../cards/2D.png';
// import pic_2H from '../../cards/2H.png';
// import pic_2S from '../../cards/2S.png';
// import pic_3C from '../../cards/3C.png';
// import pic_3D from '../../cards/3D.png';
// import pic_3H from '../../cards/3H.png';
// import pic_3S from '../../cards/3S.png';
// import pic_4C from '../../cards/4C.png';
// import pic_4D from '../../cards/4D.png';
// import pic_4H from '../../cards/4H.png';
// import pic_4S from '../../cards/4S.png';
// import pic_5C from '../../cards/5C.png';
// import pic_5D from '../../cards/5D.png';
// import pic_5H from '../../cards/5H.png';
// import pic_5S from '../../cards/5S.png';
// import pic_6C from '../../cards/6C.png';
// import pic_6D from '../../cards/6D.png';
// import pic_6H from '../../cards/6H.png';
// import pic_6S from '../../cards/6S.png';
// import pic_7C from '../../cards/7C.png';
// import pic_7D from '../../cards/7D.png';
// import pic_7H from '../../cards/7H.png';
// import pic_7S from '../../cards/7S.png';
// import pic_8C from '../../cards/8C.png';
// import pic_8D from '../../cards/8D.png';
// import pic_8H from '../../cards/8H.png';
// import pic_8S from '../../cards/8S.png';
// import pic_9C from '../../cards/9C.png';
// import pic_9D from '../../cards/9D.png';
// import pic_9H from '../../cards/9H.png';
// import pic_9S from '../../cards/9S.png';
// import pic_10C from '../../cards/10C.png';
// import pic_10D from '../../cards/10D.png';
// import pic_10H from '../../cards/10H.png';
// import pic_10S from '../../cards/10S.png';
// import pic_JC from '../../cards/JC.png';
// import pic_JD from '../../cards/JD.png';
// import pic_JH from '../../cards/JH.png';
// import pic_JS from '../../cards/JS.png';
// import pic_QC from '../../cards/QC.png';
// import pic_QD from '../../cards/QD.png';
// import pic_QH from '../../cards/QH.png';
// import pic_QS from '../../cards/QS.png';
// import pic_KC from '../../cards/KC.png';
// import pic_KD from '../../cards/KD.png';
// import pic_KH from '../../cards/KH.png';
// import pic_KS from '../../cards/KS.png';
// import pic_back from '../../cards/back.png';
// import firebaseApp from '../../firebase/connect'
// import { getStorage, ref, getDownloadURL } from 'firebase/storage'; //access the storage database



export const PokdengScreen = ({ navigation, route }) => {
  // const [pic_AC, setpic_ac] = useState();
  // const [pic_AD, setpic_ad] = useState();
  // const [pic_AH, setpic_ah] = useState();
  // const [pic_AS, setpic_as] = useState();
  // const [pic_2C, setpic_2c] = useState();
  // const [pic_2D, setpic_2d] = useState();
  // const [pic_2H, setpic_2h] = useState();
  // const [pic_2S, setpic_2s] = useState();
  // const [pic_3C, setpic_3c] = useState();
  // const [pic_3D, setpic_3d] = useState();
  // const [pic_3H, setpic_3h] = useState();
  // const [pic_3S, setpic_3s] = useState();
  // const [pic_4C, setpic_4c] = useState();
  // const [pic_4D, setpic_4d] = useState();
  // const [pic_4H, setpic_4h] = useState();
  // const [pic_4S, setpic_4s] = useState();
  // const [pic_5C, setpic_5c] = useState();
  // const [pic_5D, setpic_5d] = useState();
  // const [pic_5H, setpic_5h] = useState();
  // const [pic_5S, setpic_5s] = useState();
  // const [pic_6C, setpic_6c] = useState();
  // const [pic_6D, setpic_6d] = useState();
  // const [pic_6H, setpic_6h] = useState();
  // const [pic_6S, setpic_6s] = useState();
  // const [pic_7C, setpic_7c] = useState();
  // const [pic_7D, setpic_7d] = useState();
  // const [pic_7H, setpic_7h] = useState();
  // const [pic_7S, setpic_7s] = useState();
  // const [pic_8C, setpic_8c] = useState();
  // const [pic_8D, setpic_8d] = useState();
  // const [pic_8H, setpic_8h] = useState();
  // const [pic_8S, setpic_8s] = useState();
  // const [pic_9C, setpic_9c] = useState();
  // const [pic_9D, setpic_9d] = useState();
  // const [pic_9H, setpic_9h] = useState();
  // const [pic_9S, setpic_9s] = useState();
  // const [pic_10C, setpic_10c] = useState();
  // const [pic_10D, setpic_10d] = useState();
  // const [pic_10H, setpic_10h] = useState();
  // const [pic_10S, setpic_10s] = useState();
  // const [pic_JC, setpic_jc] = useState();
  // const [pic_JD, setpic_jd] = useState();
  // const [pic_JH, setpic_jh] = useState();
  // const [pic_JS, setpic_js] = useState();
  // const [pic_QC, setpic_qc] = useState();
  // const [pic_QD, setpic_qd] = useState();
  // const [pic_QH, setpic_qh] = useState();
  // const [pic_QS, setpic_qs] = useState();
  // const [pic_KC, setpic_kc] = useState();
  // const [pic_KD, setpic_kd] = useState();
  // const [pic_KH, setpic_kh] = useState();
  // const [pic_KS, setpic_ks] = useState();

  // useEffect(() => {
  //   const p_AC = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/AC.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_ac(x);
  //     })
  //   }
  //   const p_AD = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/AD.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_ad(x);
  //     })
  //   }
  //   const p_AH = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/AH.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_ah(x);
  //     })
  //   }
  //   const p_AS = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/AS.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_as(x);
  //     })
  //   }
  //   const p_2C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/2C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_2c(x);
  //     })
  //   }
  //   const p_2D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/2D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_2d(x);
  //     })
  //   }
  //   const p_2H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/2H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_2h(x);
  //     })
  //   }
  //   const p_2S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/2S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_2s(x);
  //     })
  //   }
  //   const p_3C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/3C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_3c(x);
  //     })
  //   }
  //   const p_3D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/3D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_3d(x);
  //     })
  //   }
  //   const p_3H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/3H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_3h(x);
  //     })
  //   }
  //   const p_3S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/3S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_3s(x);
  //     })
  //   }
  //   const p_4C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/4C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_4c(x);
  //     })
  //   }
  //   const p_4D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/4D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_4d(x);
  //     })
  //   }
  //   const p_4H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/4H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_4h(x);
  //     })
  //   }
  //   const p_4S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/4S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_4s(x);
  //     })
  //   }
  //   const p_5C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/5C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_5c(x);
  //     })
  //   }
  //   const p_5D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/5D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_5d(x);
  //     })
  //   }
  //   const p_5H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/5H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_5h(x);
  //     })
  //   }
  //   const p_5S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/5S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_5s(x);
  //     })
  //   }
  //   const p_6C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/6C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_6c(x);
  //     })
  //   }
  //   const p_6D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/6D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_6d(x);
  //     })
  //   }
  //   const p_6H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/6H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_6h(x);
  //     })
  //   }
  //   const p_6S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/6S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_6s(x);
  //     })
  //   }
  //   const p_7C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/7C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_7c(x);
  //     })
  //   }
  //   const p_7D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/7D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_7d(x);
  //     })
  //   }
  //   const p_7H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/7H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_7h(x);
  //     })
  //   }
  //   const p_7S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/7S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_7s(x);
  //     })
  //   }
  //   const p_8C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/8C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_8c(x);
  //     })
  //   }
  //   const p_8D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/8D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_8d(x);
  //     })
  //   }
  //   const p_8H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/8H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_8h(x);
  //     })
  //   }
  //   const p_8S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/8S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_8s(x);
  //     })
  //   }
  //   const p_9C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/9C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_9c(x);
  //     })
  //   }
  //   const p_9D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/9D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_9d(x);
  //     })
  //   }
  //   const p_9H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/9H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_9h(x);
  //     })
  //   }
  //   const p_9S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/9S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_9s(x);
  //     })
  //   }
  //   const p_10C = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/10C.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_10c(x);
  //     })
  //   }
  //   const p_10D = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/10D.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_10d(x);
  //     })
  //   }
  //   const p_10H = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/10H.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_10h(x);
  //     })
  //   }
  //   const p_10S = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/10S.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_10s(x);
  //     })
  //   }
  //   const p_JC = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/JC.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_jc(x);
  //     })
  //   }
  //   const p_JD = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/JD.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_jd(x);
  //     })
  //   }
  //   const p_JH = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/JH.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_jh(x);
  //     })
  //   }
  //   const p_JS = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/JS.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_js(x);
  //     })
  //   }
  //   const p_QC = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/QC.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_qc(x);
  //     })
  //   }
  //   const p_QD = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/QD.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_qd(x);
  //     })
  //   }
  //   const p_QH = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/QH.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_qh(x);
  //     })
  //   }
  //   const p_QS = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/QS.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_qs(x);
  //     })
  //   }
  //   const p_KC = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/KC.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_kc(x);
  //     })
  //   }
  //   const p_KD = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/KD.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_kd(x);
  //     })
  //   }
  //   const p_KH = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/KH.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_kh(x);
  //     })
  //   }
  //   const p_KS = async () => {
  //     const storage = getStorage();
  //     const reference = ref(storage, '/KS.png');
  //     await getDownloadURL(reference).then((x) => {
  //       setpic_ks(x);
  //     })
  //   }

  //   if (pic_AC == undefined) {p_AC()}
  //   if (pic_AD == undefined) {p_AD()}
  //   if (pic_AH == undefined) {p_AH()}
  //   if (pic_AS == undefined) {p_AS()}
  //   if (pic_2C == undefined) {p_2C()}
  //   if (pic_2D == undefined) {p_2D()}
  //   if (pic_2H == undefined) {p_2H()}
  //   if (pic_2S == undefined) {p_2S()}
  //   if (pic_3C == undefined) {p_3C()}
  //   if (pic_3D == undefined) {p_3D()}
  //   if (pic_3H == undefined) {p_3H()}
  //   if (pic_3S == undefined) {p_3S()}
  //   if (pic_4C == undefined) {p_4C()}
  //   if (pic_4D == undefined) {p_4D()}
  //   if (pic_4H == undefined) {p_4H()}
  //   if (pic_4S == undefined) {p_4S()}
  //   if (pic_5C == undefined) {p_5C()}
  //   if (pic_5D == undefined) {p_5D()}
  //   if (pic_5H == undefined) {p_5H()}
  //   if (pic_5S == undefined) {p_5S()}
  //   if (pic_6C == undefined) {p_6C()}
  //   if (pic_6D == undefined) {p_6D()}
  //   if (pic_6H == undefined) {p_6H()}
  //   if (pic_6S == undefined) {p_6S()}
  //   if (pic_7C == undefined) {p_7C()}
  //   if (pic_7D == undefined) {p_7D()}
  //   if (pic_7H == undefined) {p_7H()}
  //   if (pic_7S == undefined) {p_7S()}
  //   if (pic_8C == undefined) {p_8C()}
  //   if (pic_8D == undefined) {p_8D()}
  //   if (pic_8H == undefined) {p_8H()}
  //   if (pic_8S == undefined) {p_8S()}
  //   if (pic_9C == undefined) {p_9C()}
  //   if (pic_9D == undefined) {p_9D()}
  //   if (pic_9H == undefined) {p_9H()}
  //   if (pic_9S == undefined) {p_9S()}
  //   if (pic_10C == undefined) {p_10C()}
  //   if (pic_10D == undefined) {p_10D()}
  //   if (pic_10H == undefined) {p_10H()}
  //   if (pic_10S == undefined) {p_10S()}
  //   if (pic_JC == undefined) {p_JC()}
  //   if (pic_JD == undefined) {p_JD()}
  //   if (pic_JH == undefined) {p_JH()}
  //   if (pic_JS == undefined) {p_JS()}
  //   if (pic_QC == undefined) {p_QC()}
  //   if (pic_QD == undefined) {p_QD()}
  //   if (pic_QH == undefined) {p_QH()}
  //   if (pic_QS == undefined) {p_QS()}
  //   if (pic_KC == undefined) {p_KC()}
  //   if (pic_KD == undefined) {p_KD()}
  //   if (pic_KH == undefined) {p_KH()}
  //   if (pic_KS == undefined) {p_KS()}
  // }, []);

  const user_data = useSelector((state) => state.auths);
  const userDocID = user_data.profile.id;
  const room = route.params.room;
  const player = route.params.player
  // player='1'
  // room='1'
  const pic_back = "https://i.ibb.co/rfJ5TZ7/back.png"
  const pic_AC = "https://i.ibb.co/cYCvgN5/AC.png" 
  const pic_AD = "https://i.ibb.co/j6tPrNJ/AD.png" 
  const pic_AH = "https://i.ibb.co/YdtMV0b/AH.png" 
  const pic_AS = "https://i.ibb.co/3rNxjYj/AS.png" 
  const pic_2C = "https://i.ibb.co/gFXCHv7/2C.png" 
  const pic_2D = "https://i.ibb.co/dc8sX9y/2D.png" 
  const pic_2H = "https://i.ibb.co/BZR65Sj/2H.png" 
  const pic_2S = "https://i.ibb.co/H7YLvjN/2S.png" 
  const pic_3C = "https://i.ibb.co/XjBYD21/3C.png" 
  const pic_3D = "https://i.ibb.co/3TvX1j9/3D.png" 
  const pic_3H = "https://i.ibb.co/FhjxY09/3H.png" 
  const pic_3S = "https://i.ibb.co/9sy4WvX/3S.png" 
  const pic_4C = "https://i.ibb.co/XDRrvvC/4C.png" 
  const pic_4D = "https://i.ibb.co/dcZg3pv/4D.png" 
  const pic_4H = "https://i.ibb.co/R7rCSk8/4H.png" 
  const pic_4S = "https://i.ibb.co/7C8DVTR/4S.png" 
  const pic_5C = "https://i.ibb.co/Jrd5jmH/5C.png" 
  const pic_5D = "https://i.ibb.co/Nr6Qkhn/5D.png" 
  const pic_5H = "https://i.ibb.co/HTwG7sd/5H.png" 
  const pic_5S = "https://i.ibb.co/xG3ycWV/5S.png" 
  const pic_6C = "https://i.ibb.co/4TvYRNM/6C.png" 
  const pic_6D = "https://i.ibb.co/27fFcv0/6D.png" 
  const pic_6H = "https://i.ibb.co/TThYphw/6H.png" 
  const pic_6S = "https://i.ibb.co/gw99jkL/6S.png" 
  const pic_7C = "https://i.ibb.co/x1yJYR9/7C.png" 
  const pic_7D = "https://i.ibb.co/tmwGB2v/7D.png" 
  const pic_7H = "https://i.ibb.co/sKZDkbj/7H.png" 
  const pic_7S = "https://i.ibb.co/TKKdf2w/7S.png" 
  const pic_8C = "https://i.ibb.co/fYfkyWb/8C.png" 
  const pic_8D = "https://i.ibb.co/x5mLDym/8D.png" 
  const pic_8H = "https://i.ibb.co/tZmCjt3/8H.png" 
  const pic_8S = "https://i.ibb.co/nrqXB59/8S.png" 
  const pic_9C = "https://i.ibb.co/FDK4gNy/9C.png" 
  const pic_9D = "https://i.ibb.co/vjbGTPj/9D.png" 
  const pic_9H = "https://i.ibb.co/phJwhQP/9H.png" 
  const pic_9S = "https://i.ibb.co/4R09ryY/9S.png" 
  const pic_10C = "https://i.ibb.co/Fsj0MVs/10C.png" 
  const pic_10D = "https://i.ibb.co/3NZbCDM/10D.png" 
  const pic_10H = "https://i.ibb.co/1XtjZW1/10H.png" 
  const pic_10S = "https://i.ibb.co/Sv6GGjp/10S.png" 
  const pic_JC = "https://i.ibb.co/FnFkb7q/JC.png" 
  const pic_JD = "https://i.ibb.co/p1tSGZk/JD.png" 
  const pic_JH = "https://i.ibb.co/dQzcmMK/JH.png" 
  const pic_JS = "https://i.ibb.co/CMmBQ83/JS.png" 
  const pic_QC = "https://i.ibb.co/2573smk/QC.png" 
  const pic_QD = "https://i.ibb.co/NLShtZ3/QD.png" 
  const pic_QH = "https://i.ibb.co/rpMwL0w/QH.png" 
  const pic_QS = "https://i.ibb.co/SRvZMSn/QS.png" 
  const pic_KC = "https://i.ibb.co/KrxybR1/KC.png" 
  const pic_KD = "https://i.ibb.co/6RtpMrB/KD.png" 
  const pic_KH = "https://i.ibb.co/ccXrNYt/KH.png" 
  const pic_KS = "https://i.ibb.co/HhDTLFT/KS.png" 



  let allcard = [
    { number: '1', suit: 'clubs', point: 1, pic: pic_AC },
    { number: '1', suit: 'diamonds', point: 1, pic: pic_AD },
    { number: '1', suit: 'hearts', point: 1, pic: pic_AH },
    { number: '1', suit: 'spades', point: 1, pic: pic_AS },

    { number: '2', suit: 'clubs', point: 2, pic: pic_2C },
    { number: '2', suit: 'diamonds', point: 2, pic: pic_2D },
    { number: '2', suit: 'hearts', point: 2, pic: pic_2H },
    { number: '2', suit: 'spades', point: 2, pic: pic_2S },

    { number: '3', suit: 'clubs', point: 3, pic: pic_3C },
    { number: '3', suit: 'diamonds', point: 3, pic: pic_3D },
    { number: '3', suit: 'hearts', point: 3, pic: pic_3H },
    { number: '3', suit: 'spades', point: 3, pic: pic_3S },

    { number: '4', suit: 'clubs', point: 4, pic: pic_4C },
    { number: '4', suit: 'diamonds', point: 4, pic: pic_4D },
    { number: '4', suit: 'hearts', point: 4, pic: pic_4H },
    { number: '4', suit: 'spades', point: 4, pic: pic_4S },

    { number: '5', suit: 'clubs', point: 5, pic: pic_5C },
    { number: '5', suit: 'diamonds', point: 5, pic: pic_5D },
    { number: '5', suit: 'hearts', point: 5, pic: pic_5H },
    { number: '5', suit: 'spades', point: 5, pic: pic_5S },

    { number: '6', suit: 'clubs', point: 6, pic: pic_6C },
    { number: '6', suit: 'diamonds', point: 6, pic: pic_6D },
    { number: '6', suit: 'hearts', point: 6, pic: pic_6H },
    { number: '6', suit: 'spades', point: 6, pic: pic_6S },

    { number: '7', suit: 'clubs', point: 7, pic: pic_7C },
    { number: '7', suit: 'diamonds', point: 7, pic: pic_7D },
    { number: '7', suit: 'hearts', point: 7, pic: pic_7H },
    { number: '7', suit: 'spades', point: 7, pic: pic_7S },

    { number: '8', suit: 'clubs', point: 8, pic: pic_8C },
    { number: '8', suit: 'diamonds', point: 8, pic: pic_8D },
    { number: '8', suit: 'hearts', point: 8, pic: pic_8H },
    { number: '8', suit: 'spades', point: 8, pic: pic_8S },

    { number: '9', suit: 'clubs', point: 9, pic: pic_9C },
    { number: '9', suit: 'diamonds', point: 9, pic: pic_9D },
    { number: '9', suit: 'hearts', point: 9, pic: pic_9H },
    { number: '9', suit: 'spades', point: 9, pic: pic_9S },

    { number: '10', suit: 'clubs', point: 0, pic: pic_10C },
    { number: '10', suit: 'diamonds', point: 0, pic: pic_10D },
    { number: '10', suit: 'hearts', point: 0, pic: pic_10H },
    { number: '10', suit: 'spades', point: 0, pic: pic_10S },

    { number: 'J', suit: 'clubs', point: 0, pic: pic_JC },
    { number: 'J', suit: 'diamonds', point: 0, pic: pic_JD },
    { number: 'J', suit: 'hearts', point: 0, pic: pic_JH },
    { number: 'J', suit: 'spades', point: 0, pic: pic_JS },

    { number: 'Q', suit: 'clubs', point: 0, pic: pic_QC },
    { number: 'Q', suit: 'diamonds', point: 0, pic: pic_QD },
    { number: 'Q', suit: 'hearts', point: 0, pic: pic_QH },
    { number: 'Q', suit: 'spades', point: 0, pic: pic_QS },

    { number: 'K', suit: 'clubs', point: 0, pic: pic_KC },
    { number: 'K', suit: 'diamonds', point: 0, pic: pic_KD },
    { number: 'K', suit: 'hearts', point: 0, pic: pic_KH },
    { number: 'K', suit: 'spades', point: 0, pic: pic_KS },
  ];

  // let allcard = [
  //   { number: '1', suit: 'clubs', point: 1, pic: require('../../cards/AC.png') },
  //   { number: '1', suit: 'diamonds', point: 1, pic: require('../../cards/AD.png') },
  //   { number: '1', suit: 'hearts', point: 1, pic: require('../../cards/AH.png') },
  //   { number: '1', suit: 'spades', point: 1, pic: require('../../cards/AS.png') },

  //   { number: '2', suit: 'clubs', point: 2, pic: require('../../cards/2C.png') },
  //   { number: '2', suit: 'diamonds', point: 2, pic: require('../../cards/2D.png') },
  //   { number: '2', suit: 'hearts', point: 2, pic: require('../../cards/2H.png') },
  //   { number: '2', suit: 'spades', point: 2, pic: require('../../cards/2S.png') },

  //   { number: '3', suit: 'clubs', point: 3, pic: require('../../cards/3C.png') },
  //   { number: '3', suit: 'diamonds', point: 3, pic: require('../../cards/3D.png') },
  //   { number: '3', suit: 'hearts', point: 3, pic: require('../../cards/3H.png') },
  //   { number: '3', suit: 'spades', point: 3, pic: require('../../cards/3S.png') },

  //   { number: '4', suit: 'clubs', point: 4, pic: require('../../cards/4C.png') },
  //   { number: '4', suit: 'diamonds', point: 4, pic: require('../../cards/4D.png') },
  //   { number: '4', suit: 'hearts', point: 4, pic: require('../../cards/4H.png') },
  //   { number: '4', suit: 'spades', point: 4, pic: require('../../cards/4S.png') },

  //   { number: '5', suit: 'clubs', point: 5, pic: require('../../cards/5C.png') },
  //   { number: '5', suit: 'diamonds', point: 5, pic: require('../../cards/5D.png') },
  //   { number: '5', suit: 'hearts', point: 5, pic: require('../../cards/5H.png') },
  //   { number: '5', suit: 'spades', point: 5, pic: require('../../cards/5S.png') },

  //   { number: '6', suit: 'clubs', point: 6, pic: require('../../cards/6C.png') },
  //   { number: '6', suit: 'diamonds', point: 6, pic: require('../../cards/6D.png') },
  //   { number: '6', suit: 'hearts', point: 6, pic: require('../../cards/6H.png') },
  //   { number: '6', suit: 'spades', point: 6, pic: require('../../cards/6S.png') },

  //   { number: '7', suit: 'clubs', point: 7, pic: require('../../cards/7C.png') },
  //   { number: '7', suit: 'diamonds', point: 7, pic: require('../../cards/7D.png') },
  //   { number: '7', suit: 'hearts', point: 7, pic: require('../../cards/7H.png') },
  //   { number: '7', suit: 'spades', point: 7, pic: require('../../cards/7S.png') },

  //   { number: '8', suit: 'clubs', point: 8, pic: require('../../cards/8C.png') },
  //   { number: '8', suit: 'diamonds', point: 8, pic: require('../../cards/8D.png') },
  //   { number: '8', suit: 'hearts', point: 8, pic: require('../../cards/8H.png') },
  //   { number: '8', suit: 'spades', point: 8, pic: require('../../cards/8S.png') },

  //   { number: '9', suit: 'clubs', point: 9, pic: require('../../cards/9C.png') },
  //   { number: '9', suit: 'diamonds', point: 9, pic: require('../../cards/9D.png') },
  //   { number: '9', suit: 'hearts', point: 9, pic: require('../../cards/9H.png') },
  //   { number: '9', suit: 'spades', point: 9, pic: require('../../cards/9S.png') },

  //   { number: '10', suit: 'clubs', point: 0, pic: require('../../cards/10C.png') },
  //   { number: '10', suit: 'diamonds', point: 0, pic: require('../../cards/10D.png') },
  //   { number: '10', suit: 'hearts', point: 0, pic: require('../../cards/10H.png') },
  //   { number: '10', suit: 'spades', point: 0, pic: require('../../cards/10S.png') },

  //   { number: 'J', suit: 'clubs', point: 0, pic: require('../../cards/JC.png') },
  //   { number: 'J', suit: 'diamonds', point: 0, pic: require('../../cards/JD.png') },
  //   { number: 'J', suit: 'hearts', point: 0, pic: require('../../cards/JH.png') },
  //   { number: 'J', suit: 'spades', point: 0, pic: require('../../cards/JS.png') },

  //   { number: 'Q', suit: 'clubs', point: 0, pic: require('../../cards/QC.png') },
  //   { number: 'Q', suit: 'diamonds', point: 0, pic: require('../../cards/QD.png') },
  //   { number: 'Q', suit: 'hearts', point: 0, pic: require('../../cards/QH.png') },
  //   { number: 'Q', suit: 'spades', point: 0, pic: require('../../cards/QS.png') },

  //   { number: 'K', suit: 'clubs', point: 0, pic: require('../../cards/KC.png') },
  //   { number: 'K', suit: 'diamonds', point: 0, pic: require('../../cards/KD.png') },
  //   { number: 'K', suit: 'hearts', point: 0, pic: require('../../cards/KH.png') },
  //   { number: 'K', suit: 'spades', point: 0, pic: require('../../cards/KS.png') },
  // ];

  const [userHand, setUserHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [card1_user, setCard1User] = useState([]);
  const [card2_user, setCard2User] = useState([]);
  const [card3_user, setCard3User] = useState([]);
  const [card1_dealer, setCard1Dealer] = useState([]);
  const [card2_dealer, setCard2Dealer] = useState([]);
  const [card3_dealer, setCard3Dealer] = useState([]);
  const [backcard1_dealer, setBackCard1Dealer] = useState([]);
  const [backcard2_dealer, setBackCard2Dealer] = useState([]);
  const [backcard3_dealer, setBackCard3Dealer] = useState([]);

  //const [userPullCard,setUserPullCard] = useState(false)
  //let userPullCard = false;
  //let userPullCard = []
  const [opacityOfPullButton, setOpacityOfPullButton] = useState(1);

  let randomNumber = 0;
  let tmp = 0;
  const [showCardToCompare, setShowCardToCompare] = useState(0);
  let gameEnd = false;
  const startgame = () => {
    //สุ่มครั้งแรกให้ผู้เล่น
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 51);
      tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          user_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard1User([...card1_user, <Data pic={item.pic} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
    }, 500);

    //สุ่มครั้งแรกให้เจ้ามือ
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 50);
      tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          dealer_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard1Dealer([...card1_dealer, <Data pic={item.pic} />]);
          setBackCard1Dealer([...backcard1_dealer, <Data pic={pic_back} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
    }, 1000);

    //สุ่มครั้งสองให้ผู้เล่น
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 49);
      tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          user_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard2User([...card2_user, <Data pic={item.pic} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
    }, 1500);

    //สุ่มครั้งสองให้เจ้ามือ
    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 48);
      tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          dealer_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard2Dealer([...card2_dealer, <Data pic={item.pic} />]);
          setBackCard2Dealer([...backcard2_dealer, <Data pic={pic_back} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
      //console.log(user_hand)
      //console.log(dealer_hand)
    }, 2000);

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // setTimeout(()=>{
    //   //console.log(checkPok(countPoint(user_hand),countPoint(dealer_hand)))
    //   if(checkPok(countPoint(user_hand),countPoint(dealer_hand))=='Pok'){
    //     gameEnd=true;
    //     setShowCardToCompare(1)
    //     checkPoint(countPoint(user_hand),countPoint(dealer_hand)).map((item)=>{
    //       console.log(`Winner is ${item.whoWin}, deng = ${item.deng}`)
    //     })
    //   }
    // },2500)

    // setTimeout(()=>{
    //   if(gameEnd==false){
    //     checkPoint(countPoint(user_hand),countPoint(dealer_hand)).map((item)=>{
    //       if(item.whoWin!='dealer'){
    //         dealerPull()
    //       }
    //     })
    //   }
    // },7000)

    // setTimeout(()=>{
    //   if(gameEnd==false){
    //     setShowCardToCompare(1)
    //     checkPoint(countPoint(user_hand),countPoint(dealer_hand)).map((item)=>{
    //       console.log(`Winner is ${item.whoWin}, deng = ${item.deng}`)
    //     })
    //   }
    // },7500)

    // setTimeout(()=>{
    //   user_hand = []
    //   dealer_hand = []
    //   deck = backup_deck
    //   userPullCard = false;
    //   navigation.goBack()
    // },8500)
  };

  const countPoint = (hand) => {
    let point = 0;
    let twoDeng = false;
    let threeDeng = false;
    let pok9 = false;
    let pok8 = false;
    let threeOfKind = false;
    let straightFlush = false;
    let straight = false;
    let threeRoyal = false;
    let amountOfCard = 0;
    let clubs = 0;
    let diamonds = 0;
    let hearts = 0;
    let spades = 0;
    let suitArray = [];
    let numberArray = [];
    let stringNumber = '';
    let result = [];

    hand.map((item) => {
      suitArray.push(item.suit);
      numberArray.push(item.number);
      amountOfCard = amountOfCard + 1;
      point = point + item.point;
      if (point >= 10) {
        point = point - 10;
      }
    });
    //console.log(suitArray)
    //console.log(numberArray)
    suitArray.map((item) => {
      if (item == 'clubs') {
        clubs = clubs + 1;
      } else if (item == 'diamonds') {
        diamonds = diamonds + 1;
      } else if (item == 'hearts') {
        hearts = hearts + 1;
      } else if (item == 'spades') {
        spades = spades + 1;
      }
    });
    //console.log(`clubs = ${clubs} , diamonds = ${diamonds} , hearts = ${hearts} , spades = ${spades}`)
    //numberArray=['1','2','3','4','5','6','7','8','9','10','J','Q','K'] // 1 10 2 3 4 5 6 7 8 9 J K Q
    //numberArray=['2','3','4'] // 2 3 4
    //numberArray=['3','4','5'] // 3 4 5
    //numberArray=['4','5','6'] // 4 5 6
    //numberArray=['5','6','7'] // 5 6 7
    //numberArray=['6','7','8'] // 6 7 8
    //numberArray=['7','8','9'] // 7 8 9
    //numberArray=['8','9','10'] // 10 8 9
    //numberArray=['10','J','Q'] // 10 J Q
    //numberArray=['J','Q','K'] // J K Q
    //numberArray=['Q','K','1'] // 1 K Q
    // JJQ
    // JJK
    // JQJ
    // JKJ
    // JQQ
    // JKK
    // =
    // JJQ
    // JJK
    // JQQ
    // JKK

    // QQJ
    // QQK
    // QJQ
    // QKQ
    // QJJ
    // QKK
    // =
    // JQQ
    // KQQ
    // JJQ
    // KKQ

    // KKJ
    // KKQ
    // KJK
    // KQK
    // KJJ
    // KQQ
    // =
    // JKK
    // KKQ
    // JJK
    // KQQ

    //เรียงยังไงก็จะได้แค่
    // JJQ
    // JJK
    // JQQ
    // JKK
    // KQQ
    // KKQ

    numberArray.sort();
    numberArray.map((item) => {
      stringNumber = stringNumber + item;
    });
    //console.log(`stringNumber = ${stringNumber}`)
    //มีไพ่2ใบ
    if (amountOfCard == 2) {
      //แต้มเท่ากับ9
      if (point == 9) {
        //มีหน้าตัดเหมือนกัน --> 2เด้ง
        if (clubs == 2 || diamonds == 2 || hearts == 2 || spades == 2) {
          pok9 = true;
          twoDeng = true;
        }
        //หน้าตัดไม่เหมือนกัน --> ป็อก9ธรรมดา
        else {
          pok9 = true;
        }
      }
      //แต้มเท่ากับ8
      else if (point == 8) {
        //มีหน้าตัดเหมือนกัน --> 2เด้ง
        if (clubs == 2 || diamonds == 2 || hearts == 2 || spades == 2) {
          pok8 = true;
          twoDeng = true;
        }
        //มีเลขเหมือนกัน --> 2เด้ง
        if (stringNumber == '44' || stringNumber == '99') {
          pok8 = true;
          twoDeng = true;
        }
        //มีหน้าตัดไม่เหมือนกันและเลขไม่เหมือนกัน --> ป็อก8ธรรมดา
        else {
          pok8 = true;
        }
      }
      //ไม่ป็อก
      else {
        //มีหน้าตัดเหมือนกัน --> 2เด้ง
        if (clubs == 2 || diamonds == 2 || hearts == 2 || spades == 2) {
          twoDeng = true;
        }
        //มีเลขเหมือนกัน --> 2เด้ง
        if (
          stringNumber == '11' ||
          stringNumber == '22' ||
          stringNumber == '33' ||
          stringNumber == '66' ||
          stringNumber == '77' ||
          stringNumber == '88'
        ) {
          twoDeng = true;
        }
      }
    }
    //มีไพ่3ใบ
    else if (amountOfCard == 3) {
      //ไพ่ทั้ง3ใบ มีเลขเดียวกัน3ใบ --> ตอง
      if (
        stringNumber == '111' ||
        stringNumber == '222' ||
        stringNumber == '333' ||
        stringNumber == '444' ||
        stringNumber == '555' ||
        stringNumber == '666' ||
        stringNumber == '777' ||
        stringNumber == '888' ||
        stringNumber == '999' ||
        stringNumber == '101010' ||
        stringNumber == 'JJJ' ||
        stringNumber == ' QQQ' ||
        stringNumber == 'KKK'
      ) {
        threeOfKind = true;
      }
      //numberArray=['1','2','3','4','5','6','7','8','9','10','J','Q','K'] // 1 10 2 3 4 5 6 7 8 9 J K Q
      //ไพ่ทั้ง3ใบ มีเลขเรียงกัน --> เรียง
      else if (
        stringNumber == '234' ||
        stringNumber == '345' ||
        stringNumber == '456' ||
        stringNumber == '567' ||
        stringNumber == '678' ||
        stringNumber == '789' ||
        stringNumber == '1089' ||
        stringNumber == '109J' ||
        stringNumber == '10JQ' ||
        stringNumber == 'JKQ' ||
        stringNumber == '1KQ'
      ) {
        //ไพ่ทั้ง3ใบ มีหน้าตัดเหมือนกัน แล้วเรียงกันด้วย --> เรียงฟลัช
        if (clubs == 3 || diamonds == 3 || hearts == 3 || spades == 3) {
          straightFlush = true;
        }
        //ไพ่ทั้ง3ใบ มีเลขเรียงกันเฉยๆ --> เรียง
        else {
          straight = true;
        }
      }
      //ไพ่ทั้ง3 เป็นไพ่หน้าคน --> สามเหลือง
      //เรียงยังไงก็จะได้แค่
      // JJQ
      // JJK
      // JQQ
      // JKK
      // KQQ
      // KKQ
      else if (
        stringNumber == 'JJQ' ||
        stringNumber == 'JJK' ||
        stringNumber == 'JQQ' ||
        stringNumber == 'JKK' ||
        stringNumber == 'KQQ' ||
        stringNumber == 'KKQ'
      ) {
        threeRoyal = true;
      }
      //ไม่ตอง ไม่เรียง ไม่เรียงฟลัช ไม่สามเหลือง
      else {
        if (clubs == 3 || diamonds == 3 || hearts == 3 || spades == 3) {
          threeDeng = true;
        }
      }
    }
    result.push({
      point: point,
      twoDeng: twoDeng,
      threeDeng: threeDeng,
      pok9: pok9,
      pok8: pok8,
      threeOfKind: threeOfKind,
      straightFlush: straightFlush,
      straight: straight,
      threeRoyal: threeRoyal,
    });
    //console.log(result)
    return result;
  };

  const checkPok = (user, dealer) => {
    //console.log(user)
    //console.log(dealer)

    let userPoint = 0;
    let userTwoDeng = false;
    let userThreeDeng = false;
    let userPok9 = false;
    let userPok8 = false;
    let userThreeOfKind = false;
    let userStraightFlush = false;
    let userStraight = false;
    let userThreeRoyal = false;

    let dealerPoint = 0;
    let dealerTwoDeng = false;
    let dealerThreeDeng = false;
    let dealerPok9 = false;
    let dealerPok8 = false;
    let dealerThreeOfKind = false;
    let dealerStraightFlush = false;
    let dealerStraight = false;
    let dealerThreeRoyal = false;

    let result = '';

    user.map((item) => {
      userPoint = item.point;
      userTwoDeng = item.twoDeng;
      userThreeDeng = item.threeDeng;
      userPok9 = item.pok9;
      userPok8 = item.pok8;
      userThreeOfKind = item.threeOfKind;
      userStraightFlush = item.straightFlush;
      userStraight = item.straight;
      userThreeRoyal = item.threeRoyal;
    });

    dealer.map((item) => {
      dealerPoint = item.point;
      dealerTwoDeng = item.twoDeng;
      dealerThreeDeng = item.threeDeng;
      dealerPok9 = item.pok9;
      dealerPok8 = item.pok8;
      dealerThreeOfKind = item.threeOfKind;
      dealerStraightFlush = item.straightFlush;
      dealerStraight = item.straight;
      dealerThreeRoyal = item.threeRoyal;
    });

    //console.log(userPoint)
    //console.log(dealerPoint)
    if (
      userPok9 == true ||
      dealerPok9 == true ||
      userPok8 == true ||
      dealerPok8 == true
    ) {
      return 'Pok';
    } else {
      return 'noOnePok';
    }
  };

  const checkPoint = (user, dealer) => {
    //console.log(user)
    let userPoint = 0;
    let userTwoDeng = false;
    let userThreeDeng = false;
    let userPok9 = false;
    let userPok8 = false;
    let userThreeOfKind = false;
    let userStraightFlush = false;
    let userStraight = false;
    let userThreeRoyal = false;
    let userDeng = 1;

    let dealerPoint = 0;
    let dealerTwoDeng = false;
    let dealerThreeDeng = false;
    let dealerPok9 = false;
    let dealerPok8 = false;
    let dealerThreeOfKind = false;
    let dealerStraightFlush = false;
    let dealerStraight = false;
    let dealerThreeRoyal = false;
    let dealerDeng = 1;

    let result = [];

    user.map((item) => {
      userPoint = item.point;
      userTwoDeng = item.twoDeng;
      userThreeDeng = item.threeDeng;
      userPok9 = item.pok9;
      userPok8 = item.pok8;
      userThreeOfKind = item.threeOfKind;
      userStraightFlush = item.straightFlush;
      userStraight = item.straight;
      userThreeRoyal = item.threeRoyal;
    });

    dealer.map((item) => {
      dealerPoint = item.point;
      dealerTwoDeng = item.twoDeng;
      dealerThreeDeng = item.threeDeng;
      dealerPok9 = item.pok9;
      dealerPok8 = item.pok8;
      dealerThreeOfKind = item.threeOfKind;
      dealerStraightFlush = item.straightFlush;
      dealerStraight = item.straight;
      dealerThreeRoyal = item.threeRoyal;
    });

    if (userTwoDeng == true) {
      userDeng = 2;
    }
    if (userThreeDeng == true) {
      userDeng = 3;
    }
    if (userThreeOfKind == true) {
      userDeng = 5;
    }
    if (userStraightFlush == true) {
      userDeng = 5;
    }
    if (userStraight == true) {
      userDeng = 3;
    }
    if (userThreeRoyal == true) {
      userDeng = 3;
    }
    if (dealerTwoDeng == true) {
      dealerDeng = 2;
    }
    if (dealerThreeDeng == true) {
      dealerDeng = 3;
    }
    if (dealerThreeOfKind == true) {
      dealerDeng = 5;
    }
    if (dealerStraightFlush == true) {
      dealerDeng = 5;
    }
    if (dealerStraight == true) {
      dealerDeng = 3;
    }
    if (dealerThreeRoyal == true) {
      dealerDeng = 3;
    }

    //console.log(`userPoint = ${userPoint}, userPok9 = ${userPok9}, userPok8 = ${userPok8}, userThreeOfKind = ${userThreeOfKind}, userStraightFlush = ${userStraightFlush}, userStraight = ${userStraight}, userThreeRoyal = ${userThreeRoyal}, userDeng = ${userDeng}`)

    //console.log(`dealerPoint = ${dealerPoint}, dealerPok9 = ${dealerPok9}, dealerPok8 = ${dealerPok8}, dealerThreeOfKind = ${dealerThreeOfKind}, dealerStraightFlush = ${dealerStraightFlush}, dealerStraight = ${dealerStraight}, dealerThreeRoyal = ${dealerThreeRoyal}, dealerDeng = ${dealerDeng}`)

    if (userPok9 == true || dealerPok9 == true) {
      if (userPok9 == true && dealerPok9 == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userPok9 == false && dealerPok9 == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userPok9 == true && dealerPok9 == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }

    if (userPok8 == true || dealerPok8 == true) {
      if (userPok8 == true && dealerPok8 == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userPok8 == false && dealerPok8 == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userPok8 == true && dealerPok8 == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }

    if (userThreeOfKind == true || dealerThreeOfKind == true) {
      if (userThreeOfKind == true && dealerThreeOfKind == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userThreeOfKind == false && dealerThreeOfKind == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userThreeOfKind == true && dealerThreeOfKind == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }

    if (userStraightFlush == true || dealerStraightFlush == true) {
      if (userStraightFlush == true && dealerStraightFlush == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userStraightFlush == false && dealerStraightFlush == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userStraightFlush == true && dealerStraightFlush == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }

    if (userStraight == true || dealerStraight == true) {
      if (userStraight == true && dealerStraight == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userStraight == false && dealerStraight == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userStraight == true && dealerStraight == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }

    if (userThreeRoyal == true || dealerThreeRoyal == true) {
      if (userThreeRoyal == true && dealerThreeRoyal == false) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userThreeRoyal == false && dealerThreeRoyal == true) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userThreeRoyal == true && dealerThreeRoyal == true) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    } else if (
      userPok9 == false &&
      userPok8 == false &&
      userThreeOfKind == false &&
      userStraightFlush == false &&
      userStraight == false &&
      userThreeRoyal == false &&
      dealerPok9 == false &&
      dealerPok8 == false &&
      dealerThreeOfKind == false &&
      dealerStraightFlush == false &&
      dealerStraight == false &&
      dealerThreeRoyal == false
    ) {
      if (userPoint > dealerPoint) {
        result.push({ whoWin: 'player1', deng: userDeng });
        return result;
      }
      if (userPoint < dealerPoint) {
        result.push({ whoWin: 'player2', deng: dealerDeng });
        return result;
      }
      if (userPoint == dealerPoint) {
        result.push({ whoWin: 'draw', deng: 0 });
        return result;
      }
    }
  };

  const userPull = () => {
    userPullCard = true;
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 47);
      let tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          user_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard3User([...card3_user, <Data pic={item.pic} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
      // user_hand = [
      //   {number:'J',suit:'diamonds',point:0,pic:pic_9C},
      //   {number:'Q',suit:'diamonds',point:0,pic:pic_10D},
      //   {number:'K',suit:'hearts',point:0,pic:pic_10D},
      // ]
      // dealer_hand = [
      //   {number:'J',suit:'spades',point:0,pic:pic_2D},
      //   {number:'J',suit:'clubs',point:0,pic:pic_2D},
      //   {number:'Q',suit:'diamonds',point:0,pic:pic_2D},
      // ]
      //console.log(user_hand)
      //console.log(checkPoint(countPoint(user_hand),countPoint(dealer_hand)))
      // checkPoint(countPoint(user_hand),countPoint(dealer_hand)).map((item)=>{
      //   console.log(`whoWin = ${item.whoWin}, deng = ${item.deng}`)
      // })
    }, 100);
  };

  const dealerPull = () => {
    //console.log(user_hand)
    //console.log(deck)
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 46);
      let tmp = 0;
      deck.map((item) => {
        if (tmp == randomNumber) {
          dealer_hand.push({
            number: item.number,
            suit: item.suit,
            point: item.point,
            pic: item.pic,
          });
          setCard3Dealer([...card3_dealer, <Data pic={item.pic} />]);
          setBackCard3Dealer([...backcard3_dealer, <Data pic={pic_back} />]);
          deck.splice(randomNumber, 1);
          tmp = tmp + 1;
        } else {
          tmp = tmp + 1;
        }
      });
      //console.log(checkPoint(countPoint(user_hand),countPoint(dealer_hand)))
      // checkPoint(countPoint(user_hand),countPoint(dealer_hand)).map((item)=>{
      //   console.log(`whoWin = ${item.whoWin}, deng = ${item.deng}`)
      // })
    }, 100);
  };

  const Data = (item) => {
    return (
      <View>
        <Image
          source={item.pic}
          style={{ width: 100, height: 160, margin: 2 }}
        />
      </View>
    );
  };

  const checkShowToCompare1 = () => {
    if (showCardToCompare == 0) {
      return backcard1_dealer;
    } else {
      return card1_dealer;
    }
  };

  const checkShowToCompare2 = () => {
    if (showCardToCompare == 0) {
      return backcard2_dealer;
    } else {
      return card2_dealer;
    }
  };

  const checkShowToCompare3 = () => {
    if (showCardToCompare == 0) {
      return backcard3_dealer;
    } else {
      return card3_dealer;
    }
  };

  const userText = () => {

    let point = 0;
    let twoDeng = false;
    let threeDeng = false;
    let pok9 = false;
    let pok8 = false;
    let threeOfKind = false;
    let straightFlush = false;
    let straight = false;
    let threeRoyal = false;

    if(player=='1'){
      countPoint(player1card).map((item) => {
      point = point + item.point;
      if (point >= 10) {
        point = point - 10;
      }
      twoDeng = item.twoDeng;
      threeDeng = item.threeDeng;
      pok9 = item.pok9;
      pok8 = item.pok8;
      threeOfKind = item.threeOfKind;
      straightFlush = item.straightFlush;
      straight = item.straight;
      threeRoyal = item.threeRoyal;
    });
    }
    if(player=='2'){
      countPoint(player2card).map((item) => {
      point = point + item.point;
      if (point >= 10) {
        point = point - 10;
      }
      twoDeng = item.twoDeng;
      threeDeng = item.threeDeng;
      pok9 = item.pok9;
      pok8 = item.pok8;
      threeOfKind = item.threeOfKind;
      straightFlush = item.straightFlush;
      straight = item.straight;
      threeRoyal = item.threeRoyal;
    });
    }

    if (pok9 == true) {
      return 'ป็อก 9';
    } else if (pok8 == true) {
      return 'ป็อก 8';
    } else if (threeOfKind == true) {
      return 'ตอง';
    } else if (straightFlush == true) {
      return 'เรียงฟลัช';
    } else if (straight == true) {
      return 'เรียง';
    } else if (threeRoyal == true) {
      return 'สามเหลือง';
    } else if (
      pok9 == false &&
      pok8 == false &&
      threeOfKind == false &&
      straightFlush == false &&
      straight == false &&
      threeRoyal == false
    ) {
      if (point == 0) {
        return 'บอด';
      } else {
        return `แต้ม : ${point}`;
      }
    }
  };

  const dealerText = () => {
    let point = 0;
    let twoDeng = false;
    let threeDeng = false;
    let pok9 = false;
    let pok8 = false;
    let threeOfKind = false;
    let straightFlush = false;
    let straight = false;
    let threeRoyal = false;

    if(gameEnding){
        if(player=='1'){
        countPoint(player2card).map((item) => {
        point = point + item.point;
        if (point >= 10) {
          point = point - 10;
        }
        twoDeng = item.twoDeng;
        threeDeng = item.threeDeng;
        pok9 = item.pok9;
        pok8 = item.pok8;
        threeOfKind = item.threeOfKind;
        straightFlush = item.straightFlush;
        straight = item.straight;
        threeRoyal = item.threeRoyal;
      });
      }
      if(player=='2'){
        countPoint(player1card).map((item) => {
        point = point + item.point;
        if (point >= 10) {
          point = point - 10;
        }
        twoDeng = item.twoDeng;
        threeDeng = item.threeDeng;
        pok9 = item.pok9;
        pok8 = item.pok8;
        threeOfKind = item.threeOfKind;
        straightFlush = item.straightFlush;
        straight = item.straight;
        threeRoyal = item.threeRoyal;
      })
      }
    }else{
      return '???'
    }
      if (pok9 == true) {
        return 'ป็อก 9';
      }
      if (pok8 == true) {
        return 'ป็อก 8';
      }
      if (threeOfKind == true) {
        return 'ตอง';
      }
      if (straightFlush == true) {
        return 'เรียงฟลัช';
      }
      if (straight == true) {
        return 'เรียง';
      }
      if (threeRoyal == true) {
        return 'สามเหลือง';
      }
      if (
        pok9 == false &&
        pok8 == false &&
        threeOfKind == false &&
        straightFlush == false &&
        straight == false &&
        threeRoyal == false
      ) {
        if (point == 0) {
          return 'บอด';
        }
        return `แต้ม : ${point}`;
      }
  };

  const refreshPage = () => {
    window.location.reload();
  };

 
  const [thisRoom,setThisRoom] = useState([])
  const [thisGame,setThisGame] = useState([])
  const [player1card,setPlayer1card] = useState([])
  const [player2card,setPlayer2card] = useState([])
  const [player1ready,setPlayer1ready] = useState()
  const [player2ready,setPlayer2ready] = useState()
  const [deck,setDeck] = useState([])
  const [turn,setTurn] = useState()
  const [gameEnding,setGameEnding] = useState(false)
  const [gameStarting,setGameStarting] = useState(false)
  const [readyPress,setReadyPress] = useState(false)
  const [pullPress,setPullPress] = useState(false)

  const isArrObjEqual = (arr1, arr2) => {
    // console.log('arr1 vv');
    // console.log(arr1);
    // console.log('arr2 vv');
    // console.log(arr2);
    let temp = arr1.map((arr) => ({ ...arr })); // temp = arr ( deep copy )
    //console.log('temp vv');
    //console.log(temp);
    if (temp.length !== arr2.length) {
      return false;
    } else {
      temp.forEach((obj1) => {
        //console.log('obj1 vv');
        //console.log(obj1);
        arr2 = reject(arr2, (obj2) => {
          //console.log('arr2 vv');
          //console.log(arr2);
          if (isEqual(obj2, obj1)) {
            //console.log('obj1 vv');
            //console.log(obj1);
            //console.log('obj2 vv');
            //console.log(obj2);
            arr1 = reject(obj1);
            //console.log('arr1 vv');
            //console.log(arr1);
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

  const getGameSuccess = (game) => {
    //console.log(game)
    if (!isArrObjEqual(game,thisGame)) {
      //console.log('Not Equal');
      setThisGame(game);
    } else {
      //console.log('Equal game');
      thisGame.map((item)=>{
        setPlayer1card(item.player1card)
        setPlayer2card(item.player2card)
        setDeck(item.deck)
        setTurn(item.turn)
        setPlayer1ready(item.player1ready)
        setPlayer2ready(item.player2ready)
      })
      //console.log(thisGame)
    }
  };
  useEffect(()=>{
    GameModel.listenThisGame(room,getGameSuccess)
  },[thisGame])

  let tmpp
  let rand
  const [phrase1,setPhrase1]=useState(0)
  if(turn==1 && player1ready == "ready" && player2ready == "ready" && player == '1' && phrase1==0){
    rand = Math.floor(Math.random() * (deck.length-1));
    tmpp = 0;
    deck.map((item)=>{
        if(tmpp==rand){
          player1card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
          //console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
          //console.log(player1card)
          tmpp=tmpp+1
        }else{tmpp=tmpp+1}
      })
    deck.splice(rand,1)
    rand = Math.floor(Math.random() * (deck.length-1));
    tmpp = 0;
    deck.map((item)=>{
        if(tmpp==rand){
          player2card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
          //console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
          //console.log(player2card)
          tmpp=tmpp+1
        }else{tmpp=tmpp+1}
      })
    deck.splice(rand,1)
    rand = Math.floor(Math.random() * (deck.length-1));
    tmpp = 0;
    deck.map((item)=>{
        if(tmpp==rand){
          player1card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
          //console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
          //console.log(player1card)
          tmpp=tmpp+1
        }else{tmpp=tmpp+1}
      })
    deck.splice(rand,1)
    rand = Math.floor(Math.random() * (deck.length-1));
    tmpp = 0;
    deck.map((item)=>{
        if(tmpp==rand){
          player2card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
          //console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
          //console.log(player2card)
          tmpp=tmpp+1
        }else{tmpp=tmpp+1}
      })
    deck.splice(rand,1)
    //console.log(`deck.length=${deck.length}`)
    //console.log(player1card)
    setPhrase1(1)
    GameModel.updateAll(room,deck,player1card,player2card,turn)
  }
  const [phrase2,setPhrase2]=useState(0)
  if(turn==2 && phrase2==0){
    //console.log(`do 1 time`)
    if(checkPok(countPoint(player1card),countPoint(player2card))=='Pok'){
      let winner
      let deng
      let result = checkPoint(countPoint(player1card),countPoint(player2card))
      result.map((item)=>{
        winner = item.whoWin
        deng = item.deng
      })
      console.log(`winner is ${winner} deng = ${deng}`)
      GameModel.changeReady(room,'both','end')
      setGameEnding(true)
      setTimeout(()=>{
        GameModel.breakGame(room)
        navigation.navigate('createPok')
      },10000)
    }
    else{
      setPhrase2(1)
      GameModel.changeTurn(room,turn)
      GameModel.changeReady(room,'both','wait')
    }
  }
  const [phrase3,setPhrase3]=useState(0)
  if(turn==3 && player1ready=='readymakmak' && player2ready=='readymakmak' && phrase3==0){
    let winner
    let deng
    let result = checkPoint(countPoint(player1card),countPoint(player2card))
    result.map((item)=>{
      winner = item.whoWin
      deng = item.deng
    })
    console.log(`winner is ${winner} deng = ${deng}`)
    setPhrase3(1)
    GameModel.changeTurn(room,turn)
    GameModel.changeReady(room,'both','end')
    setGameEnding(true)
    setTimeout(()=>{
        GameModel.breakGame(room)
        navigation.navigate('createPok')
    },10000)
  }
  const onPullPress = () => {
    if(player=='1'){
      rand = Math.floor(Math.random() * (deck.length-1));
      tmpp = 0;
      deck.map((item)=>{
          if(tmpp==rand){
            player1card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
            console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
            console.log(player1card)
            tmpp=tmpp+1
          }else{tmpp=tmpp+1}
        })
      deck.splice(rand,1)
      GameModel.updateAfterPull(room,deck,player,player1card,'readymakmak')
    }
    if(player=='2'){
      rand = Math.floor(Math.random() * (deck.length-1));
      tmpp = 0;
      deck.map((item)=>{
          if(tmpp==rand){
            player2card.push({number:item.number,suit:item.suit,point:item.point,pic:item.pic})
            console.log(`deck.length=${deck.length} random=${rand} tmpp=${tmpp}`)
            console.log(player1card)
            tmpp=tmpp+1
          }else{tmpp=tmpp+1}
        })
      deck.splice(rand,1)
      GameModel.updateAfterPull(room,deck,player,player2card,'readymakmak')
    }
    //GameModel.updatePlayerCard(player,)
  }
  const onReadyPress = () => {
    GameModel.changeReady(room,player,'readymakmak')
  }
  const flatlistReturn1 = () => {
    //console.log(player)
    if(player=='1'){
      //console.log('return 1')
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <FlatList
                    data={player1card}
                    renderItem={({ item }) => renderCard(item)}
                    horizontal
                />
        </View>
      )
    }
    if(player=='2'){
      //console.log('return 2')
      return (
        <View stylel={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <FlatList
                    data={player2card}
                    renderItem={({ item }) => renderCard(item)}
                    horizontal
                />
        </View>
      )
    }
  }
  let backCard = []
  const flatlistReturn2 = () => {
    if(gameEnding){
      if(player=='1'){
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <FlatList
                      data={player2card}
                      renderItem={({ item }) => renderCard(item)}
                      horizontal
                  />
          </View>
        )
      }
      if(player=='2'){
        return (
          <View stylel={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <FlatList
                      data={player1card}
                      renderItem={({ item }) => renderCard(item)}
                      horizontal
                  />
          </View>
        )
      }
    }else{
      if(player=='1'){
        player2card.map((item)=>{
          backCard.push({pic:pic_back})
        })
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <FlatList
                      data={backCard}
                      renderItem={({ item }) => renderCard(item)}
                      horizontal
                  />
          </View>
        )
      }
      if(player=='2'){
        player1card.map((item)=>{
          backCard.push({pic:pic_back})
        })
        return (
          <View stylel={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <FlatList
                      data={backCard}
                      renderItem={({ item }) => renderCard(item)}
                      horizontal
                  />
          </View>
        )
      }
    }
  }

  const startButton = () => {
    if(gameStarting==false){
      return (
        <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: '40%',
              height: 50,
              marginLeft: 10,
              opacity: opacityOfPullButton,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                GameModel.playerReady(room,player,allcard)
                setGameStarting(true)
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Sound-Rounded',
                  fontSize: 20,
                }}>
                พร้อม
              </Text>
            </TouchableOpacity>
          </View>
      )
    }
  }

  const readyAndPullButton = () => {
    if(player=='1'){
      if(readyPress==false && pullPress==false && gameStarting==true && player1ready=='wait'){
        return (
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View
                style={{
                  borderWidth: 0,
                  borderColor: 'red',
                  width: '40%',
                  height: 50,
                  marginLeft: 10,
                  backgroundColor:'orange',
                  borderRadius:50,
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    onReadyPress()
                    setReadyPress(true)
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Sound-Rounded',
                      fontSize: 20,
                    }}>
                    พร้อม
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderWidth: 0,
                  borderColor: 'red',
                  width: '40%',
                  height: 50,
                  marginLeft: 10,
                  backgroundColor:'orange',
                  borderRadius:50,
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    onPullPress()
                    setPullPress(true)
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Sound-Rounded',
                      fontSize: 20,
                    }}>
                    จั่ว
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        )
      }else{
        return (
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View
              style={{
                borderWidth: 0,
                borderColor: 'red',
                width: '40%',
                height: 50,
                marginLeft: 10,
                backgroundColor:'orange',
                borderRadius:50,
                opacity:0.5
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Sound-Rounded',
                    fontSize: 20,
                  }}>
                  พร้อม
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0,
                borderColor: 'red',
                width: '40%',
                height: 50,
                marginLeft: 10,
                backgroundColor:'orange',
                borderRadius:50,
                opacity:0.5
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Sound-Rounded',
                    fontSize: 20,
                  }}>
                  จั่ว
                </Text>
              </View>
            </View>
            </View>
        )
      }
    }
    if(player=='2'){
      if(readyPress==false && pullPress==false && gameStarting==true && player2ready=='wait'){
      return (
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View
              style={{
                borderWidth: 0,
                borderColor: 'red',
                width: '40%',
                height: 50,
                marginLeft: 10,
                backgroundColor:'orange',
                borderRadius:50,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  onReadyPress()
                  setReadyPress(true)
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Sound-Rounded',
                    fontSize: 20,
                  }}>
                  พร้อม
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0,
                borderColor: 'red',
                width: '40%',
                height: 50,
                marginLeft: 10,
                backgroundColor:'orange',
                borderRadius:50,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  onPullPress()
                  setPullPress(true)
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Sound-Rounded',
                    fontSize: 20,
                  }}>
                  จั่ว
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      )
    }else{
      return (
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View
            style={{
              borderWidth: 0,
              borderColor: 'red',
              width: '40%',
              height: 50,
              marginLeft: 10,
              backgroundColor:'orange',
              borderRadius:50,
              opacity:0.5
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Sound-Rounded',
                  fontSize: 20,
                }}>
                พร้อม
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0,
              borderColor: 'red',
              width: '40%',
              height: 50,
              marginLeft: 10,
              backgroundColor:'orange',
              borderRadius:50,
              opacity:0.5
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Sound-Rounded',
                  fontSize: 20,
                }}>
                จั่ว
              </Text>
            </View>
          </View>
          </View>
      )
    }
    }
  }

  const renderCard = (item) => {
    return (
        <Image source={{uri:item.pic}} style={{width:100,height:160,margin:2}}/>
    )
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0,
            borderColor: 'blue',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              backgroundColor: 'lightgreen',
              width: '30%',
              height: 50,
              marginLeft: 10,
              borderRadius: 10,
              alignSelf: 'flex-start',
              borderWidth: 0,
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontFamily: 'Sound-Rounded', fontSize: 25 }}>
              คู่แข่ง
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 0,
              borderColor: 'green',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 0,
                borderColor: 'white',
                height: '80%',
                width: '40%',
                borderRadius: 20,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontFamily: 'Sound-Rounded' }}>
                {dealerText()}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: 'lightgreen',
            width: '90%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          { flatlistReturn2() }
        </View>
      </View>
      <View style={{flex:0.15,borderWidth:0,borderColor:'red',justifyContent:'center',alignItems:'center'}}>
        { startButton() }
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          borderColor: 'red',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0,
            borderColor: 'blue',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              backgroundColor: 'lightgreen',
              width: '30%',
              height: 50,
              marginLeft: 10,
              borderRadius: 10,
              alignSelf: 'flex-start',
              borderWidth: 0,
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                startgame();
              }}>
              <Text style={{ fontFamily: 'Sound-Rounded', fontSize: 25 }}>
                คุณ
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 0,
              borderColor: 'green',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 0,
                borderColor: 'white',
                height: '80%',
                width: '40%',
                borderRadius: 20,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  refreshPage();
                }}>
                <Text style={{ fontFamily: 'Sound-Rounded' }}>
                  {userText()}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection:'row',
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: 'lightgreen',
            width: '90%',
            height: 150,
            justifyContent:'center',
            alignItems:'center'
          }}>
          { flatlistReturn1() }
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          { readyAndPullButton() }
        </View>
      </View>
    </View>
  );
};
