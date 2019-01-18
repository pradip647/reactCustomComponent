import React from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    Dimensions
  } from 'react-native';
  import { Rating } from 'react-native-elements';
  import * as theme from '../theme/theme.style';
  var { width, height } = Dimensions.get('window');


const RatingComponent = ({iconName, iconText, textColor}:any) =>{

    return (
        <View style={styles.ratingView}>            
            <Text style={{fontSize: 18, color:'#000', fontWeight: 'bold',fontFamily: "OpenSans",}}>Please share this</Text>
            <View style={{justifyContent: 'center',alignItems: 'center',fontFamily: "OpenSans", flexDirection: 'row'}}>
                <Text style={styles.ratingText}>Buzz requester rating :</Text>
                <Rating
                    type='custom'
                    ratingCount={5}
                    fractions={5}
                    startingValue={4.5}
                    imageSize={16}
                    ratingColor= '#f7b941'
                    ratingBackgroundColor='#666'
                    style={{ paddingVertical: 10,  }}
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.btnStyle, styles.accBtn]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: "OpenSans",}}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnStyle, styles.delBtn]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff',fontFamily: "OpenSans",}}>Decline</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    ratingView : {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        width: (width-20),
        padding: 12,
        borderRadius: 6,
        position: 'relative',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 0},
    },
    btnStyle : {
        width: 100,
        height: 30,
        margin: 6,
        borderRadius: 6,
        backgroundColor: '#ff00ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingText : {
        fontSize : 14,
        color: '#7c7c7c',
        marginRight: 8,
        fontFamily: "OpenSans",
    },
    buttonView : {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    accBtn : {
        backgroundColor: theme.default.COLOR_YELLOW_PRIMARY
    },
    delBtn : {
        backgroundColor: theme.default.COLOR_TOMATO
    }
})
export default RatingComponent;