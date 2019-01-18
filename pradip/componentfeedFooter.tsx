import React from 'react';
import { View, StyleSheet,Text,Dimensions, Alert,} from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import * as theme from '../theme/theme.style';
import CustomChatText from './customChatText';
import CustomchatSend from './customchatSend';

const devicewidth = Dimensions.get('window').width;
const iconHeight = devicewidth/11;

const found=false

const CustomFeedFooter = ({hideStarIcon,showreacts,lebels,sharevalue,buzzvalue,clickvalue,starIconPress,shareIconPress}:any)=> {
    return (
        <View style={styles.feedContainer}>
            <View style={styles.feedsubContainer}>
                <View style={styles.feed_mainView}>
                    <View style={styles.feed_subView_one}>
                        <View style={styles.feed_subView_one_mainView}>
                            {showreacts ?
                                lebels?
                                    lebels.map((item:any)=>{
                                        return <View style={styles.feed_subView_one_mainView_subView}>
                                                    <Badge
                                                        value={item.name}
                                                        textStyle={styles.badge_text_style}
                                                        containerStyle={styles.badge_container}
                                                    />
                                                </View>
                                    })
                                :<View style={styles.feed_subView_one_mainView_subView}></View>


                            :<View style={styles.feed_subView_one_mainView_subView}></View>
                            }


                            

                        </View>
                        {   showreacts ?
                                <View style={styles.feed_subView_one_share_container}>
                                    <Text style={styles.feed_subView_one_share}>{sharevalue ? sharevalue + ' Shares':''} </Text>
                                    <Text style={styles.feed_subView_one_share}>{buzzvalue?', '+ buzzvalue + ' Buzz':''} </Text>
                                    <Text style={styles.feed_subView_one_share}>{clickvalue?', '+ clickvalue + ' Clicks':''} </Text>
                                </View>
                            :
                                null
                        }


                    </View>

                    <View style={styles.feed_subView_two}>
                        <View style={styles.feed_subView_two_view}>
                            {   hideStarIcon ?
                                    <Icon name="star" color='#D9D9D9' size={iconHeight} onPress={starIconPress}/>    
                                :
                                    null
                            }
                            <Icon
                                name='share' color='#fff' size={iconHeight}
                                onPress={shareIconPress}
                                containerStyle={{backgroundColor:theme.default.COLOR_YELLOW_PRIMARY,borderRadius:5}}
                            />
                        </View>
                    </View>

                </View>
            </View>
            <CustomChatText
                userimage="SS"
                commentusername="Sudipta Sarkar"
                commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                replybuttonPress={()=>Alert.alert("Reply button press")}
                deletebuttonPress={()=>Alert.alert("Delete button press")}
            />
            <CustomChatText
                userimage="SS"
                commentusername="Sudipta Sarkar"
                commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                replybuttonPress={()=>Alert.alert("Reply button press")}
                deletebuttonPress={()=>Alert.alert("Delete button press")}
            />
            <CustomChatText
                userimage="SS"
                commentusername="Sudipta Sarkar"
                commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                replybuttonPress={()=>Alert.alert("Reply button press")}
                deletebuttonPress={()=>Alert.alert("Delete button press")}
            />
            <CustomChatText
                hideline={true}
                userimage="SS"
                commentusername="Sudipta Sarkar"
                commentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                replybuttonPress={()=>Alert.alert("Reply button press")}
                deletebuttonPress={()=>Alert.alert("Delete button press")}
            />
             {/* <CustomchatSend title="AM" name="example" day="example" /> */}

        </View>
    )
}
const styles=StyleSheet.create({
    feedContainer:{backgroundColor:'#fff',borderBottomLeftRadius:8,borderBottomRightRadius:8},
    feedsubContainer:{margin:7},
    feed_mainView:{flexDirection:"row"},
    feed_subView_one:{flex:3, justifyContent:"space-around"},
    feed_subView_one_mainView:{flexDirection:"row",flexWrap:'wrap',marginBottom:13},
    feed_subView_one_mainView_subView:{margin:1},
    badge_text_style:{ color: '#D9D9D9',margin:1,fontFamily: "OpenSans-Bold" },
    badge_container:{borderRadius:0,backgroundColor:'#99A8AE'},
    feed_subView_one_share_container:{flexDirection:"row",margin:1,flexWrap:'wrap'},
    feed_subView_one_share:{color:'#505257',fontFamily: "OpenSans-Bold"},
    feed_subView_two:{flex:1, justifyContent:"center"},
    feed_subView_two_view:{flexDirection:"row", justifyContent:"space-evenly"}

    

})
//make the component available to other parts of the app
export default CustomFeedFooter;