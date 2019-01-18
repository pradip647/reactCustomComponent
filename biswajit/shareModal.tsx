import React from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, Dimensions, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import  CustomIcom  from './customIcon';

import * as theme from '../theme/theme.style';

var { width } = Dimensions.get('window');

const ShareModal = ({}) =>{
// export default class ShareModal extends  React.Component {

    return (
        <View style={styles.container}>
        <View style={{position: 'absolute', top: 12, right: 12}}>
            <TouchableOpacity style={styles.closeBtnContainer}>
                <Text style={styles.closeBtn}>X</Text>
            </TouchableOpacity>
        </View>
            <Text style={styles.modalHeading}>Share to earn cash, prizes & giveways...all day, everyday!</Text>
            <View style={styles.subHeading}>
                <Text style={{textAlign: 'center',fontFamily: "OpenSans",}}>Viod where pohibited by law for </Text>
                <Text style={{fontWeight: 'bold',fontFamily: "OpenSans", textAlign: 'center'}}>considation you must share using the tools on this box</Text>
            </View>
            <View style={styles.IconViewContainer}>
                <CustomIcom iconName={require('../assets/images/share.png')} iconText="Share" textColor={styles.shareColor}></CustomIcom>
                <CustomIcom iconName={require('../assets/images/dollar.png')} iconText="Earn" textColor={styles.earnColor}></CustomIcom>
                <CustomIcom iconName={require('../assets/images/repeat.png')} iconText="Repeat" textColor={styles.repeatColor}></CustomIcom>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        width: (width-40),
        padding: 12,
        borderRadius: 16,
        position: 'relative',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 0},
    },
    closeBtn : {
        fontSize: 14,
        lineHeight: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    closeBtnContainer : {
        height: 20,
        width: 20,
        padding: 0,
        backgroundColor : theme.default.COLOR_TOMATO,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeading : {
        color: '#444',
        fontSize: 17,        
        fontWeight: 'bold',
        fontFamily: "OpenSans",
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 2,
        width: (width-60)/1.3,
    },
    subHeading : {
        color: '#444',
        fontSize: 10,
        marginBottom: 10,
        textAlign: 'center',
        flexDirection: 'column',
    },
    IconViewContainer : {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    shareColor : {
        color: theme.default.COLOR_TOMATO
    },
    earnColor : {
        color: theme.default.COLOR_YELLOW_PRIMARY
    },
    repeatColor : {
        color: '#1ff88f'
    }
})
export default ShareModal;