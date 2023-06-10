// import React from "react";
// import {View,Text,ScrollView}from "react-native"


// const Integratedgyms=({})=>
// {
//   return(
//     <View>
//       <ScrollView>
// <Text  style={{textAlign:"center",fontSize:25,marginTop:4}}>NO Club  is Registerred yet.</Text>
// <Text style={{marginTop:2, marginLeft:4,marginRight:4}}>When the clubs are regiseterd,you'll be able to choose desired gym (also you'll be able to go and do your routine as well as basic workout )   </Text>
    
// </ScrollView>
// </View>
//     )
// }
// export default Integratedgyms ;

import React, { useState } from "react";
import {View,Text,ScrollView,SafeAreaView,StyleSheet,Dimensions,FlatList,Image,TouchableOpacity}from "react-native"

const listTab=[
  {
    status:'All'
  },
  {
    status:'AC'
  },
  {
    status:'Non-AC'
  },
]
const data=[
  {
    name:'Star gym',
    status:'AC',
  },
  {
    name:'fit gym',
    status:'AC'
  },
  {
    name:'fitness gym',
    status:'Non-AC'
  },

  {
    name:'Pain n Gain',
    status:'AC'
  },
  {
    name:'Do it  gym',
    status:'Non-AC'
  },
  {
    name:'fitness freak gym',
    status:'Non-AC'
  },
  {
    name:'loose n gain gym',
    status:'Non-AC'
  },
  {
    name:'shape gym',
    status:'Non-AC'
  },
  {
    name:'Sun gym',
    status:'AC'
  },
  {
    name:'Moon gym',
    status:'Non-AC'
  },
  {
    name:'mars gym',
    status:'Non-AC'
  }
]
const Integratedgyms=()=>{

const [status,setStatus]=useState('All');
const [datalist, setDatalist]=useState(data);
const setstatusFilter= status=>{
  if (status !== 'All'){
    setDatalist([...data.filter(e => e.status ===  status)])
  } else{
    setDatalist(data)
  }
  setStatus(status)
}

const renderItem = ({item, index})=>{
  return(
    <View key={index} style={styles.itemContainer} >
      <View style={styles.itemLogo}>
        <Image 
        style={styles.itemImage}
        source={{uri:'https://media.istockphoto.com/photos/empty-gym-picture-id1132006407?b=1&k=20&m=1132006407&s=612x612&w=0&h=yuM0-g7YG76wCNOKxejD2aJvdF83hVWCtUUNAKx2Q2A='}}
       
        />
      </View>
      <View style={styles.itemBody}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <View style={[styles.itemStatus,
      {backgroundColor: item.status === 'AC' ? '#d8f9ff' : '#DBF9DB'}
      ]}>
        <Text>{item.status}</Text>
      </View>
    </View>
  );
}

const seperator=()=>{
  return(

<View style={{height:1,backgroundColor:"#f1f1f1"}}  />

  );
}
  return(
    
      <ScrollView>
<SafeAreaView style={styles.container}>
  <View style={styles.listTab}>
    {listTab.map(e =>(
      <TouchableOpacity 
      style={[styles.btnTab, status=== e.status && styles.btnTabActive]}
      onPress={()=> setstatusFilter(e.status)}
      >
      <Text style={[styles.textTab, status===e.status && styles.textTabActive]}>
        {e.status}
        </Text>
    </TouchableOpacity>
    ))}
    
  </View>
 <FlatList 
 data={datalist}
 keyExtractor={(e , i)=>i.toString()}
 renderItem={renderItem}
 ItemSeparatorComponent={seperator}
 />




{/* <Text  style={{textAlign:"center",fontSize:25,marginTop:4}}>NO Club  is Registerred yet.</Text>
<Text style={{marginTop:2, marginLeft:4,marginRight:4}}>When the clubs are regiseterd,you'll be able to choose desired gym (also you'll be able to go and do your routine as well as basic workout )   </Text>
     */}
     </SafeAreaView>
</ScrollView>
    )
}
export default Integratedgyms ;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:"center"
  },
  listTab:{
    marginBottom:20,
    marginTop:20,
    backgroundColor:"#fff",
   alignSelf:"center",
    flexDirection:"row"
  },
  btnTab:{
    width:Dimensions.get('window').width/3.5,
    flexDirection:"row",
    borderWidth:0.5,
    borderColor:"black",
    padding:10,
    justifyContent:"center"
  },
  textTab:{
    fontSize:16
  },
  btnTabActive:{
    backgroundColor:"#E6838D"
  },
  textTabActive:{
    color:"#fff"
  },
  itemContainer:{
    flexDirection:"row",
    paddingVertical:15
  },
  itemLogo:{
    padding:10,
  },
  itemImage:{
    width:50,
    height:50
  },
  itemBody:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:"center"
  },
  itemName:{
    fontSize:16,
    fontWeight:"bold"
  },
  itemStatus:{
    backgroundColor:"#DBF9DB",
    paddingHorizontal:25,
    justifyContent:"center",
    right:12 
  }
})
