import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
    
class CartCheckoutScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
         component : 
            <View style={styles.root}>
                <Text style={styles.text}>ORDER PLACED</Text>
                <LottieView 
                    source={require('../../../assets/checkmark.json')} 
                    autoPlay 
                    loop 
                    style={styles.checkmark}
                />
            </View>
            
        }
       }

    componentDidMount() {
        this.timeoutHandle = setTimeout(()=>{
            this.setState({ component: this.props.navigation.navigate('CartScreen') })
        }, 2500);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }

    render() 
    {    
        return (
            this.state.component
        );
    };
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'green',
        height: 700,
    },
    text: {
        color: 'white',
        fontSize: 50,
        marginTop: 150,
        textAlign: 'center',
    },
    checkmark: {
        width: 350,
        marginTop: -20
    }
});


export default CartCheckoutScreen;