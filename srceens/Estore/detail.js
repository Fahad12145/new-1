import React, { useState } from "react";
import { View,Text, StatusBar,SafeAreaView ,StyleSheet,TouchableOpacity,Image} from "react-native";
import Colors from "./Colors"
import Icon from "@expo/vector-icons/MaterialIcons";
import NumericInput from "react-native-numeric-input";
// import foods from "../containers/products";
// import { styleProps } from "react-native/dist/cjs/modules/forwardedProps";

const DetailsScreen=({navigation,route})=>{

    const foods=route.params;

const [value, setvalue]= useState(0);

    // state={
    //     value:0
    // }
    // incrementvalue=()=>{
    //     this.state({
    //     value:this.state.value+ 1
    //     })
    //     console.log ("value"+(this.state.value +1))
    // }
    // decrementvalue=()=>{
    //     this.state({
    //     value:this.state.value- 1
    //     })
    //     console.log ("value"+(this.state.value -1))
    // }
    // // console.log(food);
 
    return(
         <SafeAreaView style={{flex:1,backgroundColor:Colors.white,}}>
             <View style={style.header}>
             <Icon name="shopping-cart" size={28}/>
           </View>
           <View style={style.imageContainer}>
            <Image source={foods.img} style = {{resizeMode:'contain',flex:1}} />
           </View>
           <View  style={style.detailContainer}>
              <View style={{marginTop:3,
                flexDirection:'row',
                alignItems:'flex-end'
                }}>
                <View style={style.line}/>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Best Choice</Text>
              </View>
              <View style={{
                marginLeft:20, 
                marginTop:20,
                flexDirection:'row',
               justifyContent:'space-between',
                alignItems:'center'
                }}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{foods.name}</Text>
                    <View style={style.priceTag}>
                        <Text style={{
                             marginLeft:3,
                             fontSize:14,
                             fontWeight:'bold',
                             color:"white"}}>Rs.{foods.price}/-</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:20,marginTop:10}}>
                       <Text style={{fontSize:20, fontWeight:"bold"}}>
                        About
                       </Text>
                       <Text style={{color:"grey",lineHeight:22,marginTop:10}}>
                        {foods.about}
                        </Text>
                        <View style={{
                            marginTop:20,
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',    
                            }}>
                                <StatusBar style="auto"/>
                              
                                <NumericInput 
                                value={value}
                                totalHeight={30}
                                totalWidth={140}
                                iconSize={25}
                                step={1}
                                maxValue={5}
                                minValue={1}
                                borderColor={Colors.green}
                                rounded
                                textColor={"black"}
                                iconStyle={{color:"white"}}
                                rightButtonBackgroundColor={Colors.green}
                                leftButtonBackgroundColor={Colors.green}
                                />


                            </View>
                            <View style={style.buyBtn}>
                         <TouchableOpacity onPress={()=>navigation.navigate("purchase Screen")}>
                                    <Icon name="shopping-cart" size={18} color="white" alignItems="center" justifyContent="center"/>
                                <Text style={{
                                    color:"white",
                                    fontSize:18,
                                    fontWeight:"bold"
                                    }}>
                                        {foods.isAvailable ? 'Add to Cart' : 'Not Available'}
                                        </Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                </View>
           </View>
         </SafeAreaView>
    );                    

};
const style = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:20,
        marginLeft:270,
        flexDirection:'row',
        justifyContent:'center',
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    detailContainer:{
        flex:0.55,
        backgroundColor:Colors.light,
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:20,
        marginTop:30,
        paddingTop:30
    },
    line:{
        width:35,
        height:2,
        backgroundColor:"black",
        marginBottom:5,
        marginRight:3,
        marginLeft:2,
        marginTop:5

    },
    priceTag:{
        backgroundColor:Colors.green,
        width:65,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:'center'
    },
    borderBtn:{
        borderColor:"grey",
        borderWidth:1,
        borderRadius:5,
        height:30,
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    borderBtnTxt:{
        fontSize:24,
        fontWeight:"bold"
    },
    buyBtn:{
        width:120,
        height:40,
        backgroundColor:Colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    }
})
export default DetailsScreen;