import React from 'react'
import { View } from 'react-native'

import CompPadrao,  {Comp1, Comp2 } from './componentes/Multi'
import Primeiro from './componentes/Primeiro'

export default () => (
    <View>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View> 
)
