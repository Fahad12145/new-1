
import React,{useState} from "react";
import {View,StyleSheet, Image,SafeAreaView,TouchableOpacity ,ScrollView} from "react-native";
import {Title,Caption,Text,TouchableRipple } from "react-native-paper";
import Icon  from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from "@react-navigation/native";


const Profile = ({navigation}) => {

  const route=useRoute();

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








return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
        <Icon.Button 
        name="edit" size={20}
        marginLeft={10}
        alignItems="flex-end"
        backgroundColor="#fff"
        color={"#000"}
        onPress={()=>navigation.navigate("EditProfile")} />
        </View>

        <View style={styles.userInfoSection}>
         <View style={{flexDirection:"row",marginTop:15}}>
     
<TouchableOpacity style={{backgroundColor:"blue",Width:100,height:100,marginLeft:10,marginRight:10,marginTop:10,borderRadius:40,height:30,width:30}} onPress={pickImage}>
{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
<Text style={styles.pictures}>Image</Text></TouchableOpacity>
            <View style={{marginLeft:15 , marginTop:10}}>
                <Title style={styles.title}>
                Account ID :00012
                </Title>
                <Caption style={styles.caption}>
                   fz FitGo
                </Caption>
            </View>
         </View>
        </View>

        <View style={styles.userInfoSection}>
             <View style={styles.row}>
                <Icon name="phone" color={"#777777"} size={20} />
              <Text style={{color:"#777777", marginLeft:10}}>
               gfhgfj
               </Text> 
             </View>
             <View style={styles.row}>
                <Icon name="email" color={"#777777"} size={20} />
              <Text style={{color:"#777777", marginLeft:10}}>
                www@gmail.com
              </Text>
             </View>
             <View style={styles.row}>
                <Icon name="pin-drop" color={"#777777"} size={20} />
              <Text style={{color:"#777777", marginLeft:10}}>
                Address
              </Text>
             </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox ,{
            borderRightColor:"#dddddd",
            borderRightWidth:1
          }]}>
            <Title>Rs.1400/-</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title >Diamond</Title>
            <Caption >Current Membership</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}} > 
            <View style={styles.menuItem}>
                <Icon name="favorite-outline" size={25} color={"#777777"}/>
                <Text style={styles.menuItemText}>Your Favourites</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}} > 
            <View style={styles.menuItem}>
                <Icon name="credit-card" size={25} color={"#777777"}/>
                <Text style={styles.menuItemText}>Payments</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}} > 
            <View style={styles.menuItem}>
                <Icon name="perm-identity" size={25} color={"#777777"}/>
                <Text style={styles.menuItemText}>Support</Text>   
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}} > 
            <View style={styles.menuItem}>
                <Icon name="settings" size={25} color={"#777777"}/>
                <Text style={styles.menuItemText}>Settings</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}} > 
            <View style={styles.menuItem}>
                <Icon name="share" size={25} color={"#777777"}/>
                <Text style={styles.menuItemText}>Share this App with Your Friends</Text>
                </View>
            </TouchableRipple>
        </View>
        </ScrollView>
    </SafeAreaView>
);
};

export default Profile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0
    },
    header:{
        marginLeft:0,
        flexDirection:"row",
        backgroundColor:"black",
        padding:18
      },
    userInfoSection:{
        paddingHorizontal:30,
        marginBottom:15
    },
    title:{
        fontSize:24,
        fontWeight:"bold"
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500'
    },
    row:{
        flexDirection:"row",
        marginBottom:3
    },
    infoBoxWrapper:{
        borderBottomColor:"#dddddd",
        borderBottomWidth:1,
        borderTopColor:"#dddddd",
        borderTopWidth:1,
        flexDirection:"row",
        height:100
    },
    infoBox:{
        width:'50%',
        alignItems:"center",
        justifyContent:"center"
    },
    menuWrapper:{
        marginTop:10
    },
    menuItem:{
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal:30,
        
    },
    menuItemText:{
        color:"#777777",
        marginLeft:10,
        marginRight:10,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },
})