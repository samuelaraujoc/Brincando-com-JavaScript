import React from 'react'
import { View, StyleSheet } from'react-native'

import CompPadrao, { Comp1, Comp2} from './componentes/Multi'
import Primeiro from './componentes/Primeiro'

export default ()  => (
    <View style={style.App}>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#B0E0E6',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})