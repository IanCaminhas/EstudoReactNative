import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props =>{
    return (
        <View style={style.FlexV1}>
              <Quadrado />
              <Quadrado cor='#ff801a' lado={20} />
              <Quadrado cor='#0F0' lado={30} />
              <Quadrado cor='#009' lado={40} />
              <Quadrado cor='#36c9a7' lado={50} />
              <Quadrado cor='#8312ed' lado={60} />
        </View>

    )

}

const style = StyleSheet.create({
    FlexV1: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "baseline",
        height:350,
        width: '100%',
        backgroundColor: '#000'
    }
})

