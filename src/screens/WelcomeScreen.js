import React from "react";
import {View, Text, StyleSheet, StatusBar, FlatList }from 'react-native';
import {colors, General} from "../constants";
import { WelcomeCard } from "../components";
import general from "../constants/General";


const WelcomeScreen =() => {
    return(
        <View style={styles.container}>
          <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.DEFAULT_WHITE}
          translucent
          />
          <View style={styles.WelcomeListConatiner}>
            <FlatList
            data={general.WELCOME_CONTENTS}
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <WelcomeCard {...item} />}
            />
          </View>
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
});
export default WelcomeScreen;