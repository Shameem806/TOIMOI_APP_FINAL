import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';

class DetailsScreen extends React.Component{
    state={
      quantity: 1
    }

    addQuantity = (quantity) => {
      this.setState({quantity: this.state.quantity + 1});
    }

    subtractQuantity = (quantity) => {
      if(this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});        
      }
    }

    render() {
      return(
        <View style={{backgroundColor: '#f7a8a0', height: '100%'}}>
          <ScrollView>
            <View style={{
               flexDirection: 'row',
              alignItems: 'center'
            }}>

              <View style={{width: '90%', height: '40%', marginTop: -150, marginLeft:10}}>
                <TouchableOpacity
                onPress={()=> this.props.navigation.goBack()}
                >
                  <Image
                    source={require('../../images/back_arrow.png')}
                    style={{width: 20, height: 20, marginTop: -20, marginLeft: 10}}
                  />
                </TouchableOpacity>

                {/* ************************* */}

                <View style={{width: "105%", alignItems: "center"}}>
                  <View style={{
                    flexDirection: "row",
                  }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: -10
                    }}>Mango Passionfruit Mochi Croissant</Text>
                  </View>
                  <Image
                  source={require('../../images/7.jpeg')}
                  style={{marginTop: 20, width: 370, marginLeft: 5}}
                />
                </View>

                {/* ************************* */}
                
              </View>              
            </View>
          </ScrollView>

          {/* <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                backgroundColor: "#933d41",
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 20,
                marginBottom: 20,
              }}
              >
                <TouchableOpacity
                  onPress={this.addQuantity}
                >
                  <Text style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "white"
                  }}>+</Text>
                </TouchableOpacity>

                <Text style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                  color: "white"
                }}>
                  {this.state.quantity}
                </Text>

                <TouchableOpacity
                  onPress={this.subtractQuantity}
                >
                  <Text style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "white",
                  }}>-</Text>
                </TouchableOpacity>
              </View> */}

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 50,
            marginBottom: 30,
            width: 400,
            alignSelf: "center"
          }}>
            <View>
              <Text style={{fontSize: 22, marginTop: -100}}>Flaky croissant filled with mango Passionfruit cream and topped with mango flavored mochi.</Text>            
            </View>

            <View style={{marginTop: 40}}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: -300,
                marginTop: 70,
                backgroundColor: "#933d41",
                width: 90,
                color: "white"
                }}> $6.00</Text>
            </View>

            <View style={{marginLeft: -150, marginTop: 100, width: 100}}>
              <Button 
                title="ADD TO CART"
                type="CARTBUTTON"
                color="#933d41"
                onPress={this.props.addItemToCart}
              />
            </View>

          </View>
        </View>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addItemToCart: (product) => dispatch({type: 
      'ADD_TO_CART', payload: product})
    }
  }

  export default connect(null, mapDispatchToProps)(DetailsScreen);

