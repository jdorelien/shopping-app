import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ShopScreen from './components/shopscreen';
import SellScreen from './components/sellscreen';
import ItemDetailsScreen from './components/itemdetails'

// custom fonts
const customFonts = {
  'Melodrama-Variable': require('./components/fonts/Melodrama-Variable.ttf'),
  'PlusJakartaSans-Variable':require('./components/fonts/PlusJakartaSans-Variable.ttf'),
  'GeneralSans-Variable':require('./components/fonts/GeneralSans-Variable.ttf'),
};
//loads the custom fonts
const loadFontsAsync = async () => {
  await Font.loadAsync(customFonts);
};

export default function App() {
  useEffect(() => {
    loadFontsAsync();
  }, []);



  // home screen function
  const HomeScreen = ({ navigation }) => {
    // contains the names of the buttons
    const buttonNames = [
      { id: 'Shop', name: 'shop' },
      { id: 'Sell', name: 'sell' },
    ];

     
    // displays the buttons
    const showButtons = ({ item }) => (
       
      <TouchableOpacity style={styles.Homebuttons} onPress={() => navigation.navigate(item.id)}>
    
        <Text style={styles.buttonText}>{item.name}</Text>
   
      </TouchableOpacity>
      
    );

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>selshop</Text>
        <Icon size={80} color="#a7c1eb" name='shopping-bag' type='feather' />
        <FlatList data={buttonNames} renderItem={showButtons} keyExtractor={(item) => item.id} />
        
      </View>
    );
  };
  //navigation to move through the screens
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Melodrama-Variable',
          fontSize: 30,
          color:'white'
          
        },
        headerStyle: {
          backgroundColor:"#a7c1eb"
      
          
        },
      } }
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Sell" component={SellScreen} />
        <Stack.Screen name="Details" component={ItemDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
//stylings and stuff
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:130
       
    },
    Homebuttons: {
      borderColor: 'rgba(78, 116, 289, 1)',
      type: 'outline',
      backgroundColor: 'black',
      marginHorizontal: 50,
      marginVertical: 10,
       width: 200,
        borderWidth: 0,
         borderRadius: 10,
         height: 50,
         borderBottomWidth: 7,
    borderBottomColor:'#3d3d3d',
    borderBottomRadius:30,
    },
    buttonText: {
      color: '#fff',
      fontSize: 30,
      fontFamily: 'Melodrama-Variable', 
     textAlign:'center',
     letterSpacing:3,
     

    },
    titleText: {
      fontSize:40,
      fontFamily:'Melodrama-Variable',
      letterSpacing: 2 ,
      fontWeight:'thin'
    },
 
    
  });

  
