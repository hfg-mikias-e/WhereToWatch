'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        height: "100%",
        backgroundColor: "#121212"
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
        paddingTop: 28
    },

    poster:{
        alignSelf: 'flex-start',
        backgroundColor: 'black',
        width: "100%",
        height: 240,
    },
  
    title:{
        fontSize:40,
        fontWeight: 600,
        color:'white',
        alignSelf:'flex-start',
        shadowRadius: 8,
        shadowOpacity: 1,
        shadowOffset: {
            height: 2
        }
    },
    header: {
        fontSize:24,
        color:'white',
        fontWeight: 600,
        marginBottom: 16
    },
    text: {
        fontSize:16,
        color:'white',
        opacity: 0.9
    },
    infotext: {
        fontSize:14,
        color:'white',
        opacity: 0.6,
        fontWeight: 300
    },
  
    stream:{
        flex: 1,
        resizeMode: 'contain',
        shadowRadius: 20,
        shadowOpacity: 0.6,
        shadowColor: "white",
        shadowOffset: {
            height: 0
        },
        overflow: "visible"
    },
    streamOption: {
        height: 90,
        width: "100%",
        padding: 16,
        flexGrow: 1,
        marginVertical: 20
    },
  
    info:{
        padding: 20,
        alignSelf:'center',
        backgroundColor: "#202020",
        width: "100%",
        borderRadius: 4
    },
    general: {
        display: "flex",
        gap: 20
    },

    headerBox: {
        paddingHorizontal: 20, 
        paddingTop: 56, 
        paddingBottom: 12, 
        height: "100%", 
        justifyContent: "space-between", 
        flexDirection: "column"
    },

    WelcomeBox: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 64,
        paddingBottom: 32,
    }, 

    available: {
        borderRadius: 4,
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        marginVertical: 20
    }
});

