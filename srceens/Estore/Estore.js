import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
//import { SafeAreaView } from "react-native";
import Colors from "./Colors";
import Icon from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from "@expo/vector-icons";


import { Dimensions } from "react-native";
import foods from "./Products";
// import accessories from "../containers/products"
//import { TextInput } from "react-native";

const width = Dimensions.get("screen").width / 2 - 30

const EstoreScreen = ({navigation}) => {
    const Categories = ['  Food-Supplements', 'Gym-Accessories    '];
    
    const [categoryIndex, setCategoryIndex] = useState(0)

    const CategoryList = () => {
        return (
            <View style={style.CategoryContainer}>
                {Categories.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={index} 
                        onPress={() => setCategoryIndex(index)}>
                        <Text

                            style={[style.categoryText, categoryIndex == index && style.categoryTextSelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>

                ))}
            </View>

        );
    };
   
    


    const Card = ({foods }) => {

        return (
            
        <TouchableOpacity onPress={()=>navigation.navigate("Details",foods)}>

          <View style={style.card}>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{
                    width: 30,
                     height: 30,
                     borderRadius: 15,
                     alignItems: "center", 
                    justifyContent: "center",
                    backgroundColor: foods.like ?
                        'rgba(245,42,42,0.2)' :
                        'rgba(0,0,0,0.2)'
                }}>
                    <TouchableOpacity>
                    <Icon
                        name="favorite"
                        size={18}
                        color={foods.like ? Colors.red : Colors.dark} />
                        </TouchableOpacity>
                </View>
            </View>
            <View style={{height:80, marginTop:10, alignItems:'center'}}>
                    <Image style={{flex:1, resizeMode:'contain'}} source={foods.img}/>
                </View>
                <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>
                    {foods.name}
                </Text>
                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:3,}}>
                    <Text>
                        PKR {foods.price}/-
                    </Text>
                    <View style={{height:25,width:25,backgroundColor:Colors.green,
                    borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontSize:22,color:Colors.white,justifyContent:'center',alignItems:'center'}}>+</Text>     
                    </View>
                </View>
        </View>
        </TouchableOpacity>
        
        );
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: Colors.white,
        }}>
            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: Colors.green }}>Fitgo E-Store</Text>
                </View>
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 15 , marginTop:12}} />
                    <TextInput placeholder="Search" style={style.input} />
                </View>
                <View style={style.sortBtn}>
                    <Icon name="sort" size={30} color={Colors.white} />
                </View>
            </View>
            <CategoryList />
            
            <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    margin: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={foods}
                renderItem={({ item }) =>
                    <Card foods={item} />}
            />

        </SafeAreaView>

    );

};



const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: Colors.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black",
        flex: 1,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    CategoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 14,
        color: "grey",
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: Colors.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: Colors.green
    },
    card: {
        height: 225,
        backgroundColor: Colors.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }
});
export default EstoreScreen;