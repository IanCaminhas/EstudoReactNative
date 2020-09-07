import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
//import Aleatorio from './components/Aleatorio' 
//import Primeiro from './components/Primeiro'
//import MinMax from './components/MixMax'
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
//import Diferenciar from './components/Diferenciar'
//import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

export default ()=> (
    <SafeAreaView style={style.App}>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
            <Membro nome="Gui" sobrenome="Silva"/>
            <Membro nome="Rebeca" sobrenome="Silva"/>
        </Familia>
       {/*  
        <ParImpar num={4}/>
       <ContadorV2 />
        <Diferenciar />
       <Pai />
       <Contador inicial= {100} passo={13} />
        <Contador />
       <Botao />
       <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Text>{ 1 + 1 }</Text>
        <MinMax min="3" max="20" />
        <MinMax min="4" max="21" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro/> */}
    </SafeAreaView>
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

