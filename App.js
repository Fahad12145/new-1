import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./srceens/Mainapp";
const main=()=>{
  return(
    <NavigationContainer   >
      <MainStackNavigator/>
    </NavigationContainer>
  )
}
export default main;