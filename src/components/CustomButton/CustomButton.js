import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
          styles.container, 
          styles[`container_${type}`],
          bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text 
        style={[
          styles.text, 
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 14,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
      backgroundColor: "#c08081",

    },

    container_SECONDARY: {
      borderColor: '#f4f0ec',
      borderWidth: 2,
    },

    container_TERTIARY : {},

    container_FIRST: {
      backgroundColor: '#c08081',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
      color: "white",
    },

    text_SECONDARY: {
      color: 'white',
    }
});

export default CustomButton;