import React, {Component} from 'react'
import { Text, TextInput, Button  } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    constructor(props){
        super(props)
        this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    }

    alterarQtdeNumero = (qtde)=> {
        this.setState({ qtdeNumeros: +qtde })
    }


    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums): novo

    }

    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a,b)=> a- b)
        this.setState({ numeros }) 
    }

    render(){
        
        return (
        <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena
            </Text>

            <TextInput 
                keyboardType={"numeric"}
                style={{borderBottomWidth:1}}
                placeholder="Qtde Números"
                value= {`${this.state.qtdeNumeros}`}
                onChangeText = {this.alterarQtdeNumero}
            />
            <Button 
                title='Gerar'
                onPress={this.gerarNumeros}
            />
            <Text>
                {this.state.numeros.join(',')}
            </Text>
        </>
        )
    }

}