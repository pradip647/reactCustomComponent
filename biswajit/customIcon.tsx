import React from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    Dimensions
  } from 'react-native';
  var { width, height } = Dimensions.get('window');


const CustomIcom = ({iconName, iconText, textColor}:any) =>{

    return (
        <TouchableOpacity style={styles.IconView}>
            <View style={styles.iconView}><Image style={styles.imageStyle} source={iconName} /></View>
            <Text style={[styles.iconText, textColor]}>{iconText}</Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    IconView : {
        margin: 10,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'column'
    },
    imageStyle : {
        // width: (width-60)/7,
        // height: (height-20)/17
        width: 40,
        height: 40
    },
    iconView : {
        backgroundColor: '#eee', 
        width:(width-40)/4,
        justifyContent: 'center',
        alignItems : 'center',
        paddingTop: 4,
        paddingBottom: 4
    },
    iconText : {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize : 16,
        marginTop: 15,
        fontWeight: 'bold'
    }
})
export default CustomIcom;