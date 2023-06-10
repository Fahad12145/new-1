import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity}from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Events=()=>
{
  const data=[{
    Id:'11',
    postTitle:'Heavy weight',
    postCity:'SQP',
    username:'  Admin  --  ',
    notification:'  offering a New E-store Discount',
    time:'  3:00 PM',
    // postimg:'https://images.app.goo.gl/5hiFzTym8Lq3f4ok9.png'
  },
  {
    Id:'12',
    postTitle:'Gym Acessories',
    postCity:'SQP',
    username:'  Admin  -- ',
    notification:'   offering you New Discount upto 25% ',
    time:'  10:00 AM',
    // postimg:'https://images.app.goo.gl/5hiFzTym8Lq3f4ok9.png'
  },
  {
    Id:'13',
    postTitle:'Cloth Arrival',
    postCity:'SQP',
    username:'  Admin  --  ',
    notification:'  offering you New Discount upto 15% ',
    time:'  3:00 PM',
    // postimg:'https://images.app.goo.gl/5hiFzTym8Lq3f4ok9.png'
  },
  {
    Id:'14',
    postTitle:'Best Weight Lifter',
    postCity:' SQP',
    username:'  Admin  --  ',
    notification:'   organizing a Weight lifter Competition',
    time:'  01:00 PM',
    // postimg:'https://images.app.goo.gl/5hiFzTym8Lq3f4ok9.png'
  },
  {
    Id:'15',
    postTitle:'Best gym Award',
    postCity:'SQP',
    username:'  Admin  --  ',
    notification:'   giving New Award Title of Best GYM',
    time:'  12:00 AM',
    // postimg:'https://images.app.goo.gl/5hiFzTym8Lq3f4ok9.png'
  }
  ]
  return(
    <View>
       <FlatList
       data={data}
       keyExtractor={(item,index)=>{return index.toString()}}
       renderItem={ ({item})=>{
        return(
          <View>
          <View style={styles.header}>
          <Text style={{
        color:"#022658",
        fontSize:16,
        marginTop:10,
        fontWeight:'bold'
        }}> Notification Alert !</Text>
        </View>
          <View style={styles.container}>
         
             <Icon name="account-box" size={30} color={"#022658"} onPress={()=>{}} />
            
             <TouchableOpacity>
              <View style={{flexDirection:"row"}}>
                
                <Text style={{color:"#1B6ADF", fontSize:15}}>{item.username}</Text>
                <Text style={{color:"#1B6ADF"}}>{item.time}</Text>
                
              </View>
              
                  <Text style={{color:"#1B6ADF"}}>{item.notification}</Text>
                  </TouchableOpacity>
          
            
          </View>
          </View>
        );
       }}
      />
       </View>
    
    )
}
export default Events;
const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:'row',

  // marginLeft:7,
  width:'100%',
  height:'100%',
  padding:15,
  backgroundColor:"white"
},
headerleft:{
  width:'100%',
  height:'100%',
  borderRadius:50
},
imgView:{
  width:40,
  height:40,
  borderRadius:40/2,
  marginLeft:15,
  borderColor:"#022658"
},
header:{
  flexDirection:"row",
  padding:10
}
});