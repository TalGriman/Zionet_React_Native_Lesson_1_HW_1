import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';



const Card = (props) => {
    const { style, children } = props;

    return (
        <View style={{ ...styles.cardContainer, ...style }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        minHeight: 370,
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default Card;