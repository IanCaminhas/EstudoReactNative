import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props =>{
    return (
        <View style={style.FlexV4}>
            <View style={style.v0}></View>
            <View style={style.v1}></View>
            <View style={style.v2}></View>
        </View>

    )

}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow:1,
        width:100,
        backgroundColor: '#000',
    },

    v0:{
        backgroundColor: '#0F0',
        height:300
    },

    v1:{
        backgroundColor: '#ff801a',
        flexGrow: 1
    },

    v2:{
        backgroundColor: '#36c9a7',
        height: 200
    }


})

