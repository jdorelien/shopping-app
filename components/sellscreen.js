import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
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




const SellScreen = ({ navigation  }) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  

//functon allows the user to pick an image from their image library
const imageSelector = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

      console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
   <Text style={styles.sellHeader}> Upload an item to the shop</Text>
     <Text style={styles.titleStyles}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="What's the name of your item?"
         placeholderTextColor="#9ca5b5"
        onChangeText={text => setItemName(text)}
        value={itemName}
      />
        <Text style={styles.titleStyles}Styles>Description:</Text>
      <TextInput
        style={styles.inputDesc}
        placeholder="Tell us about your item!"
        placeholderTextColor="#9ca5b5"
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <Text style={styles.titleStyles}>Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="$$$"
        placeholderTextColor="#9ca5b5"
        onChangeText={text => setPrice(text)}
        value={price}
      />
     <TouchableOpacity onPress={imageSelector}>
  <View style={styles.imageUpload}>
    <Text style={{marginRight: 2 , color:'#ffffff',fontFamily:'PlusJakartaSans-Variable', fontSize:15}}>UPLOAD AN IMAGE</Text>
    <Icon size={30} color='#ffffff' name='upload' type='antdesign' />
 </View>
  <View>
   {image && <Image source={{ uri: image }} style={{ width: 200, height: 300 }} />}
    </View>
</TouchableOpacity>

      <Button  color='black' title="Submit"   />
    </View>
  );
};
//styling and stuff 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    fontFamily:'PlusJakartaSans-Variable',
    margin:20
  },
  imageUpload:{
    backgroundColor:'#a7c1eb',
    textAlign:'center',
  letterSpacing:2,
 
    margin:5,
    height:55,
   
    
    color:'#ebebeb',
    fontFamily:'PlusJakartaSans-Variable'
    
  },
  inputDesc:{
height:50,
        borderBottomWidth: 2,
        fontFamily:'PlusJakartaSans-Variable'
   },
  sellHeader:{
    margin:8,
    textAlign:'center',
    fontSize:30,
    fontFamily:'PlusJakartaSans-Variable',
    fontWeight:'thin'
    
  },
titleStyles:{
  fontFamily:'PlusJakartaSans-Variable',
  fontSize:15,
  margin:3,
  fontWeight:'bold'
},

});

export default SellScreen;