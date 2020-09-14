import React, {Component} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {

    render(){
        return (
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena
                {this.props.qtdeNumeros}
            </Text>
        )
    }

}