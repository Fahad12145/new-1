import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView} from "react-native"
import Checkbox from 'expo-checkbox';
import { ImageBackground } from "react-native";
import { RadioButton } from "react-native-paper";


const Signupp=({navigation})=>
{
    const[agree,setagree]=useState(false);
    const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");
    const[username,setusername]=useState("");
    const[cnic,setcnic]=useState("");
    const[gmail,setgmail]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("")
    const [checked,setchecked]=useState("second");
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [ispasswordVisible, setisPasswordVisible] = useState(true);


    return(
        <ScrollView>
        <View>
           
            {/* <ImageBackground  style={styles.bgimage}
            source={require("../srceens/Newpngs/greysignup.jpg")}> */}
            <Text style={styles.header}>FitGo Sign Up</Text>
            <Text style={styles.descrip}>If you're new then please signup</Text>

            <View style={{flexDirection:"row"}}>
                <View style={{marginLeft:30,marginTop:20}}>
                    <Text style={{color:"#022658"}}>Client</Text>
                <RadioButton  
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
       onPress={()=>navigation.navigate("SignUp")}/>
                </View>
                
       <View  style={{marginLeft:30,marginTop:20}}>
        <Text style={{color:"#022658"}}>Owner
            </Text><RadioButton 
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                 value="second"
        
        onPress={()=>navigation.navigate("Signupp")}/>
        </View>
                
       
            </View>
            <View>
                <Text style={styles.names}>Firstname</Text>
                <TextInput
                placeholder="Firstname"
                placeholderTextColor="#4682B4"
                value={fname}
                onChangeText={(actualdata)=>setfname(actualdata)}
                style={styles.input}/>
            </View>
            <View>
                <Text style={styles.names}>Lastname</Text>
                <TextInput
                placeholder="Lastname"
                placeholderTextColor="#4682B4"
                value={lname}
                onChangeText={(actualdata)=>setlname(actualdata)}
                style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.names}>Username</Text>
                <TextInput
                placeholder="Username"
                placeholderTextColor="#4682B4"
                value={username}
                onChangeText={(actualdata)=> setusername(actualdata)}
                style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.names}>Gmail</Text>
                <TextInput
                placeholder="www@gmail.com"
                placeholderTextColor="#4682B4"
                value={gmail}
                onChangeText={(actualdata)=>setgmail(actualdata)}
                style={styles.input}/>
            </View>
            <View>
                <Text style={styles.names}>CNIC</Text>
                <TextInput 
                placeholder="0000-0000000-0"
                placeholderTextColor="#4682B4"
                value={cnic}
                onChangeText={(actualdata)=>setcnic(actualdata)}
                style={styles.input}/>
            </View>
            <View>
                <Text style={styles.names}> CreatePassword</Text>
                <TextInput 
                placeholder=" password"
                placeholderTextColor="#4682B4"
                secureTextEntry={passwordVisible}
                value={password}
                onChangeText={(actualdata)=>setpassword(actualdata)}
                style={styles.input}/>
            </View>
            <View>
    <TouchableOpacity style={{marginLeft:260}}
     onPress={() => { passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true) }}
    ><Text>Show Password</Text></TouchableOpacity>
  </View>
            <View>
                <Text style={styles.names}>Confirm Password</Text>
                <TextInput 
                placeholder="Confirm Password"
                placeholderTextColor="#4682B4" 
                secureTextEntry={ispasswordVisible}
                value={cpassword}
                onChangeText={(actualdata)=>setcpassword(actualdata)}
                style={styles.input}/>
            </View>
            <View>
    <TouchableOpacity style={{marginLeft:260}}
     onPress={() => { ispasswordVisible ? setisPasswordVisible(false) : setisPasswordVisible(true) }}
    ><Text>Show Password</Text></TouchableOpacity>
  </View>
  <View style={{marginTop:20}}>
  <Text style={{fontSize:16,textAlign:"center",fontWeight:'bold',color:"#4682B4"}}>If you're already a member then      
  <TouchableOpacity style={{color:"#022658",marginRight:57,marginTop:10}}
   onPress={()=>navigation.navigate("Login")} >
    <Text style={{color:"#022658",fontWeight:"bold",fontSize:18}} >Login</Text></TouchableOpacity>
    </Text>
  </View>
           
            <View style={{flexDirection:"row",marginTop:20}}> 
    <Checkbox
    style={styles.Checkbox}
        value={agree}
        onValueChange={()=>setagree(!agree)}
          color={  agree ? "#022658" :  undefined }
         />
         <Text style={{textAlign:"center",padding:2,color:"#022658"}}> I have read and agree with the <TouchableOpacity onPress={()=>navigation.navigate("Terms and Conditions")} style={{
         
         
         marginTop:10,
         marginLeft:90
       }}>
         <Text 
         style={{ color:"#022658",
         fontWeight:"bold"}}>
          terms and conditions</Text>
       
       </TouchableOpacity></Text>
         </View>
         <View>
            <TouchableOpacity style={[styles.btn,
             {
                backgroundColor: agree ? "#4682B4": "grey",
                alignItems:"center",
                marginTop:20,
                marginLeft:70,
                marginRight:70,
                padding:5
              },
            ]}
              disabled={!agree}
              onPress={()=>{ 
                console.log("hello");
              fetch("http://192.168.10.3:5002/student", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  
                },
                body:JSON.stringify({
                  Firstname:fname,
                  Lastname:lname,
                  Username:username,
                  CNIC:cnic,
                  Gmail:gmail,
                  Password:password,
                  CPassword:cpassword
                })
              }
          ).then((response) => response.json())
          .then((data) => {console.log(data); 
            if (data.data=="yes")
            {
            navigation.navigate("Homescreen")
          }
          })
          
        }
              }
             
            // onPress={()=>navigation.navigate("Home")}
            >
                <Text style={styles.btntxt}>SignUp</Text>
            </TouchableOpacity>
         </View>
         {/* </ImageBackground> */}
         
         </View>
         </ScrollView>
    )
}

const styles=StyleSheet.create(
{
    header:{
     textAlign:"center",
     color:"#022658",
     fontSize:35,
     fontWeight:'bold',
     marginTop:20
    },
    descrip:{
       textAlign:"center",
       fontSize:16,
       fontWeight:'bold',
       color:"#4682B4"
    },
    names:{
        padding:1,
        textAlign:"left",
        fontSize:20,
        marginLeft:20,
        color:"#022658"
    },
    input:{
        textAlign:"center",
        borderWidth:2,
        borderRadius:50,
        alignItems:"center",
        marginLeft:20,
        marginRight:20,
        borderColor:"#022658",
        color:"#4682B4"
    },
    btn:{
    
       backgroundColor:"white",
       marginLeft:30,
       marginRight:30

    },
    btntxt:{
        padding:20,
        color:"#022658",
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    bgimage:{
        position:"relative",
        height:750,
        opacity:1

    },Checkbox:{
        marginLeft:26,
        borderColor:"#022658"
    }
})

 export default (Signupp); 
 