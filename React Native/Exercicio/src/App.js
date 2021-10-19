import React from 'react'
import { View, StyleSheet } from'react-native'

import  Aletorio from './componentes/aleatorio'
// import MinMax from './componentes/MinMax'
// import CompPadrao, { Comp1, Comp2} from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'

export default ()  => (
    <View style={style.App}>
        <Aletorio min={10} max={60}/>
        <Aletorio min={10} max={60}/>
        <Aletorio min={10} max={60}/>
        <Aletorio min={10} max={60}/>
        <Aletorio min={10} max={60}/>
        {/* <MinMax  min={3} max={20} />
        <MinMax  min={1} max={94} /> */
        /* <CompPadrao />
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