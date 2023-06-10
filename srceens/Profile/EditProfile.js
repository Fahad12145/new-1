import React from "react";
import {View, Text,Stylesheet, TextInput,Button,TouchableOpacity,StyleSheet, SafeAreaView, Platform } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";

const EditProfile =()=>{

      renderInner = () =>(
        <View style={styles.panel}>
          <View style={{alignItems:'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose your profile Picture</Text>
           </View>
            <TouchableOpacity style={styles.panelButton} >
                <Text style={styles.panelButtonTitle} >Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} >
                <Text style={styles.panelButtonTitle} >Choose from Library </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={()=> this.bs.current.snapTo(0)} >
                <Text style={styles.panelButtonTitle} >Cancel</Text>
            </TouchableOpacity>
          </View>
    );
      renderHeader = () =>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}/>
            </View>
        </View>
    )
    
    bs= React.createRef();
    fall= new Animated.Value(1);
    return(
        <ScrollView>
        <View style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[330,0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <View style={{margin:20 }}>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>this.bs.current.snapTo(1)}>
                        <View style={{
                            height:100,
                            width:100,
                            borderRadius:15
                        }}>
                            <Avatar.Image
                            source={{
                                uri: "http://api.adorable.io/avatars/285/abott@adorable.png"}}
                            style={{
                                height:100,width:100,
                                justifyContent:"center",
                                alignItems:"center",
                            }}
                            imageStyle={{borderRadius:15
                            }}>
                               <View style={{
                                    flex:1,
                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                    <Icon name="camera-enhance" size={35} color="grey" style={{
                                        opacity:0.7,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor:"#fff",
                                        borderRadius:10
                                    }}/>
                                </View>
                            </Avatar.Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                    marginTop:10,
                    fontSize:18,
                    fontWeight:"bold"}}>
                        Fitgo User
                    </Text>
                </View>
                <View style={styles.action}>
                    <Icon name="account" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="First Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <Icon name="account" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="Last Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <Icon name="phone" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="Phone"
                    keyboardType="number-pad"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <Icon name="email" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <Icon name="map" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="Country/Region"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <View style={styles.action}>
                    <Icon name="pin" size={20}/>
                    <TextInput style={styles.textInput}
                    placeholder ="Current City"
                    placeholderTextColor="#666666"
                    autoCorrect={false} />
                </View>
                <TouchableOpacity style={styles.commandBtn} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}


const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    commandBtn:{
        padding:15,
        borderRadius:10,
        backgroundColor:"black",
        marginTop:10,
        alignItems:"center"
    },
    panel:{
        padding:20,
        backgroundColor:"#FFFFFF",
        paddingTop:20,
        // height: 100
    },
    header:{
        backgroundColor:"#FFFFFF",
        shadowColor:"#333333",
        shadowOffset:{width: -1,height: -3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },
    panelHeader:{
        alignItems:'center',
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:"#00000040",
        marginBottom:10,
    },
    panelTitle:{
        fontSize:27,
        height:35,
    },
    panelSubtitle:{
        fontSize:14,
        color:"grey",
        height:30,
        marginBottom:10
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:"#FF6347",
        marginVertical:7,
        alignContent:"center"
    },
    panelButtonTitle:{
        fontWeight:"bold",
        fontSize:17,
        color:"white"
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#F2F2F2",
        paddingBottom:5
    },
    actionError:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:"#FF0000",
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:"#05375a"
    }
})

export default EditProfile;