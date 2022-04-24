import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity} from 'react-native';
import ProductScreen from '../ProductScreen';
import ShoppingCartIcon from '../../../ShoppingCartIcon';
import {connect} from 'react-redux';
import {Auth} from 'aws-amplify';
import {withNavigation} from 'react-navigation';

class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    this.props.navigation.navigate('CartScreen');
  }

  render() {   

    const signOut = () => {
      Auth.signOut();
    }
    
    return(
      <ScrollView style={{backgroundColor: '#f7a8a0'}}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: 25
        }}>
          
          <Text
            onPress={() => signOut()}
            style={{
              width: '25%',
              height: 25,
              color: 'white',
              fontSize: 15,
              backgroundColor: '#8b0000',
              textAlign: 'center',
              marginTop: -10
            }}>
              SIGN OUT
            </Text>

          <View style={{
            width: '90%',
            alignItems: 'center',

          }}>

          </View>
          
           <TouchableOpacity
              onPress={this.buttonPress}
              style={{marginLeft: -60}}
            > 
              <ShoppingCartIcon />
           </TouchableOpacity> 
        </View>

        <View style={{
          paddingHorizontal: 20,
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white'
          }}>HOME OF</Text>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#933d41'
          }}>CROISSANT</Text>
        </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 30}}
          >

            {/* LIST 2 */}

            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#cc858a',
              marginHorizontal: 25,
              borderRadius: 30,
              paddingVertical: 5,
              width: 170
            }}>

              <Image
                source={require('../../images/popular_icon.jpeg')}
                style={{height: 60, width: 60, marginTop: -15, marginLeft: 10}}
              />

             <Text style={{
               fontWeight: 'bold',
               fontSize: 18,
               color: 'white',
               marginLeft: 0
             }}>
               POPULAR
             </Text>
             </View>

             {/* LIST 3 */}

             <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondHomeScreen')}>
              <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#933d41',
                marginHorizontal: 0,
                borderRadius: 30,
                paddingVertical: 5,
                width: 170
                }}>

                <Image
                  source={require('../../images/all_icon.jpeg')}
                  style={{height: 50, width: 50, marginLeft: 17}}
                />

              <Text style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                marginLeft: -5
              }}>
                ALL ITEMS
              </Text>
              </View>
            </TouchableOpacity>

          </ScrollView>
             <View style={{
               alignItems: 'center',
               marginHorizontal: 20,
               flexDirection: 'row',
               marginTop: 30
             }}>
               <View style={{
                 width: '80%'
               }}>
                 <Text style={{
                   fontSize: 22,
                   fontWeight: 'bold',
                 }}>FEATURED TREATS</Text>
               </View>
               <View style={{
                 width: '50%',
                 alignItems: 'flex-end'
               }}>
               </View>
             </View>

             <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/7.jpeg')}
                title='Mango Passionfruit Mochi Croissant'
                price='6.00'
                text='Flaky croissant filled with mango Passionfruit cream and topped with mango flavored mochi.'
                onPress={() => {this.props.addItemToCart("Mango Passionfruit Mochi Croissant");}}
                id='1'
              />

              <ProductScreen
                image={require('../../images/9.jpeg')}
                title='Strawberry Custard Danish'
                price='4.75'
                text='Home-made Pastry cream and fresh strawberry on a Flaky danish'
                onPress={() => {this.props.addItemToCart("Strawberry Custard Danish");}}
                id='2'
              />
              </View>

              <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 5,
             }}>
        
              <ProductScreen
                image={require('../../images/8.jpeg')}
                title='Pistachio Rose Almond Croissant'
                price='5.50'
                text='Flaky double baked croissant with Almond cream flavored with rose water and topped up with crushed pistachio.'
                onPress={() => {this.props.addItemToCart("Pistachio Rose Almond Croissant");}}
                id='3'
              />
            
              <ProductScreen
                image={require('../../images/10.jpeg')}
                title='Ferrero Rocher Croissant'
                price='6.00'
                text='Flaky croissant dipped into milk chocolate hazelnut ganache, filled with nutella.'
                onPress={() => {this.props.addItemToCart("Ferrero Rocher Croissant");}}
                id='4'
              />
             </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
 
  return {
    addItemToCart: (product) => dispatch({type: 
    'ADD_TO_CART', payload: product})
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(HomeScreen));