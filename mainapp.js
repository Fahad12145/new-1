import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./srceens/login";
import Homescrn from "./srceens/homescreen";
import integratedGyms from "./srceens/IntegratedGyms"
import Signup from "./srceens/Signup";
import Attendance from "./srceens/Attendance";
import Estore from "./srceens/Estore";
import Createportfolio from "./srceens/createportfolio";
import QRcodescanner from "./srceens/attendance/QRcodescanner";
import Wallet from "./srceens/walllet/Wallet";
import Deposit from "./srceens/walllet/Deposit";
import Withdraw from "./srceens/walllet/Withdraw";
import Maps from "./srceens/Map/Maps";
// import Splash from "./srceens/Splash";
// import{View} from "react-native";
import Foodsuplements from "./srceens/Estore/Fsuplements";
import Gymaccessories from "./srceens/Estore/Gymaccessories";
import Clubpackages from "./srceens/packages/Clubpackages";
import Estorepackages from "./srceens/packages/Estorepackages";
import Profile from "./srceens/Profile/Profile";
import QRgen from "./srceens/attendance/QRcode generator";
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
