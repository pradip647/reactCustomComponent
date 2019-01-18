import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const devicewidth = Dimensions.get('window').width;
const iconHeight = devicewidth/1.7

const CustomFeedBodyImage = (imageurl:any)=> {
    return (
        <View style={styles.imagecustom_Container}>
            <Image
                style={styles.imagecustomcontainer_Image}
                source={require('../assets/images/heavybuzz_bckgrnd.png')}
                // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                resizeMode={"cover"}
            />
      </View>
    )
}

const styles=StyleSheet.create({
    imagecustom_Container:{backgroundColor:'#fff'},
    imagecustomcontainer_Image:{width: '100%', height: iconHeight}
})

//make the component available to other parts of the app
export default CustomFeedBodyImage;

{/* <CustomFeedBodyImage imageurl="demo image link" /> */}