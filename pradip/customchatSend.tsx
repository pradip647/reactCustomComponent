import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Input, Icon } from 'react-native-elements';

const deviceHeight = Dimensions.get('window').height;
const iconHeight = deviceHeight/14;
const iconWidth = deviceHeight/14;
const iconRadius = iconWidth/2;

const CustomchatSend = ({title,value,onChangeText,sendBtnClick}:any)=> {
    
    return (
        <View style={styles.headercontainer}>
        <View style={styles.header_mainView}>
            <View style={styles.header_subView_one}>
                <Avatar
                    containerStyle={styles.avatarcontainer}
                    xlarge
                    rounded
                    title={title}
                    // icon={{name: 'user', type: 'font-awesome'}}
                    // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
            </View>

            <View style={styles.header_subView_two}>
                <Input
                    multiline = {true}
                    numberOfLines = {4}
                    maxLength={200}
                    onChangeText={onChangeText}
                    inputContainerStyle={{ borderWidth:1, borderColor:'#505257',borderRadius:10,height:50}}
                            placeholder='Write your comment'
                            value={value}
                            rightIconContainerStyle={{width:35,marginRight:4, borderLeftWidth:0.8, borderLeftColor:'#505257'}}
                            rightIcon={
                                <Icon
                                type='font-awesome' name='send' size={20} color='#F4A833'
                                onPress={sendBtnClick}
                                />
                            }
                />
            </View>

        </View>
      </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{borderBottomLeftRadius:8,borderBottomRightRadius:8,backgroundColor:'#fff'},
    header_mainView:{flexDirection:"row",marginBottom:8,marginTop:8,left:10},
    header_subView_one:{flex:1, justifyContent:'center'},
    avatarcontainer:{height:iconHeight,width:iconWidth, borderRadius:iconRadius},
    header_subView_two:{flex:5, justifyContent:'center',marginLeft:8},
})
export default CustomchatSend;

/*
<CustomchatSend 
        title="AM" 
        value={this.state.inputmessage}
        onChangeText={(msg:any)=>this.setState({inputmessage:msg})}
        sendBtnClick={()=>{Alert.alert(this.state.inputmessage)}}
 />
 */