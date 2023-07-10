'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        height: "100%",
    },

    filler: {
        height: 120
    },
  
    back: {
        position: "absolute"
    },
  
    page:{
        gap: 12,
        width: "100%",
        padding: 20,
    },

    poster:{
        alignSelf: 'flex-start',
        backgroundColor: 'black',
        width: "100%",
        height: 240,
    },
  
    texttitle:{
        fontSize:40,
        color:'white',
        alignSelf:'flex-start',
        shadowRadius: 8,
        shadowOpacity: 1,
        shadowOffset: {
            height: 2
        }
    },
  
    stream:{
        flex: 1,
        resizeMode: 'contain',
    },
  
    textStream:{
        fontSize:20,
        alignSelf: 'flex-start'
    },
  
    info:{
        padding: 20,
        alignSelf:'center',
        backgroundColor: '#e6e6e6',
        width: "100%",
        borderRadius: 10,
    },

    headerBox: {
        paddingHorizontal: 20, 
        paddingTop: 56, 
        paddingBottom: 12, 
        height: "100%", 
        justifyContent: "space-between", 
        flexDirection: "column"
    },

    streamOption: {
        height: 120,
        width: "40%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        flexGrow: 1
    },

    available: {
        borderWidth: 1,
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        gap: 12,
    }
});

