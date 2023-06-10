import React from "react";
import {View,Text,StyleSheet} from "react-native"
import { TouchableOpacity } from "react-native";
const Wallet=({navigation})=>{
return(
    <View><Text style={styles.txt}>Current Balance    0.00</Text>
    <View style={styles.btns}><TouchableOpacity
     onPress={()=>navigation.navigate("Deposit")}>
        <Text style={{fontSize:30,color:"green",}}>Deposit</Text>
        </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Withdraw")}>
        <Text style={{fontSize:30,color:"purple",marginLeft:30}}>Withdraw</Text>
    </TouchableOpacity>
    </View>
    </View>
)
}
const styles=StyleSheet.create({
    txt:{
        padding:50,
        fontSize:30
    },
    btns:{
        marginLeft:39,
        padding:30,
        flexDirection:"row"
    }
})
export default Wallet;