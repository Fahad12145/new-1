// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import {createDrawerNavigator} from "@react-navigation/drawer";

// import Homescrn from "./homescreen";


// const Drawer = createDrawerNavigator();


// const Draw =()=>{
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 screenOptions={{headerShown: false}}
//                 <Drawer.Screen name="Home" component={Homescrn}/>
//             </Drawer.Navigator>
           
//         </NavigationContainer>
//     );
// }
// export default Draw;




// import  React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Homescrn from "./homescreen";
// import Estore from './Estore/Estore';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Homescrn} />
//         <Drawer.Screen name="Estore" component={Estore} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }