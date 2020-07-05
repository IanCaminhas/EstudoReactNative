import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'
import CompPadrao, { Comp1, Comp2} from './components/Multi'

export default ()=> (
    <View style={style.App}>
        <Text>{ 1 + 1 }</Text>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro/>
    </View>
)

const style = StyleSheet.create({
    App: {
       // backgroundColor:'#A00',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})

