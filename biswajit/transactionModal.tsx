import React from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import  CustomIcom  from './customIcon';

import * as theme from '../theme/theme.style';

var { width } = Dimensions.get('window');

const TransactionModal = ({}) =>{
// export default class ShareModal extends  React.Component {

    return (
        <View style={styles.container}>
            <View style={styles.moneyView}>
                <Image style={{width: 40, height: 40}} source={require('../assets/images/cash.png')}></Image>
            </View>
            <Text style={{fontSize: 18, color: '#48e398',fontFamily: "OpenSans", fontWeight: 'bold', marginTop: 30}}>Transaction Successful</Text>
            <Text style={{textAlign: 'center',fontFamily: "OpenSans", fontSize: 28, color: theme.default.COLOR_GREY, marginTop: 5, fontWeight: 'bold'}}>$250</Text>
            <Text style={{fontWeight: '300', textAlign: 'center', color: theme.default.COLOR_GREY_SLATE, fontSize: 15}}>26 Nov,2018</Text>
            <View style={styles.methodView}>
                <View style={{width: (width-60)/2,}}>
                    <Text style={{textAlign: 'center',fontFamily: "OpenSans", fontWeight: 'bold'}}>Payment Method</Text>
                    <Text style={{textAlign: 'center',fontFamily: "OpenSans", marginTop: 4}}>Debit Card</Text>
                </View>
                <View style={{width: (width-60)/2, borderLeftColor: theme.default.COLOR_GREY_SLATE, borderLeftWidth: 1}}>
                    <Text style={{textAlign: 'center',fontFamily: "OpenSans", fontWeight: 'bold'}}>Transaction Type</Text>
                    <Text style={{textAlign: 'center',fontFamily: "OpenSans", marginTop: 4}}>Credit</Text>
                </View>
            </View>
            <Text style={{fontSize: 13, color: theme.default.COLOR_GREY_SLATE, width: (width-10)/1.4,fontFamily: "OpenSans", textAlign: 'center'}}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                Classical Latin literature from 45 BC, making it over 2000 years old.
            </Text>
            <TouchableOpacity style={styles.closeBtnContainer}>
                <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F9F9F9',
        width: (width-40),
        borderRadius: 16,
        position: 'relative',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: -1},
        fontFamily: "OpenSans",
    },
    closeBtn : {
        fontSize: 14,
        lineHeight: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "OpenSans",
    },
    closeBtnContainer : {
        height: 30,
        padding: 0,
        backgroundColor : theme.default.COLOR_YELLOW_PRIMARY,
        width: (width-38)/1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    },
    moneyView : {
        position: 'absolute', 
        top: -45, 
        width: 70, 
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#989898',
        backgroundColor: theme.default.COLOR_WHITE
    },
    methodView : {
        // flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    }
})
export default TransactionModal;