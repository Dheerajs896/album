import React from 'react';
import {StyleSheet,View , Text} from 'react-native';

const Header = (props)=>{

    const {textStyle , viewStyle} = styles;
    return (
        <View style ={viewStyle} >
            <Text style={textStyle}>{props.getHeader}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
       

    },
    viewStyle : {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 1 , height: 0.20},
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
      
    }
}); 

export default Header;
