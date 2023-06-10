import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Homescrn from './homescreen';
// import TabNavigation from './TabNavigation';
import Integratedgyms from './IntegratedGyms';
import YourGym from './YourClub';
import Signup from './Signup';
import Attendance from './Attendance';
import Estore from './Estore/Estore';
import Createportfolio from './createportfolio';
import QRcodescanner from './attendance/QRcodescanner';
import Wallet from './walllet/Wallet';
import Deposit from './walllet/Deposit';
import Withdraw from './walllet/Withdraw';
import Homescreen from './Homepage';
import Signupp from './Signupp';
import Maps from './Map/Maps';
import Foodsuplements from './Estore/Fsuplements';
import Gymaccessories from './Estore/Gymaccessories';
import Clubpackages from './packages/Clubpackages';
import Estorepackages from './packages/Estorepackages';
import Profile from './Profile/Profile';
import QRGen from './attendance/QRGen';
import Membership from './Membership';
import Loginn from './Loginn';
import News from './News';
import Events from './Events';
import Faqs from './Faqs';
import DetailsScreen from './Estore/detail';
import Purchase from './Estore/purchase';
import EditProfile from './Profile/EditProfile';
import ChangePass from './changepass';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Terms from './Terms';
import Easypaisa from './walllet/easypaisa';
import Jazzcash from './walllet/jazzcash';

// import Draw from './drawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { ScrollView } from 'react-native';
// import { screensEnabled } from 'react-native-screens';
// import Location from "./assets/srceens/Location";
const stack =createNativeStackNavigator();

const Mainapp=()=>{
  
  return(
      <stack.Navigator  initialRouteName='Login'>
        {/* <stack.Screen name='Homepage' component={TabNavigation} screenOptions={{headerShown:false}}/> */}
      <stack.Screen  name="Login" component={Login} />
      <stack.Screen name="Loginn" component={Loginn}/>
      <stack.Screen name="Home" component={Homescrn}/>
      <stack.Screen name="Integrated Gyms" component={Integratedgyms}/>
      <stack.Screen name="SignUp" component={Signup}/>
      <Stack.Screen name='Signupp' component={Signupp}/>
      <stack.Screen name="Attendance" component={Attendance}/>
      <stack.Screen name="Estore" component={Estore}/>
      <Stack.Screen name='purchase Screen' component={Purchase}/>
      <stack.Screen name="Create Portfolio" component={Createportfolio}/>
      <stack.Screen name="QR Scanner" component={QRcodescanner}/>
      <stack.Screen name="Wallet" component={Wallet}/>
      <stack.Screen name="Deposit" component={Deposit}/>
      <stack.Screen name="Withdraw" component={Withdraw}/>
      <stack.Screen name="Maps" component={Maps}/>
      <stack.Screen name="Food Supplements" component={Foodsuplements}/>
      <stack.Screen name="Gym Accessories" component={Gymaccessories}/>
      <stack.Screen name="Club packages" component={Clubpackages}/>
      <stack.Screen name="Estore packages" component={Estorepackages}/>
      <stack.Screen name="Profile" component={Profile} options={{title:"Account"}}/>
      <stack.Screen name="QR Gen" component={QRGen}/>
      <stack.Screen name="Membership" component={Membership}/>
      <stack.Screen name='changepass' component={ChangePass}/>
      <stack.Screen name="News" component={News}/>
      <stack.Screen name="Events" component={Events}/>
      <stack.Screen name="FAQs" component={Faqs}/>
      <Stack.Screen name='Details' component={DetailsScreen}/>
      <stack.Screen name="EditProfile" component={EditProfile}/>
      <stack.Screen name="Homescreen" component={Homescreen}/>
      <Stack.Screen name='Your Club' component={YourGym}/>
      <stack.Screen name="Terms and Conditions" component={Terms}/>
<Stack.Screen name='Easypaisa' component={Easypaisa}/>
<stack.Screen name='Jazzcash' component={Jazzcash}/>

      </stack.Navigator>
  )
  
  }


  // const Drawer = createDrawerNavigator();

  // const drawerr=()=> {
  //   return (
  //     <NavigationContainer>
  //       <Drawer.Navigator
  //       // initialRouteName="Home"
  //       >
  //         screenOptions={{headerShown:false}}
  //         <Drawer.Screen name="Home" component={Homescrn} />
  //         <Drawer.Screen name="Estore" component={Estore} />
  //       </Drawer.Navigator>
  //     </NavigationContainer>
  //   );
  // }




  const Stack=createNativeStackNavigator();
const MainStackNavigator = () => {

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <stack.Screen name="nav tabs" component={TabNavigation}/> */}
      
         <stack.Screen name='Main App' component={Mainapp}/>
      </Stack.Navigator>
  );
};
// const ProfileStackScreen=({navigation})=>(
//   <Stack.Navigator screenOptions={{
//     headerStyle:{
//       backgroundColor:'#fff',
//       shadowColor:'#fff',
//       elevation:0
//     },
//     headerTintColor:'#000',
//     headerTitleStyle:{
//       fontWeight:"bold"
//     }
//   }}>
//      <Stack.Screen name="  Profile" component={Profile}
//      options={{
//       headerLeft:()=>(
//         <Icon.Button 
//         name="menu" size={20}
//         marginLeft={10}
//         backgroundColor="#fff"
//         color={"#000"}
//         // onPress={()=>navigation.openDrawer()} 
//         />
//       ),
//       headerRight:()=>(
//         <Icon.Button 
//         name="account-edit" size={20}
//         marginLeft={10}
//         backgroundColor="#fff"
//         color={"#000"}
//         onPress={()=>navigation.navigate("EditProfile")} />
//       ),
//      }}/>
//      <Stack.Screen 
//      name='EditProfile'
//      options={{
//       title :'Edit Profile'
//      }}
//      component={EditProfile}
//      />
//   </Stack.Navigator>
// );
export { Mainapp,MainStackNavigator,
  // ProfileStackScreen,drawerr
};









