import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CustomButton = (props) => {
    const { containerStyle, color, title } = props;

    return (
        <View style={{ ...containerStyle, ...styles.containerStyle }}>
            <Button {...props} title={title ? title : "Calculate"} color={color ? color : "blue"} />
        </View >
    );
};

const styles = StyleSheet.create({
    containerStyle: { width: "49%" }
});

export default CustomButton;