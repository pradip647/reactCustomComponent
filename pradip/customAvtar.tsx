//import a libraries for making a component
import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { Avatar } from 'react-native-elements';


const CustomAvtar = ({height,width,image,AvtarClick}:any)=> {
    return (
        <Avatar
            containerStyle={{height:height, width:width, borderRadius:(height+width)/2}}
            xlarge
            rounded
            source={{uri: image}}
            onPress={AvtarClick}
            activeOpacity={0.7}
            />   
    )
}
const styles=StyleSheet.create({

})
//make the component available to other parts of the app
export default CustomAvtar;

