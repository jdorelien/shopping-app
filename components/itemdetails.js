import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import * as Font from 'expo-font';

//font stuff 
export const customFonts = async () => {
  await Font.loadAsync({
        'Montserrat-Variable':require('./fonts/Montserrat-Variable.ttf'),
    'PlusJakartaSans-Variable': require('./fonts/PlusJakartaSans-Variable.ttf'),
    'GeneralSans-Variable':require('./fonts/GeneralSans-Variable.ttf'),
    'Melodrama-Variable':require('./fonts/Melodrama-Variable.ttf'),
  });
};


const ItemDetailsScreen = ({ route }) => {
  const { item } = route.params;
//this returns the items from the const shopItems array 
//the title, price, image, a "heart" icon and a description along with a "add to cart button"
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
         <Icon size={25} color="black" name='heart' type='feather' />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <TouchableOpacity>
        <Text style={styles.cartButton}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//Stylings for the containers and properties on the page etc..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'PlusJakartaSans-Variable', 
    textAlign:'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#565a61',
    fontStyle: 'italic',
    textAlign:'center'
  },
  cartButton: {
  color:'white',
  backgroundColor:'black',
  width:120,
  height:40,
  textAlign:'center',
  padding:5,
marginVertical:20,
marginHorizontal:90,
borderRadius:9,
fontSize:15,
borderBottomWidth: 5,
    borderBottomColor:'#3d3d3d',
    fontFamily:'PlusJakartaSans-Variable',
        letterSpacing:2
  },
  desc:{
  marginVertical:10,
  fontFamily:'GeneralSans-Variable',
  fontSize:15
  }
});

export default ItemDetailsScreen;
