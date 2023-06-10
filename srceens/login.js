import React, { useState } from "react";
import {Text,View,StyleSheet,TextInput,TouchableOpacity}from "react-native"
import { RadioButton } from "react-native-paper";
import Checkbox from 'expo-checkbox';
// import { ImageBackground } from "react-native";
// import Icon from "@expo/vector-icons/MaterialIcons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Login=({navigation})=>
{
  const[agree,setagree]=useState(false);
  const[username,setusername]=useState("");
  const[password,setpassword]=useState("");
  const[checked,setchecked] =useState("first");
  const [passwordVisible, setPasswordVisible] = useState(true);
  
  return(
    <View>
      <View>
    <View style={styles.container}><Text  style={styles.header}>FitGo-Login</Text></View>
    <Text style={styles.descrip}> If you're already a member, please Login</Text>
    <View style={{flexDirection:"row"}}>
                <View style={{marginLeft:30,marginTop:20}}>
                <Text style={{color:"#022658"}}>Client</Text>
                <RadioButton  value="first"
                 status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => navigation.navigate("Login")}/>
                </View>
              <View  style={{marginLeft:30,marginTop:20}}>
                <Text style={{color:"#022658"}}>
                    Owner
                </Text>
              <RadioButton  value="second"
                 status={ checked === 'second' ? 'checked' : 'unchecked' }
       onPress={()=>navigation.navigate("Loginn")}/>
              </View>
                
            </View>
    <View>
        <Text  style={styles.Lables}>Username</Text>
        <TextInput 
        style={styles.place}
        placeholder="Username"
        placeholderTextColor="#4682B4"
        value={username}
        name={username}
        onChangeText={(actualdata)=>setusername(actualdata)}
        />
    </View>
    <View>
        <Text style={styles.Lables}>Password</Text>
        <TextInput 
         secureTextEntry={passwordVisible} 
        // right={
        //   <TextInput.Icon
        //   name={() => <MaterialIcons name={passwordVisible ? "eye-off" : "eye"} size={28} color={COLORS.black} />} // where <Icon /> is any component from vector-icons or anything else
        //                   onPress={() => { [passwordVisible] ? setPasswordVisible(false) : setPasswordVisible(true) }}
        //   />
        // }

        placeholder="Password"
        placeholderTextColor="#4682B4"
        style={styles.place}
        name={password}
        value={password}  
        onChangeText={(actualdata)=>setpassword(actualdata)}
        />
       
<View style={{flexDirection:"row"}}>
<TouchableOpacity 
  onPress={()=>navigation.navigate("changepass")}
   style={{marginLeft:30,fontSize:15}}><Text>forgot password</Text></TouchableOpacity>
  <View>
    <TouchableOpacity style={{marginLeft:150}}
     onPress={() => { passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true) }}
    ><Text>Show Password</Text></TouchableOpacity>
  </View>
</View>





        <View style={{flexDirection:"row",padding:30}}>
        <Checkbox
        style={styles.Checkbox}
        value={agree}
        onValueChange={()=>setagree(!agree)}
          color={agree ? "#022658":undefined}
         />
        
         <Text style={{textAlign:"center",color:"#4682B4" }}> I have read and agree with the
         <TouchableOpacity onPress={()=>navigation.navigate("Terms and Conditions")} style={{
         
         
         marginTop:10,
         marginLeft:90
       }}>
         <Text 
         style={{ color:"#022658",
         fontWeight:"bold",marginLeft:2}}>
            terms and conditions</Text>
       
       </TouchableOpacity></Text>
         </View>
        <Text  style={styles.descrip2}>If  you are new then <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} ><Text style={{color:"#022658",marginTop:10,fontSize:16 , fontWeight:"bold", flexDirection:'row'}}>Signup</Text></TouchableOpacity> </Text>
    </View>

    <View>
      <TouchableOpacity style={[styles.buttonstyle, 
      {
        backgroundColor: agree ? "#4682B4": "grey",
        borderColor:"#4682B4",
        alignItems:"center",
        marginLeft:70,
        marginRight:70,
        padding:20,
      
      },
    ]}
      disabled={!agree}
      onPress={()=>{ 
        // console.log("hello");
      fetch("http://192.168.10.3:5002/student", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          
        },
        body:JSON.stringify({
          Username:username,
          Password:password
        })
      }
  ).then((response) => response.json())
  .then((data) => {console.log(data); 
    if (data.data=="yes")
    {
    navigation.navigate("Home")
  }
  })
  
}
      }
      // onPress={()=>{navigation.navigate("Home")}}
       >  
      <Text style={styles.txt2}>Login</Text>
      </TouchableOpacity>
    </View>
    {/* </ImageBackground> */}
    </View>
    </View>
  )
  };
const styles=StyleSheet.create({
  container:{
    paddingBottom:1,
    textAlign:"center",
    
    
  },
  header:{
    // backgroundColor:"#CFECEC",
    textAlign:"center",
    color:"#022658",
    fontSize:35,
    fontWeight:'bold',
    marginTop:30,
    // marginBottom:20,
    borderRadius:30,
    paddingTop:0,
    paddingBottom:0,
  },
  descrip:{
    color:"#4682B4",
    // backgroundColor:"white",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16
  },
  descrip2:{
    fontSize:16,
    textAlign:"center",
    color:"#4682B4",
    marginBottom:10,
    fontWeight:"bold"
  },

Lables:{
  textAlign:"center",
  padding:10,
  fontSize:22,
  color:"#022658",
  fontWeight:"bold"
},
place:{
textAlign:"center",
  borderRadius:50,
  borderWidth:3,
  marginLeft:20,
  marginRight:20,
  color:"#4682B4",
  borderColor:"#022658",

},
link:{
  textAlign:"justify",
  fontSize:22,
  color:"#151B54",
},
btn:{
marginLeft:20
},
txt2:{
  color:"#022658",
  textAlign:"center",
  fontWeight:"bold",
  fontSize:26
},
bgimage:{
  position:"relative",
  height:750,
  opacity:1
},
Checkbox:{
marginLeft:25,
borderColor:"#022658"
}
})
export default Login;