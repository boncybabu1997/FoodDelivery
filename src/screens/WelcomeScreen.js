import React from "react";
import {View, Text, StyleSheet, StatusBar, FlatList }from 'react-native';
import {colors, General} from "../constants";
import { WelcomeCard , Separator} from "../components";
import general from "../constants/General";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { display } from "../utils";


const pagination = () => {
  return(
    <View style = {styles.pageContainer}>
      <View style ={styles.page}></View>
      <View style ={styles.page}></View>
      <View style ={styles.page}></View>

    </View>
  )
}


const WelcomeScreen =() => {
    return(
        <View style={styles.container}>
          <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.DEFAULT_WHITE}
          translucent
          />
          <Separator height = {StatusBar.currentHeight}/>
          <Separator height = {display.setHeight(8)}/>
          <View style={styles.WelcomeListConatiner}>
            <FlatList
            data={general.WELCOME_CONTENTS}
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            overScrollMode="never"
            renderItem={({item}) => <WelcomeCard {...item} />}
            />
          </View>
          <pagination/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.DEFAULT_WHITE
    },
    WelcomeListConatiner:{
      height:display.setHeight(60),

    },

    pageContainer:{
      flexDirection:"row",

    },
    page:{
      height:8,
      width:15,
      backgroundColor:Colors.DEFAULT_GREE
    }
    
});
export default WelcomeScreen;