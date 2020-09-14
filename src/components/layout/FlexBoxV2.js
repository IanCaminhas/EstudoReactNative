import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props =>{
    return (
        <View style={style.FlexV2}>
              <Quadrado />
              <Quadrado cor='#F00' />
              <Quadrado cor='#0F0' />
              <Quadrado cor='#009' />
              <Quadrado cor='#36c9a7' />
        </View>

    )

}

const style = StyleSheet.create({
    FlexV2: {
        flex:1,
        width: '100%',
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#000'
    }
})

