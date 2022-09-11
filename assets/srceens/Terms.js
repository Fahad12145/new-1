import React from "react";
import { View,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Terms=()=>{
    return(
        
            <ScrollView>
            <View  style={{
                paddingBottom:20,
                paddingLeft:20,
                paddingRight:30
            }}>
                <Text style={{
                
                 color:"#022658",
                 fontSize:25,
                 fontWeight:'bold',
                 marginTop:20,
                 backgroundColor:"#89CFF0"
                }}> FitGo-Terms and Conditions</Text> 
            </View>
              <View>
              <Text style={{
                marginTop:7,
                marginLeft:4,
                fontWeight:"bold",
                fontSize:18
            }}> 1- Introduction
            </Text>
            <Text style={{
                marginTop:7,
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 1.1-  These terms and conditions shall govern your use of our application. 
            </Text>
            <Text style={{
               
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 1.2-   Read the full description. If you disagree with these terms and conditions or any part of it, you must not be able to use this application.  
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 1.3-   Basic modules i.e; Integration of maps and clubs, Membership, E-Store makes this application forceful to use.   
            </Text>
  
            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 1.4-   Special FitGo membership is introduced that provides special discounts for the user. 
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 1.5-   If you are registered as an Owner, you must introduce your club to this application. 
            Once you create portfolio, it will take approval time (This process may take time). 
            In case of any diturbance, you will be notified within 24 hours.    
            </Text>

            <Text style={{
                marginTop:7,
                marginLeft:4,
                fontWeight:"bold",
                fontSize:18
            }}> 2- Principle Terms
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.1-   A user must provide accurate details in order to register for this application.  
            </Text>

            <Text style={{
                marginTop:7,
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.2-   For Membership (FitGo,E-store,Club), the agreement starts as soon as the membership is subscribed.  
            </Text>

            <Text style={{
                
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.3-   Any type of membership starts on the same day it is subscribed and will dismisssed according to the selected package.
            </Text>

            <Text style={{
                
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.4-   Fee will be deducted from FitGo Wallet at the time of subscription.
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.5-   Non refundable subscription fee and E-store purchasing.  
            </Text>
             
            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.6-  If you are a new user, FitGo mebership will be free for the whole 1 Month.   
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.7-   From time to time, we may need to increase the membership price.
             We will give you at least 1 full month's notice of any increase in price before the time and will make it very clear when the price increase will take effect ad how much your membership cost after increment.  
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.8-   As an Owner of  club, you can update your Profile as well as your club details.
             Changing in club Portfolio will take time for Admin's Approval. If there will be any diturbance you will be notified within 24 hours. 
             For Goer, visiting any Club (registered with our application) make sure you must scan the Qr code provided to that specific club. Otherwise  your subscription will not be used and you've to pay directly.
             Admin will not be responsible.  
            </Text>

            <Text style={{
                marginLeft:4,
                marginRight:4,
                fontSize:14
            }}> 2.9-   Using FitGo E-store, users will be able to buy multiple products at a time. Desired product will bw added to the cart. In case of not purchasing the items (in the cart), cart will be vanished within a limit of 3 days. 
            Money will be deducted from FitGo Wallet.
            </Text>


            
              </View>
              </ScrollView>
    
    );
}
export default Terms;
