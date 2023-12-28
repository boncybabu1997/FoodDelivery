import React from "react";
import {View, Text, StyleSheet, Image}from 'react-native';
import { display } from "../utils";
import { fonts,colors,images} from "../constants";



const WELCOME_CONTENTS = [
    
    {
        image:'DISCOVERY',
        title:'Discover places near you',
        content:
        'We make it simple to find your favourite food.Enter your address and let us do the rest.',

    },
    {
        image:'FAVOURITE',
        title:'Order your favourite',
        content:
        'We will store your favourite foods based on your search and orders.',
    },
    {
        image:'DELIVER',
        title:'Fastest Delivery',
        content:
        'We make food ordering fast, easy and free.No matter you paid online or cash.',
    },
];

const WelcomeCard =(WELCOME_CONTENTS,image) => {
    return(
        
        
        <View style={styles.container}>
            <Image style={styles.image} source={images[WELCOME_CONTENTS.image]}resizeMode="contain"/>
            <Text style={styles.titleText}>{WELCOME_CONTENTS.title}</Text>
            <Text style={styles.contentText}>{WELCOME_CONTENTS.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:display.setWidth(100),
    },
    image:{
        height:display.setHeight(30),
        width:display.setWidth(60),

    },
    titleText:{
       fontSize:22,
       fontFamily:fonts.POPPINS_BOLD,

    },
    contentText:{
        fontSize:18,
        fontFamily:fonts.POPPINS_BLACK,
        textAlign:'center',
        marginHorizontal:20,

    },
});
export default WelcomeCard;