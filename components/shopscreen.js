import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';


//font stuff
export const customFonts = async () => {
  await Font.loadAsync({
    'GeneralSans-Variable':require('./fonts/GeneralSans-Variable.ttf'),
    'Melodrama-Variable':require('./fonts/Melodrama-Variable.ttf'),
        'Montserrat-Variable':require('./fonts/Montserrat-Variable.ttf'),
    'PlusJakartaSans-Variable': require('./fonts/PlusJakartaSans-Variable.ttf'),
  
  });
};

//array of objects that contains the price, image, description, name, and id properies
const shopItems = [
  { id: '1', name: 'Camo Glam' , price:'$110', image:require('./images/look1.png' ,), desc:'"The charm of the Blumarine girl is ever-changing and mercurial; it lights up to individual tunes, like a solfège that follows peculiar melodies."'},
  { id: '2', name: 'Satin Blue Sleek ', price:'$120' , image:require('./images/look2.jpg') , desc:'"She is like no other. Romanticism for her is a seductive weapon; she’s fierce but mischievous, strong-willed but ingénue;"'},
  { id: '3', name: 'Bubblegum Pink Princess' , price:'$111' ,image:require('./images/look3.jpg'), desc:'"She likes to conquer, but she loves being desirable. She plays with fashion like a spoiled little child."'},
  { id: '4', name: 'Denim Domination', price:'$210' ,image:require('./images/look4.jpg'), desc:'"Always looking for something new, she’s true to herself, and follows her curiosity. She’s a free spirit who wants to please who she likes."'},
 
];

// contains the name, price, and images of the items rendering items from the array above.
const ShopScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', { item })}
    >
        <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <View style={styles.iconStyle}>
    <Icon size={25} color="black" name='shopping-cart' type='feather' />
    </View>
      <FlatList
        data={shopItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      
    </View>
  );
};
//styling and customization :)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    

  },
item: {
   padding:15,
    marginVertical: 2,
       flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
marginLeft:2,
   marginBottom:140,
    position: 'relative',
    margin:20
    
},
  title: {
    fontSize: 15,
textAlign:'center',
marginLeft:30,
fontFamily:'PlusJakartaSans-Variable',
fontWeight:'bold',
  fontStyle: 'italic',

  
  },
  price: {
    color: '#565a61',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'GeneralSans-Variable',
     fontStyle: 'italic'

  },
   priceContainer: {
    top:180,
    margin:30
  },
   imageContainer: {
    width: 100,
    height: 200,
     flex:1,
      marginLeft:2,
      marginTop:40,
      paddingTop:60,
      marginRight:60,

    
       },
  image:{
    width: 120,
    height: 200,
  marginLeft:20,
     borderRadius: 20,
        borderLeftWidth: 8,
      borderColor:'#ebebeb',
      
  },
 nameContainer:{
top:200
   
 },
 iconStyle:{
   flex:1,
alignItems:'left',
marginLeft:280,


 }

});

export default ShopScreen;