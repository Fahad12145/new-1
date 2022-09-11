import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Wallet from './walllet/Wallet';
import Homescrn from './homescreen';
import Profile from './Profile/Profile';
import { ProfileStackScreen } from './Mainapp';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const TabNavigation=()=>{
  return(
<Tab.Navigator >
      <Tab.Screen name="Home" component={Homescrn}
       options={{tabBarIcon:()=>(<Image source={require("../srceens/Newpngs/Home.png")} 
       />)}}/>
       
      {/* <Tab.Screen name="Account" component={Profile} 
       options={{tabBarIcon:()=>(<Image source={require("../srceens/Newpngs/Account.png")}/>)}}
       /> */}
      <Tab.Screen name="Wallet" component={Wallet}  
       options={{tabBarIcon:()=>(<Image source={require("../srceens/Newpngs/wallet.png")}/>)}}
       />
       <Tab.Screen name="Profile"
       component={ProfileStackScreen}
       options={{
        tabBarLabel:'Profile',
        tabBarColor:"#694fad",
        tabBarIcon: ()=>(
          <Icon name="account-circle" color={"blue"} size={26} />
        )
       }}
       />
      
    </Tab.Navigator>
)}
export default TabNavigation;