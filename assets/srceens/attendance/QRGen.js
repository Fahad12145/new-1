import * as React from 'react';
import { View,StyleSheet} from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

function Simple() {
  return <SvgQRCode value="http://example.com" />;
}
const QRGen=()=> {
  return (

      <View style={styles.qr}>
      <Simple/>
      </View>
        );
      }
const styles=StyleSheet.create({
  qr:{
    alignItems:"center",
    justifyContent:"center",
  marginTop:200
  }
})

      export default QRGen;