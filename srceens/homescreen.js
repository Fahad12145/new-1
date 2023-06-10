// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Button,Dimensions, ImageBackground,}from "react-native"
import Icon from "@expo/vector-icons/MaterialIcons";

// import { ICON_SIZE } from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon";
const Homescrn= ({navigation})=>{
  return(
    <View>
      <ImageBackground style={{height:900,width:400}} source={require("../assets/Newpngs/abstractblur.jpg")}>
    <View>
      <ScrollView>
      <View 
       style={styles.header} 
       > 

       <Icon 
         name="menu" color={"#DBF9DB"} size={44}  marginLeft={5} marginTop={10} backgroundColor={"#022658"} />  
      <Text style={{
        color:"#DBF9DB", 
         fontSize:30, 
         marginTop:10, 
         fontWeight:'bold' 
       }}> Home                         </Text> 
           <Icon.Button onPress={()=>navigation.navigate("Profile")} 
           style={styles.profile} 
           name="account-circle" size={40} borderRadius={30} color={"#DBF9DB"} marginLeft={5} backgroundColor={"#022658"}/> 
      </View>  
      {/* 1st row */}
      <View style={{flexDirection:"row"}}>
      <View style={styles.bt1}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Maps")} 
  
        name="search" size={50} color="#022658"  backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>Explore Gyms</Text>
      </View>
      <View style={styles.bt2}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Attendance")} 
  
        name="event-available" size={50} color="#022658" backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>Attendance</Text>
      </View>
      <View style={styles.bt3}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Estore")} 
  
        name="store" size={50} color="#022658" backgroundColor={"#DBF9DB"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>FitGo E-store</Text>
      </View>
       </View>
       {/* 2nd row */}
       <View style={{flexDirection:"row"}}>
       <View style={styles.bt1}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Events")} 
  
        name="emoji-events" size={50} color="#022658" backgroundColor={"#DBF9DB"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Events</Text>
      </View>
      <View style={styles.bt5}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Integrated Gyms")} 
  
        name="pin-drop" size={50} color="#022658" backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16}}>Integrated Gyms</Text>
      </View>
      
      <View style={styles.bt6}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Club packages")} 
  
        name="local-offer" size={50} color="#022658" backgroundColor={"#DBF9DB"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16}}> Club packages</Text>
      </View>
       </View>
       {/* 3rd row */}
       <View style={{flexDirection:"row"}}>
      <View style={styles.bt7}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Estore packages")} 
  
        name="local-activity" size={50} color="#022658" backgroundColor={"#DBF9DB"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Estore packages</Text>
      </View>
      <View style={styles.bt8}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Membership")} 
  
        name="style" size={55} color="#022658"  backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}> Member- ship</Text>
      </View>
      <View style={styles.bt8}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Wallet")} 
  
        name="local-atm" size={50} color="#022658" backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Wallet</Text>
      </View>
       </View>
       {/* 4th row */}
       <View style={{flexDirection:"row"}}>
      {/* <View style={styles.bt1}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Events")} 
  
        name="emoji-events" size={50} color="white" backgroundColor={"grey"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Events</Text>
      </View> */}
      <View style={{marginLeft:30,marginTop:20}}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("FAQs")} 
  
        name="sms" size={50} color="#022658"  marginLeft={5} backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>FAQs</Text>
      </View>
      <View style={styles.bt8}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("purchase Screen")} 
  
        name="shopping-cart" size={55} color="#022658"  backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>E-Cart</Text>
      </View>
      <View style={styles.bt8}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Profile")} 
  
        name="account-circle" size={50} color="#022658" backgroundColor={"#DBF9DB"}></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Account</Text>
      </View>
    
    
       </View>
       <View style={{flexDirection:"row"}}>
      <View style={styles.bt7}>
    <Icon.Button
    
    onPress={()=>navigation.navigate("Terms and Conditions")} 
  
        name="gavel" size={50} color="#022658" backgroundColor={"#DBF9DB"} ></Icon.Button>
      <Text style={{color:"black",fontWeight:"bold",fontSize:16,textAlign:"center"}}>Terms and Conditions</Text>
      </View>
      </View>
       
</ScrollView>
    </View>
    </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  bt1:{
  width:70,
  marginLeft:30,
  marginTop:20
  },
  bt2:{
    width:70,
    marginLeft:60,
    marginTop:20
    },
    bt3:{
      width:70,
      marginLeft:60,
      marginTop:20
      },
      bt4:{
        width:70,
        marginLeft:30,
        marginTop:20
        },
        bt5:{
          width:70,
          marginLeft:60,
          marginTop:20
          },
          bt6:{
            width:70,
            marginLeft:60,
            marginTop:20
            },
            bt7:{
              width:70,
              marginLeft:30,
              marginTop:20
              },
              bt8:{
                width:72,
                marginLeft:60,
                marginTop:20
                },
                bt9:{
                  width:70,
                  marginLeft:50,
                  marginTop:20,
                  },
                  header:{
                    padding:10,
                    marginLeft:0,
                    flexDirection:"row",
                    backgroundColor:"#022658" ,  
                    borderTopLeftRadius:20,
                    borderBottomLeftRadius:20,
                    borderTopRightRadius:20,
                    borderBottomRightRadius:20,
                     }
})
export default Homescrn;