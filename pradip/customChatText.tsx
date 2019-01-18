import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';

const deviceHeight = Dimensions.get('window').height;
const iconHeight = deviceHeight/13;
const iconWidth = deviceHeight/13;
const iconRadius = iconWidth/2;

const CustomChatText = ({commentusername, commentText,userimage,replybuttonPress,deletebuttonPress,hideline}:any)=> {
    return (
        <View style={styles.headercontainer}>
            <View style={{flexDirection:"column"}}>
                <View>
                    <View style={{flexDirection:"row",left:10,marginRight:8}}>
                        <Avatar
                            containerStyle={styles.avatarcontainer}
                            xlarge
                            rounded
                            title={userimage}
                            // icon={{name: 'user', type: 'font-awesome'}}
                            // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <View style={{justifyContent:"center",width:'82%'}}>
                            <Text style={{marginLeft:10,marginTop:10,color:'#505257',fontFamily: "OpenSans-Bold"}}>{commentusername}</Text>
                            <Text style={{margin:8,marginLeft:10,color:'#505257',fontFamily: "OpenSans"}}>{commentText}</Text>
                        </View>
                    </View>
                </View>

                <View style={{justifyContent:'flex-end',flexDirection:'row', margin:10,marginTop:0}}>
                        <View style={{marginRight:20, flexDirection:"row",justifyContent:"flex-end"}}>
                            <TouchableOpacity onPress={replybuttonPress}>
                                <Text style={styles.header_subView_two_view}>Reply</Text>
                            </TouchableOpacity>

                            <Text style={styles.header_subView_two_view}> | </Text> 

                            <TouchableOpacity onPress={deletebuttonPress}>
                                <Text style={styles.header_subView_two_view}>Delete</Text>
                            </TouchableOpacity>
                        </View> 
                        <View style={{alignItems:"center",marginRight:10,flexDirection:"row",justifyContent:'center'}}>
                            <Text style={styles.header_subView_two_view_time}>13 sec ago</Text>
                        </View> 
                </View>
                { hideline ?
                    null
                    :
                    <View style={{borderTopWidth:4, borderTopColor:'#DDDDDD',flexDirection:"row",marginLeft:10,marginRight:10}}></View>
                }
            </View>
    </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{backgroundColor:'#F3F3F3'},
    

    avatarcontainer:{height:iconHeight,width:iconWidth, borderRadius:iconRadius,marginTop:10},

    header_subView_two:{justifyContent:'flex-end',flexDirection:'row'},
    header_subView_two_view:{color:'#AC2C27',fontFamily: "OpenSans"},
    header_subView_two_view_time:{color:'#505257',fontFamily: "OpenSans"}

})
//make the component available to other parts of the app
export default CustomChatText;

