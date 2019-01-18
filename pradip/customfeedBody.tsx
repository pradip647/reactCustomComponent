import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const CustomFeedBody = ({bodytitle, bodytext}:any)=> {
    return (
        <View style={styles.feedContainer}>
            <View style={{margin:10}}>
                <Text style={[styles.feedtitle,{fontFamily: "OpenSans-Bold"}]}>{bodytitle}</Text>
                <Text style={[styles.feedtitle,{lineHeight:23,fontFamily: "OpenSans"}]}>{bodytext}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    feedContainer:{backgroundColor:'#fff'},
    feedtitle:{fontSize:15, marginBottom:8,color:'#505257'},

})
//make the component available to other parts of the app
export default CustomFeedBody;

{/* <CustomFeedBody bodytitle="Example" bodytext="example" /> */}