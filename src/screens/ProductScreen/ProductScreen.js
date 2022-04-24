import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class ProductScreen extends React.Component{
  render() {
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: '#CD9884',
          height: 460,
          width: 180,
          borderRadius: 20,
          marginTop: this.props.marginTop,
          marginRight: 20,
          marginBottom: 20
        }}
      >
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 15,
        }}>
        </View>
        <Image
          source={this.props.image}
          style={{
            height: 130,
            alignSelf: 'center',
            width: 130,
            marginTop: 15,
            marginBottom: 15
          }}
        />
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingHorizontal: 10,
          alignSelf: 'center',
        }}>
          {this.props.title}
        </Text>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 55,
          color: '#933d41',
          paddingTop: 10,
          letterSpacing: 0
        }}>
          ${this.props.price}
        </Text>
        <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20, marginRight: 10}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
