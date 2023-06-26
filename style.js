'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        height: "100%"
    },

    filler: {
        backgroundColor:'#F0F0F0',
        height:250,
    },
  
    back: {
        position: "absolute"
    },
  
    page:{
        alignItems:'flex-start',
        justifyContent:'center',
        gap:10,
    },

    poster:{
        alignSelf: 'flex-start',
        backgroundColor: 'grey',
        width: 390,
        height: 300,
    },
  
    title:{
        padding: 10
    },
  
    texttitle:{
        fontSize:40,
        color:'white',
        alignSelf:'flex-start',
    },
  
    stream:{
        alignSelf:'center',
        padding: 20,
        backgroundColor:'#e6e6e6',
        width: 350,
        borderRadius: 10,
    },
  
    textStream:{
        fontSize:20,
        alignSelf: 'flex-start'
    },
  
    info:{
        padding: 20,
        alignSelf:'center',
        backgroundColor: '#e6e6e6',
        width: 350,
        borderRadius: 10,
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
  
    background:{
        alignSelf:'flex-start',
        width: 390,
        height: 300,
        paddingTop : 40,
        paddingLeft : 20,
    },
});

