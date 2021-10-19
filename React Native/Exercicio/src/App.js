import React from 'react'
import { View, StyleSheet } from'react-native'

import MinMax from './componentes/MinMax'
// import CompPadrao, { Comp1, Comp2} from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'

export default ()  => (
    <View style={style.App}>
        <MinMax/>
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
     </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    }
})