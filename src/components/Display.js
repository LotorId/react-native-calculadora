import React from 'react';
import { View, StyleSheet, Text } from 'react-native';



const Display = ({value}) => {

  return (
    <View style={style.display}>
        <Text style={style.displayValue} numberOfLines={1}>
            {value}
        </Text>
    </View>
  );
}

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#131515',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default Display;