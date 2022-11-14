import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

// import { Container } from './styles';

const Button = (props) => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#2B2C28',
        color: '#FFFAFB',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#131515',
    },
    operationButton: {
        color: '#FFFAFB',
        backgroundColor: '#7DE2D1',
    },
    buttonDouble: {
        width: Dimensions.get('window').width / 4 * 2,
    },
    buttonTriple: {
        width: Dimensions.get('window').width / 4 * 3
    }
});

export default Button;