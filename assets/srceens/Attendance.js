import React from "react";
import {View,Text,StyleSheet, ImageBackground, Alert}from "react-native"
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon  from "@expo/vector-icons/MaterialIcons";
import { FAB } from "react-native-paper";

const Attendance=({navigation})=>
{

const pressFab=()=>{
  Alert.alert("Your Request is being processed. You'll be notified soon.")
}

  return(
    <View >
      <ImageBackground style={styles.bgimage}
   source={require("../srceens/Newpngs/blurlogin.jpg")}>
      <View>
      <TouchableOpacity 
       style={styles.gen}
      
      onPress={()=>navigation.navigate("QR Scanner")}>
          <Icon style={styles.icon} name="center-focus-weak" size={50} color={"white"}/>
          <Text style={styles.text}> Scan QR Code </Text>
          <AntDesign style={styles.icon2} name="forward" size={20} color={"white"}/>
          
          </TouchableOpacity>
          </View>
          <View>
 <TouchableOpacity 
 style={styles.gen}
 onPress={()=>navigation.navigate("QR Gen")}  >
        <AntDesign style={styles.icon} name="qrcode" size={50} color={"white"}/>
        <Text style={styles.textt}> QR Code Generator</Text>
        <AntDesign style={styles.icon3} name="forward" size={20} color={"white"}/>
        </TouchableOpacity>
        
<Text style={styles.txt}>FitGo Attendance Record </Text>
    </View>

    <FAB   
    label="Claim"
    uppercase={true}
    color={"#022358"}
    style={styles.fab}
    onPress={pressFab}
    />


    </ImageBackground>
    </View>
    )
}
const styles=StyleSheet.create({
  txt:{
    padding:10,
    fontSize:28,
    alignItems:'center',
    textAlign:'center',
    color:"#022358",
    backgroundColor:"#DBF9DB",
    marginTop:10,
    fontWeight:"bold"
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    paddingTop:30,
    paddingBottom:30,
    marginTop:10,
    marginLeft:40,
    marginRight:40,
    // backgroundColor:"green"
  },
gen:{
  marginTop:20,
  // marginBottom:0,
  backgroundColor:"#022358",
  flexDirection:"row",
  marginLeft:10,
  marginRight:10,
  textAlign:"center",

},
icon:{
  // backgroundColor:"black",
  marginTop:25

},
 
textt:{
  justifyContent:"center",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    marginTop:40,
    marginBottom:30,
    marginLeft:40,
    marginRight:40,
    // backgroundColor:"green" 
},
bgimage:{
  position:"relative",
  height:750,
  opacity:0.7
},
icon2:{
  marginTop:70,
  marginLeft:40
},
icon3:{
  marginTop:70,
  // marginLeft:10
},

fab: {
    // position: 'absolute',
    margin: 20,
    right: 0,
    top:250,
    backgroundColor:"#DBF9DB"
  },



})
export default Attendance ;