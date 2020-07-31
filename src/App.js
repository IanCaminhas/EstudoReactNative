import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Aleatorio from './components/Aleatorio' 
import Primeiro from './components/Primeiro'
import MinMax from './components/MixMax'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Titulo from './components/Titulo'


export default ()=> (
    <View style={style.App}>
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Text>{ 1 + 1 }</Text>
        <MinMax min="3" max="20" />
        <MinMax min="4" max="21" />
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
        alignItems: "center",
        padding: 20
    },

})

