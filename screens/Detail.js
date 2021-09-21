import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native';
import data from '../assets/data/quran_data.json';
const quran = data.HolyQuran.Chapter;

let {width,height} = Dimensions.get('window');

export default class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
        this.Bismillah = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
        this.dataList = null;
        this.getDataList();
        this.BismillahLoaded = false;
    }

    getDataList(){
        let id = this.props.route.params.id;
        let data = quran.filter(function(item) {
            return item.chapter_id === id;
        });
        this.dataList = data[0].verses;
    }

    _renderItem(item,index){

        if(!this.BismillahLoaded){
            this.BismillahLoaded = true;
            return (
                <ImageBackground source={require('../assets/octagon_long.png')} style={styles.listBg}>
                    <Text style={styles.Bismillah}>
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </Text>
                </ImageBackground>
            )
        }else{
            return (
                <View style={{paddingHorizontal:20,paddingVertical:20}}>
                    <Image source={require('../assets/top_border.png')} style={styles.topBorder}></Image>
                    <Text style={[styles.textStyle,{fontSize:15,alignSelf:'flex-end'}]}>{item.verse_id}</Text>
                    <Text style={[styles.textStyle,{}]}>{item.verse_arabic}</Text>
                    <Text style={[styles.textStyle,{}]}>{item.verse_urdu}</Text>
                </View>
            )
        }

    }

    render() {
        this.props.navigation.setOptions({ title: this.props.route.params.title })
        return (
            <ImageBackground source={require('../assets/main_bg.jpg')} style={styles.container}>
                <FlatList
                    data = {this.dataList}
                    keyExtractor = {(item) => item.verse_id}
                    renderItem = {({item,index}) => this._renderItem(item,index)}
                    initialNumToRender = {21}
                />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textStyle:{
        color: '#fff',
        fontSize: 25,

    },
    listBg:{
        flex:1,
        height:90,
        width:width,
        flexDirection:'row',
        paddingVertical: 25,
        paddingHorizontal:40,
        marginVertical:4,


    },
    Bismillah:{
        flex:1,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',

    },
    topBorder:{
        width:width,
        height:40,
        position:"absolute",
        top:0

    }

})
