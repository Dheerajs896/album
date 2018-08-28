import React from 'react';
import {StyleSheet,View , Text} from 'react-native';

const Header = ()=>{

    const {textStyle , viewStyle} = styles;
    return (
        <View style ={viewStyle} >
            <Text style={textStyle}>Album!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20
    },
    viewStyle : {
        marginTop:30,
        height:60,
        backgroundColor: '#F8F8F8'
    }
}); 

export default Header;
