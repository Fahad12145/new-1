import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput, Alert} from "react-native"
;
const Jazzcash=()=>{
    const [number,setnumber]=useState("")
    const [amount,setamount]=useState("")

const Press=()=>{
    Alert.alert("kaam hogya smmjho")
}



return(
    <View style={styles.container} >
    <Text style={styles.header}>Withdraw through Jazzcash</Text>
    <View>
    <Text>Enter your number</Text>
    <TextInput
    style={{borderWidth:2,alignItems:"center",marginLeft:20,marginRight:20,paddingLeft:20}}
    placeholder="Enter your number"
    secureTextEntry={true} 
    value={number}
    onChangeText={(actualdata)=>setnumber(actualdata)}
    />
    <Text> Enter Amount</Text>
    <TextInput
    style={{borderWidth:2,alignItems:"center",marginLeft:20,marginRight:20,paddingLeft:20}}
    secureTextEntry={true} 
    value={amount}
    onChangeText={(actualdata)=>setamount(actualdata)}
    placeholder="Rs_0000"/>
    </View>
   

    <View>
        <TouchableOpacity 
        style={{marginLeft:200,borderWidth:2,marginTop:20,borderColor:"grey"}}
        onPress={Press}
        ><Text>Submit</Text></TouchableOpacity>
    </View>
</View>
)
}
const styles=StyleSheet.create(
{
    container:{
        alignItems:"center",
        
       
    },
    header:{
        fontSize:30,
        padding:30

    }
})
export default Jazzcash;