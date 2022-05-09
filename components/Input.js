import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = (props) => {
    const { selectionColor, containerStyle, keyboardType, textInputStyle } = props;

    return (
        <View style={{ ...styles.inputContainer, ...containerStyle }}>
            <TextInput {...props} style={{ ...styles.textInputStyle, ...textInputStyle }} selectionColor={selectionColor ? selectionColor : "black"} keyboardType={keyboardType ? keyboardType : "numeric"} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 5
    },
    textInputStyle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign:"center"
    }
});

export default Input;