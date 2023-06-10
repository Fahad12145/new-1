import React from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Button}from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Clubpackages=({navigation})=>
{
  return(
    <View>
      <ScrollView >
      <View style={ styles.header}> 

<Text  style={ styles.header}> FitGo Club Packages</Text>
    </View>
    <View>
    <Text style={{
      fontSize:18,
      alignItems:"center",
      justifyContent:"center",
      marginLeft:30,
      marginTop:2
      }}>
      *Purchase your respective Membership*
    </Text>
    </View>
    <View style={{flexDirection:"column"}}>
      <View style={{
        height:140,
        backgroundColor:'#ECFFDC',
        flexDirection:"column",
        marginTop:20}}>
        <Text style={styles.text}> Basic </Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2
        }}> Credit: PKR.2000/-</Text>
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
     size={22} backgroundColor={"#ECFFDC"}  color={"#1B6ADF"} />
      </View>
      
    </View>



    <View style={{flexDirection:"column"}}>
      <View style={{
        height:140,
        backgroundColor:'#AFE1AF',
        flexDirection:"column",
        marginTop:20}}>
        <Text style={styles.text}> Gold </Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2
        }}> Credit: PKR.5500/-</Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2 }}> Validity: 3 Months</Text>
    <Icon.Button 
     style={{
      
      marginLeft:300,
      marginTop:2}}
       onPress={()=>{}}
     name="fast-forward" 
     size={22} backgroundColor={"#AFE1AF"}  color={"#1B6ADF"} />
      </View>
      
    </View>




    <View style={{flexDirection:"column"}}>
      <View style={{
        height:140,
        backgroundColor:'#90EE90',
        flexDirection:"column",
        marginTop:20}}>
        <Text style={styles.text}> Premium </Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2
        }}> Credit: PKR.9900/-</Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2 }}> Validity: 6 Months</Text>
    <Icon.Button 
     style={{
      marginLeft:300,
      marginTop:2}}
       onPress={()=>{}}
     name="fast-forward" 
     size={22} backgroundColor={"#90EE90"}  color={"#1B6ADF"} />
      </View>
      
    </View>




    <View style={{flexDirection:"column"}}>
      <View style={{
        height:140,
        backgroundColor:'#50C878',
        flexDirection:"column",
        marginTop:20}}>
        <Text style={styles.text}> Diamond </Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2
        }}> Credit: PKR.13999/-</Text>
        <Text style={{
          color:"#1B6ADF",
          fontSize:22,
          fontWeight:"bold",
          marginLeft:90,
          marginTop:2 }}> Validity: 1 Year</Text>
    <Icon.Button 
     style={{
      marginLeft:300,
      marginTop:2}}
       onPress={()=>{}}
     name="fast-forward" 
     size={22} backgroundColor={"#50C878"}  color={"#1B6ADF"} />
      </View>
      
    </View>
    

    
      </ScrollView>
    

    </View>
    )
}

const styles =StyleSheet.create({
header:{
color:"white",
fontSize:22,
paddingBottom:10,
paddingTop:10,
fontWeight:'bold',
alignItems:"center",
backgroundColor:"#022658",
padding:30

},
text:{
  fontSize:33,
  fontWeight:"bold",
  color:"#022658",
}
})

export default Clubpackages;