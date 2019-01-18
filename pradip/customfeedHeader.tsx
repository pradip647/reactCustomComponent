//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import { Avatar } from 'react-native-elements';

const devicewidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const iconHeight = deviceHeight/13;
// const iconWidth = devicewidth/6;
const iconWidth = deviceHeight/13;
// const iconRadius = (iconHeight+iconWidth)/2;
const iconRadius = iconWidth/2;

const CustomFeedHeader = ({title,name,day}:any)=> {
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
                  <View style={styles.namecontainer}>
                      <Text style={styles.nameview}>{name}</Text>
                  </View>
            </View>

            <View style={styles.header_subView_two}>
              <Text style={styles.header_subView_two_view}>{day}</Text>
            </View>

        </View>
      </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:'#fff'},
    header_mainView:{flexDirection:"row",marginBottom:8,marginTop:8,left:10},
    header_subView_one:{flexDirection:"row", flex:2},
    avatarcontainer:{height:iconHeight,width:iconWidth, borderRadius:iconRadius},
    namecontainer:{justifyContent:"center",width:'30%'},
    nameview:{left:10,color:'#505257',fontFamily: "OpenSans-Bold"},
    header_subView_two:{flex:1, justifyContent:"center"},
    header_subView_two_view:{color:'#505257',fontFamily: "OpenSans-Bold"}
})
//make the component available to other parts of the app
export default CustomFeedHeader;

{/* <CustomFeedHeader title="example" name="example" day="example" /> */}
{
    /*
        Example:

        <View style={{margin:10,marginBottom:0}}>
        <CustomFeedHeader title="SS" name="Sudipta Sarkar" day="1 day ago" />
        <CustomFeedBodyImage imageurl="'../assets/images/heavybuzz_bckgrnd.png'" />
        <CustomFeedBody bodytitle={bodytitle} bodytext={bodytext} />
        <CustomFeedFooter 
            hideStarIcon={true} 
            showreacts={false} 
            sharevalue={65}
            buzzvalue={10}
            clickvalue={100}
            starIconPress={()=>{Alert.alert("Star icon functionality not implemented")}}
            shareIconPress={()=>{Alert.alert("Share icon functionality not implemented")}}
            lebels={[{name:'sports'},{name:'sports'},{name:'sports'},{name:'sports'},{name:'sports'}]} 
        />
        <CustomchatSend title="AM" value={this.state.inputmessage}
        onChangeText={(msg:any)=>this.setState({inputmessage:msg})}
        sendBtnClick={()=>{Alert.alert(this.state.inputmessage)}}
        />
    */
}
