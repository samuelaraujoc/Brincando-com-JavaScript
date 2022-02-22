import React, {component} from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native'
import Button from './src/components/Button'

export default class App extends Component {
  render(){
    return(
      <view style={styles.container}>
        <view style={styles.Button}>
          <Button label='AC' />
          <Button label='/' />
          <Button label='8' />
          <Button label='9' />
          <Button label='*' />
          <Button label='4' />
          <Button label='5' />
          <Button label='6' />
          <Button label='-' />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' />
          <Button label='0' />
          <Button label='.' />
        </view>
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex 1,
  },
  Buttons: {
    flexDirection: 'row',
    flex:'wrap'
  }
});