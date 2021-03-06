import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";


const AlbumDetail=({album})=>{

const{title,artist,thumbnail_image,image}=album;

const{containerStyle,imageStyle,
    textContainerStyle,thumbnailContainerStyle,
    albumTitleTextStyle,albumImageStyle}=styles;
    return (
     <Card>
         <CardSection>
             <View style={thumbnailContainerStyle}>
             <Image 
             style={imageStyle}
             source={{uri:thumbnail_image}}/>

             </View>
             <View style={textContainerStyle}>
             <Text style={albumTitleTextStyle} >{title}</Text>
             <Text>{artist}</Text>
             </View>
         </CardSection>

         <CardSection>
             <Image  style={albumImageStyle}
              source={{uri:image}}/>
         </CardSection>
       </Card>
    );

};

const styles={
    containerStyle:{
        justifyContent:'space-around',
        flexDirection:'row',

    },

    textContainerStyle:{
        justifyContent:'space-around',
        flexDirection:'column',
    },

    albumTitleTextStyle:{
      fontSize:18
    },

    imageStyle:{
        height:50,
        width:50
    },

    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    albumImageStyle:{
        height:300,
        flex:1,
        width:null

    }
}


export default AlbumDetail;