import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default function App() {

  const [state, setState] = useState({ ...initialState })
  const [displayV, setDisplayV] = useState('0')

  const addDigit = (n) => {

    const clearDisplay = state.displayValue === '0' || state.clearDisplay
    
    if (n === '.' && !state.clearDisplay && state.displayValue.includes('.')) {
      return
    }
    
    const currentValue = clearDisplay ? '' : state.displayValue
    const displayValue = currentValue + n
    setState(state, [state.displayValue = displayValue, state.clearDisplay = false])
    setDisplayV(displayValue)

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[state.current] = newValue
      setState(state, [state.values = values])
    }
  }

  const clearMemory = () => {
    setState({ ...initialState })
    setDisplayV('0')
  }

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState(state, [state.operation = operation, state.current = 1, state.clearDisplay = true])
    } else {
      const equals = operation === '='
      const values = [...state.values]
      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = state.values[0]
      }

      values[1] = 0
      setDisplayV(values[0])
      setState(
        state,
        [
          state.displayValue = `${values[0]}`,
          state.operation = equals ? null : operation,
          state.current = equals ? 0 : 1,
          state.clearDisplay = !equals,
          state.values = values
        ])
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayV} />
      <View style={styles.buttons}>
        <Button label='AC' onClick={clearMemory} triple />
        <Button label='/' onClick={() => setOperation('/')} operation />
        <Button label='7' onClick={() => addDigit(7)} />
        <Button label='8' onClick={() => addDigit(8)} />
        <Button label='9' onClick={() => addDigit(9)} />
        <Button label='*' onClick={() => setOperation('*')} operation />
        <Button label='4' onClick={() => addDigit(4)} />
        <Button label='5' onClick={() => addDigit(5)} />
        <Button label='6' onClick={() => addDigit(6)} />
        <Button label='-' onClick={() => setOperation('-')} operation />
        <Button label='1' onClick={() => addDigit(1)} />
        <Button label='2' onClick={() => addDigit(2)} />
        <Button label='3' onClick={() => addDigit(3)} />
        <Button label='+' onClick={() => setOperation('+')} operation />
        <Button label='0' onClick={() => addDigit(0)} double />
        <Button label='.' onClick={() => addDigit('.')} />
        <Button label='=' onClick={() => setOperation('=')} operation />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
