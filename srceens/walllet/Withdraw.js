import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,} from "react-native"
const Withdraw=({navigation})=>{
return(
    <View style={styles.caption}>
    <Text >Select an option</Text>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <TouchableOpacity style={styles.bt1}
    onPress={()=>navigation.navigate("Easypaisa")}
    ><Text>
 Easypaisa
    </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.bt2}
onPress={()=>navigation.navigate("Jazzcash")}
><Text>
Jazzcash
    </Text>
</TouchableOpacity>
</View>
</View>
)
}
const styles=StyleSheet.create(
{
    caption:{
font:40,
alignItems:"center"

    },
    bt1:{
        width:100,
        height:50,
        borderWidth:1,
        borderColor:"green",
        backgroundColor:"white"
    },
    bt2:{
        width:100,
        height:50,
        borderWidth:1,
        borderColor:"red",
        backgroundColor:"grey"
    }

}
)
export default Withdraw;