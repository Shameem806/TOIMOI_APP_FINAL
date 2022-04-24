import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { withNavigation } from 'react-navigation';
// import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const ShoppingCartIcon = (props) => (    
    <View style={{marginLeft: -35, marginTop: 10}}>
    <View style={{
         position: 'absolute',
         height: 30,
         width: 30,
         borderRadius: 15,
         backgroundColor: '#rgba(147,61,65, 0.8)',
         right: 20,
         bottom: 20,
         alignItems: 'center',
         justifyContent: 'center',
         zIndex: 2000
    }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
            {props.cartItems.length}
        </Text>
    </View>
        <Icon 
            name="ios-cart" 
            size={35} 
            color='black'
        />
    </View>
) 

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})