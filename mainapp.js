import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./assets/srceens/login";
import Homescrn from "./assets/srceens/homescreen";
import integratedGyms from "./assets/srceens/IntegratedGyms"
import Signup from "./assets/srceens/Signup";
import Attendance from "./assets/srceens/Attendance";
import Estore from "./assets/srceens/Estore";
import Createportfolio from "./assets/srceens/createportfolio";
import QRcodescanner from "./assets/srceens/attendance/QRcodescanner";
import Wallet from "./assets/srceens/walllet/Wallet";
import Deposit from "./assets/srceens/walllet/Deposit";
import Withdraw from "./assets/srceens/walllet/Withdraw";
import Maps from "./assets/srceens/Map/Maps";
// import Splash from "./assets/srceens/Splash";
// import{View} from "react-native";
import Foodsuplements from "./assets/srceens/Estore/Fsuplements";
import Gymaccessories from "./assets/srceens/Estore/Gymaccessories";
import Clubpackages from "./assets/srceens/packages/Clubpackages";
import Estorepackages from "./assets/srceens/packages/Estorepackages";
import Profile from "./assets/srceens/Profile/Profile";
import QRgen from "./assets/srceens/attendance/QRcode generator";
// import Tabs from "./assets/srceens/tabs";
// import Location from "./assets/srceens/Location";
const mainapp=()=>
{
  const stack =createNativeStackNavigator();
  return(

   <NavigationContainer>
    {/* <Location/> */}
    {/* <Splash/> */}
    <stack.Navigator initialRouteName="Splash">
      <stack.Screen  name="Login" component={Login}/>
      <stack.Screen name="Home" component={Homescrn}/>
      <stack.Screen name="Integrated Gyms" component={integratedGyms}/>
      <stack.Screen name="SignUp" component={Signup}/>
      <stack.Screen name="Attendance" component={Attendance}/>
      <stack.Screen name="Estore" component={Estore}/>
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
<stack.Screen name="Profile" component={Profile}/>
<stack.Screen name="QR GEN" component={QRgen}/>
    </stack.Navigator>
    {/* <Tabs/> */}
   </NavigationContainer>
  )
  
}
export default mainapp;
