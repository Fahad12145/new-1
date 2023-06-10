import React, { useState } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image, Alert,ScrollView} from "react-native"
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from "@react-native-picker/picker";
// import { ImageBrowser } from 'expo-image-picker-multiple';

const Createportfolio=()=>
{
    const [image, setImage] = useState(null);
  
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    const[agree,setagree]=useState(false);
    const[clubname,setclubname]=useState("");
    const[ownername,setownername]=useState("");
    const[address,setaddress]=useState("");
    const[cnic,setcnic]=useState("");
    const[gmail,setgmail]=useState("");
    const[descrip,setdescrip]=useState("");
    const[pic,setpic]=useState("");
    

return(
    <ScrollView>
        <View>
            <Text style={styles.header}>Create your portfolio</Text>
        <View style={styles.cont}>
            <View>
                <Text style={styles.names}>Club/Gym name</Text>
                <TextInput
                placeholder="Clubname"
                value={clubname}
                onChangeText={(actualdata)=>setclubname(actualdata)}
                style={styles.input}/>
            </View>
            <View >
                <Text style={styles.names}>Owner name</Text>
                <TextInput
                placeholder="ownername"
                value={ownername}
                onChangeText={(actualdata)=>setownername(actualdata)}
                style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.names}>Club Address</Text>
                <TextInput
                placeholder="Address"
                value={address}
                onChangeText={(actualdata)=> setaddress(actualdata)}
                style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.names}>Gmail</Text>
                <TextInput
                placeholder="www@gmail.com"
                value={gmail}
                onChangeText={(actualdata)=>setgmail(actualdata)}
                style={styles.input}/>
            </View>
            <View>
                <Text style={styles.names}>CNIC</Text>
                <TextInput 
                placeholder="00000-0000000-0"
                value={cnic}
                onChangeText={(actualdata)=>setcnic(actualdata)}
                style={styles.input}/>
            </View>
            <View>
                <Text style={styles.names}>
                    Attch Your Pictures
                </Text>
<TouchableOpacity style={{backgroundColor:"#022658",marginLeft:20,marginRight:20,marginTop:10,borderRadius:20}} onPress={pickImage}>
{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
<Text style={styles.pictures}>Attach your pictures</Text></TouchableOpacity>
            </View>    
            <Text style={styles.names}>Select Category</Text>
            <View style={styles.picker}>
             
              <Picker selectedValue={pic}
             style={{marginLeft:20}}
              onValueChange={(actualdata)=>setpic(actualdata)}
              >
                <Picker.Item label="AC" value="AC"/>
                <Picker.Item label="Non AC "  value="Non AC "/>
                <Picker.Item label="AC with Electric tredmill"  value="AC with Electric tredmill"/>
              </Picker>
            </View>
<View>
    <Text style={styles.names}> Describe Yourself</Text>
    <TextInput 
    style={{ borderBottomWidth: 1,marginLeft:20,marginRight:20,marginTop:5,borderColor:"black",borderWidth:2,padding:40}}
    editable
    value={descrip}
    onChangeText={(actualdata)=> setdescrip(actualdata)}
    multiline
    maxLength={500}
    placeholder="Describe  Yourself in detail"/>
</View>


            <View style={{flexDirection:"row",marginTop:30}}> 
    <Checkbox
    style={styles.Checkbox}
        value={agree}
        onValueChange={()=>setagree(!agree)}
          color={  agree ? "#022658" :  undefined }
         />
         <Text style={{textAlign:"center",padding:5}}> I have read and agree with the terms and conditions</Text>
         </View>
         <View>
      <TouchableOpacity style={[styles.buttonstyle,
      {
        backgroundColor: agree ? "#022658": "grey",
        borderColor:"#022658",
        alignItems:"center",
        marginLeft:70,
        marginRight:70,
        padding:20,
        
      },
    ]}
      disabled={!agree}
      onPress={()=>{ console.log("hello");
      fetch("192.168.10.3:5004/student", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          
        },
        body:JSON.stringify({
          Clubname:clubname,
          Ownername:ownername,
          Address:address,
          Gmail:gmail,
          CNIC:cnic,
          Description:descrip

       
        })
      }
  ).then((response) => response.json())
  .then((data) => {console.log(data); 
   Alert.alert("Portfolio created")
  })
  
}
      }
     
      >  
      <Text style={{color:"white" ,fontSize:20 ,fontWeight:'bold'}}>
        create Portfolio
        </Text>
      </TouchableOpacity>
    </View>
            
            
         </View>
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
     fontWeight:'bold'
    },
    descrip:{
       textAlign:"center",
       fontSize:18
    },
    names:{
        padding:5,
        textAlign:"left",
        fontSize:20,
        marginLeft:20
    },
    input:{
        textAlign:"center",
        borderWidth:2,
        borderRadius:20,
        alignItems:"center",
        marginLeft:20,
        marginRight:20,
        borderColor:"#022658"
    },
    btn:{
    
       backgroundColor:"green",
       marginLeft:50,
       marginRight:50

    },
    btntxt:{
        padding:20,
        color:"white",
        textAlign:"center",
        fontSize:15,
        fontWeight:'bold'
    },
    Checkbox:{
        marginLeft:15,
        borderColor:"#022658"
    
    },
pictures:{
    alignItems:"center",
    padding:20,
    marginLeft:20,
    fontWeight:'bold',
    color:"white"
},
cont:{
    paddingTop:10
},
picker:{
  width:350,
  height:50,
  borderWidth:2,
  marginLeft:20,
  marginRight:20,
  borderColor:"#022658"
}
})

 export default Createportfolio; 