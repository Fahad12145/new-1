import React from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Button}from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Estorepackages=({navigation})=>
{
  return(
    <View>
      <ScrollView >
      <View style={ styles.header}> 

<Text  style={ styles.header}> Membership</Text>
    </View>
    <View>
      <Text style={{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        marginLeft:120,
        fontWeight:"bold",
        color:"#FF2400",
        fontSize:23
      }} >
        *Important*</Text>
      <Text
      style={{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:4,
        marginTop:6,
        }} >
          Being a member of FitGo, we would like you to introduce to the FitGo Membership Plan. It includes FitGo-Discounts on purchasing both Club ( only if you're NOT the owner of any Club) and E-store Membership. Discount will be availed automatically according to the desired package.So just Don't Miss the Chance :) </Text>
          <Text style={{
            marginLeft:18,
            fontSize:18,
            fontWeight:"bold",
            marginTop:7,
            color:"#1B6ADF"
          }} >
            Without any Further Due,Click down to avail </Text>
    </View>
    <View style={{flexDirection:"column"}}>
      <View style={{
        height:140,
        backgroundColor:'#F0FFFF',
        flexDirection:"column",
        marginTop:20}}>
        <Text style={styles.text}> FitGo-Membership </Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:15,
          fontWeight:"bold",
          marginLeft:10,
          marginTop:2
        }}> Credit: Free of Cost (only when you subscribe for the first time)</Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2 }}> Validity: 1 Month</Text>
    <Icon.Button 
     style={{
      
      marginLeft:300,
      marginTop:2}}
       onPress={()=>{} }
     name="fast-forward" 
     size={22} backgroundColor={"#F0FFFF"}  color={"#1B6ADF"} />
      </View>
      
    </View>
    </ScrollView>
    

    </View>
    )
}

const styles =StyleSheet.create({
header:{
color:"white",
fontSize:30,
paddingBottom:10,
paddingTop:10,
fontWeight:'bold',
alignItems:"center",
backgroundColor:"#022658",
padding:20

},
text:{
  fontSize:33,
  fontWeight:"bold",
  color:"#022658",
  marginLeft:49
}
})

export default Estorepackages;