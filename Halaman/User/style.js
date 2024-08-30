import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


    input : {
      borderWidth : 1,
      width :'100%',
      height : 50,
      borderRadius : 10,
      padding : 10,
      marginVertical: 10,

    },

    editButton:{
      padding:10,
      marginBottom:10,
      backgroundColor:'lightblue',
      borderRadius:5,
      marginRight: 5,
    },
    deleteButton: {
      padding: 10,
      backgroundColor:'lightcoral',
      borderRadius: 5,
    },
    item : {
      padding:15,
      marginVertical: 5,
      backgroundColor: '#f9f9f9',
      borderWidth:1,
      borderColor: '#ddd',
      borderRadius: 5,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    button: {
      padding: 20,
      backgroundColor: 'lightblue',
      borderRadius: 10,
      marginTop: 20,
    },

    buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    addButton: {
      padding: 20,
      marginBottom: 10,
      backgroundColor:'lightblue',
      borderRadius:10,
      width:'100%',
    },
price: {
  fontSize:20,
  color: 'green',
  marginBottom:8,
  textAlign: 'center',
},
description: {
  fontSize:16,
},
title: {
  fontSize: 28,
  fontWeight: 'bold',
},
    
  });