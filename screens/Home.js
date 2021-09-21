import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
//import data from '../assets/data/arabic/arabic.json';
import data from '../assets/data/quran_data.json';
const quran = data.HolyQuran.Chapter;

let {width,height} = Dimensions.get('window');

export default class Home extends Component {

    componentDidMount(){
        //console.log(data2)
    }

    gotoDetail(item){
        this.props.navigation.navigate('Detail',{
            'id' : item.chapter_id,
            'title': item.chapter_name
        });
    }

    _renderItem(item){
        return (
            <TouchableOpacity
                onPress={()=> this.gotoDetail(item)}
            >
                <ImageBackground source={require('../assets/octagon_long.png')} style={styles.listBg}>
                    <Text style={styles.textStyle}>{item.chapter_id}</Text>
                    <Text style={[styles.textStyle,{flex:1}]}>{item.chapter_name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/main_bg.jpg')} style={styles.ImageBackground} resizeMethod="auto">
                    <FlatList
                        data = {quran}
                        keyExtractor = {(item) => item.chapter_id}
                        renderItem = {({item}) => this._renderItem(item)}
                        initialNumToRender = {21}
                    />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    ImageBackground:{
        flex:1,
        width:width,
        height:'100%'
    },
    listBg:{
        flex:1,
        height:80,
        width:width,
        flexDirection:'row',
        paddingVertical: 25,
        paddingHorizontal:40,
        marginVertical:4

    },
    textStyle:{
        color: '#fff',
        fontSize: 20
    }
})
