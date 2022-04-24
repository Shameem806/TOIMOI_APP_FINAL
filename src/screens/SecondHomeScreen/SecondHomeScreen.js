import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ProductScreen from '../ProductScreen';
import ShoppingCartIcon from '../../../ShoppingCartIcon';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {Auth} from 'aws-amplify';


class SecondHomeScreen extends React.Component{

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

             <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#933d41',
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
            </TouchableOpacity>

             {/* LIST 3 */}

             <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#cc858a',
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
                 }}>COMPLETE TREATS</Text>
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
                image={require('../../images/1.jpeg')}
                title='Cream Corn Cheese Danish'
                price='5.25'
                text='Flaky danish filled with creamy corn kennel and mozzarella cheese.'
                onPress={() => {this.props.addItemToCart("Cream Corn Cheese Danish")}}
                id='1'
              />

              <ProductScreen
                image={require('../../images/2.jpeg')}
                title='Oreo Chocolate Sea Salt Chiffon Cake Roll'
                price='22.00'
                text='Cloudy soft Dark Chocolate Chiffon Cake filled with marscapone cream , crashed Oreo pieces and a hit of Sea Salt.'
                onPress={() => {this.props.addItemToCart("Oreo Chocolate Sea Salt Chiffon Cake Roll");}}
                id='2'
              />
              </View>

              <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 5,
             }}>
        
              <ProductScreen
                image={require('../../images/3.jpeg')}
                title='Taro Basque Cheese Cake'
                price='5.50'
                text='Mashed Taro Paste and gooey half baked cheesecake topped with whipped coconut cream'
                onPress={() => {this.props.addItemToCart("Taro Basque Cheese Cake");}}
                id='3'
              />
            
              <ProductScreen
                image={require('../../images/4.jpeg')}
                title='Dragon Fruit Yogurt Croissant'
                price='5.50'
                text='Pink Croissant Filled with Dragon Fruit Yogurt Cream , decorated with Pink Meringue'
                onPress={() => {this.props.addItemToCart("Dragon Fruit Yogurt Croissant");}}
                id='4'
              />
             </View>

             <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/5.jpeg')}
                title='Taro Tricolor Puff'
                price='4.75'
                text='Flaky yet light puff pastry filled with house-made taro paste.
                55g/pcs, contains dairy, gluten.'
                onPress={() => {this.props.addItemToCart("Taro Tricolor Puff");}}
                id='5'
              />

              <ProductScreen
                image={require('../../images/6.jpeg')}
                title='Salted Egg Yolk Puff'
                price='4.75'
                text='Tricolor puff pastry filled with cured salted egg yolk and red bean paste'
                onPress={() => {this.props.addItemToCart("Salted Egg Yolk Puff");}}
                id='6'
              />
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
                id='7'
              />

              <ProductScreen
                image={require('../../images/8.jpeg')}
                title='Pistachio Rose Almond Croissant'
                price='5.50'
                text='Flaky double baked croissant with Almond cream flavored with rose water and topped up with crushed pistachio.'
                onPress={() => {this.props.addItemToCart("Strawberry Custard Danish");}}
                id='8'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/9.jpeg')}
                title='Strawberry Custard Danish'
                price='4.75'
                text='Home-made Pastry cream and fresh strawberry on a Flaky danish'
                onPress={() => {this.props.addItemToCart("Pistachio Rose Almond Croissant");}}
                id='9'
              />

              <ProductScreen
                image={require('../../images/10.jpeg')}
                title='Ferrero Rocher Croissant'
                price='6.00'
                text='Flaky croissant dipped into milk chocolate hazelnut ganache, filled with nutella.'
                onPress={() => {this.props.addItemToCart("Ferrero Rocher Croissant");}}
                id='10'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/11.jpeg')}
                title='French Pastry Box (5pcs)'
                price='22.00'
                text='A box of Assorted French Viennoiserie, hand laminated, flaky yet flavorful.                  
                  Items may vary depending on the weekly menu (check website)!'
                onPress={() => {this.props.addItemToCart("French Pastry Box (5pcs)");}}
                id='11'
              />

              <ProductScreen
                image={require('../../images/12.jpeg')}
                title='Matcha Custard Moon Cake'
                price='4.50'
                text='Matcha flavored mochi filled with house-made custard.
                50g/pcs, contains dairy, GF. (Refrigerate Needed)'
                onPress={() => {this.props.addItemToCart("Matcha Custard Moon Cake");}}
                id='12'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/13.jpeg')}
                title='Pineapple Tart'
                price='4.50'
                text='Sweet cookie dough filled with house-made pineapple jam, sweet and tart. Ingredients: butter, flour, sugar, salt, pineapple, lemon juice'
                onPress={() => {this.props.addItemToCart("Pineapple Tart");}}
                id='13'
              />

              <ProductScreen
                image={require('../../images/14.jpeg')}
                title='Red Bean Mochi Bicolor Puff'
                price='4.75'
                text='Macha flavored puff filled with house-made red bean paste and stretchy mochi. 50g/pcs, contains dairy, glute, nut-free.'
                onPress={() => {this.props.addItemToCart("Red Bean Mochi Bicolor Puff");}}
                id='14'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/15.jpeg')}
                title='A-Strawberry Red Bean Mochi'
                price='4.50'
                text='Round shaped strawberry flavored mochi stuffed with fresh strawberry and house-made sweet red bean paste. 60g/pcs, contains dairy, GF. (Refrigerate Needed)'
                onPress={() => {this.props.addItemToCart("A-Strawberry Red Bean Mochi");}}
                id='15'
              />

              <ProductScreen
                image={require('../../images/16.jpeg')}
                title='Coconut Cherry Blossom Puff'
                price='4.75'
                text='Strawberry flavored puff filled with coconut cream , shaped as a cherry blossom. 50g/pcs, contains dairy, gluten, white sesame.'
                onPress={() => {this.props.addItemToCart("Coconut Cherry Blossom Puff");}}
                id='16'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/17.jpeg')}
                title='Raspberry Lychee Danish'
                price='5.50'
                text='House made Matcha Custard on a bed of croissant dough, decorated with Lychee, Raspberry and Editable Rose Petals. (ONLINE ITEM ONLY)'
                onPress={() => {this.props.addItemToCart("Raspberry Lychee Danish");}}
                id='17'
              />

              <ProductScreen
                image={require('../../images/18.jpeg')}
                title='Portuguese Egg Tart(half dozen)'
                price='18.00'
                text='Puff pastry filled with jiggly custard'
                onPress={() => {this.props.addItemToCart("Portuguese Egg Tart(half dozen)");}}
                id='18'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/19.jpeg')}
                title='Savory Danish (Miso Bacon)'
                price='5.25'
                text='Croissant dough rolled up with miso paste and topped up with furikake.'
                onPress={() => {this.props.addItemToCart("Savory Danish (Miso Bacon)");}}
                id='19'
              />

              <ProductScreen
                image={require('../../images/20.jpeg')}
                title='Almond Croissant'
                price='4.75'
                text='FLAKY double-baked croissant with almond cream in and out , topped with almond slices'
                onPress={() => {this.props.addItemToCart("Almond Croissant");}}
                id='20'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/21.jpeg')}
                title='Strawberry Cheesecake Cruffin'
                price='5.50'
                text='Super Cute CRUFFIN filled with Cream cheese filling and Strawberry Jam'
                onPress={() => {this.props.addItemToCart("Strawberry Cheesecake Cruffin");}}
                id='21'
              />

              <ProductScreen
                image={require('../../images/22.jpeg')}
                title='Ube Chiffon Cake Roll'
                price='21.00'
                text='Cloudy soft Chiffon Roll Cake with Ube cream'
                onPress={() => {this.props.addItemToCart("Ube Chiffon Cake Roll");}}
                id='22'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/23.jpeg')}
                title='Matcha Almond Croissant'
                price='5.50'
                text='FLAKY double-baked croissant with Matcha Almond Cream in and out, topped with sliced almond and MORE Matcha.'
                onPress={() => {this.props.addItemToCart("Matcha Almond Croissant");}}
                id='23'
              />

              <ProductScreen
                image={require('../../images/24.jpeg')}
                title='Pear Cinnamon Croissant'
                price='5.50'
                text='Flaky croissant filled with pear cinnamon compote and almond cream'
                onPress={() => {this.props.addItemToCart("Pear Cinnamon Croissant");}}
                id='24'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/25.jpeg')}
                title='Black Sesame Marshmallow Croissant'
                price='5.50'
                text='FLAKY double-baked croissant with Black Sesame Almond Cream in and out, topped with melted Mini Marshmallow.'
                onPress={() => {this.props.addItemToCart("Black Sesame Marshmallow Croissant");}}
                id='25'
              />

              <ProductScreen
                image={require('../../images/26.jpeg')}
                title='Melon Bun'
                price='5.25'
                text='Soft milky bread filled with house-made custard, covered with crunchy cookie.'
                onPress={() => {this.props.addItemToCart("Melon Bun");}}
                id='26'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/27.jpeg')}
                title='Furikake Pork Floss Croissant'
                price='5.50'
                text='Flacky croissant glazed with condensed milk and covered with Furikake and Pork Floss'
                onPress={() => {this.props.addItemToCart("Furikake Pork Floss Croissant");}}
                id='27'
              />

              <ProductScreen
                image={require('../../images/28.jpeg')}
                title='UBE Butter Croissant'
                price='5.50'
                text='Flaky Croissant filled with UBE butter'
                onPress={() => {this.props.addItemToCart("UBE Butter Croissant");}}
                id='28'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/29.jpeg')}
                title='Berries Tiramisu'
                price='8.00'
                text='Home made Lady Finger Cookie layered with mascapone cream and Fresh Made Mix Berry jam topped up with a lot of berries!'
                onPress={() => {this.props.addItemToCart("Berries Tiramisu");}}
                id='29'
              />

              <ProductScreen
                image={require('../../images/30.jpeg')}
                title='Flaky Croissant'
                price='4.50'
                text='27*4 layers, our signature butter croissant!'
                onPress={() => {this.props.addItemToCart("Flaky Croissant");}}
                id='30'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/31.jpeg')}
                title='Ube Mochi Waffle Sandwich'
                price='6.50'
                text='Thick sliced brioche sandwich spread with UBE BUTTER, UBE PASTE and MOCHI, Hot pressed in a waffle maker.'
                onPress={() => {this.props.addItemToCart("Ube Mochi Waffle Sandwich");}}
                id='31'
              />

              <ProductScreen
                image={require('../../images/32.jpeg')}
                title='Everything Cream Cheese Croissant'
                price='5.50'
                text='Flaky croissant filled with scallions cream cheese, topped up with everything seasoning'
                onPress={() => {this.props.addItemToCart("Everything Cream Cheese Croissant");}}
                id='32'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/33.jpeg')}
                title='Cranberry Almond Nougat'
                price='7.50'
                text='Chewy and Crunchy Nougat packed with cranberry, almond and pistachio.'
                onPress={() => {this.props.addItemToCart("Cranberry Almond Nougat");}}
                id='33'
              />

              <ProductScreen
                image={require('../../images/34.jpeg')}
                title='Cherry Blossom Croissant'
                price='6.00'
                text='[SEASONAL SPECIAL]Bi-Color pink croissant filled with Cherry Blossom Cream'
                onPress={() => {this.props.addItemToCart("Cherry Blossom Croissant");}}
                id='34'
              />
            </View>

            <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/35.jpeg')}
                title='Ube Tres Leches'
                price='10.00'
                text='Ube sponge cake soaked with three kinds of milk, frost with Ube whipped cream'
                onPress={() => {this.props.addItemToCart("Ube Tres Leches");}}
                id='35'
              />

              <ProductScreen
                image={require('../../images/36.jpeg')}
                title='Salted Egg Yolk Croissant'
                price='6.00'
                text='Flaky Croissant filled with cheesy salted egg yolk cream, pork floss and furikake.'
                onPress={() => {this.props.addItemToCart("Salted Egg Yolk Croissant");}}
                id='36'
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

export default connect(null, mapDispatchToProps)(withNavigation(SecondHomeScreen));