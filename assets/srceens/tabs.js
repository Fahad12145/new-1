import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wallet from './walllet/Wallet';
import Homescrn from './homescreen';
import Account from './Account';
const Tab = createBottomTabNavigator();
const Tabs=()=>{
<Tab.Navigator>
      <Tab.Screen name="Home" component={Homescrn} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Wallet" component={Wallet} />
      
    </Tab.Navigator>
}
export default Tabs;