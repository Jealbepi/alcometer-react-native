const { StyleSheet } = require("react-native")

const DarkStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0100335b',
        padding: 50,
        paddingTop: 80,
    },
    containerInner: {
        backgroundColor: '#d6daffff',
        padding: 15,
        paddingBottom: 15,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0, 
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.60,
        elevation: 15
    },

    linearGradient: {
        flex: 1,
    },

    mode: {
        paddingBottom: 0
    },

    header: {
        alignSelf: 'center',
        padding: 10,
        paddingBottom: 0,
        color: '#223168',
        fontWeight: 'bold'
    },

    header2: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 35,
        fontWeight: 'bold'
    },
    
    titles: {
        flexDirection: 'row'
    },
    titleBottles: {
        padding: 10,
        paddingLeft: 8,
        fontSize: 22,
        color: '#223168',
        fontWeight: 'bold'
    },
    titleHours: {
        padding: 10,
        paddingLeft: 40,
        fontSize: 22,
        color: '#223168',
        fontWeight: 'bold'
    },
    
    numInput: {
        flexDirection: 'row',
        width: 200,
        borderRadius: 10,
        color: '#223168',
        borderColor: '#223168'
    },
    numInputBottles: {
        paddingBottom: 15,
    },
    numInputHours: {
        paddingLeft: 9,
    },
    
    borderColor: '#223168',
    
    icon: {
        color: '#223168',
    },
    
    color1: '#223168',
    
    radioButtonsGroup: {
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    uncheckedColor: '#223168',
    
    TextInput: {
        backgroundColor: '#ced2ffff',
    },

    colorWeight: '#223168',
    
    trackColorTrue: '#2e3e76',
    
    radioTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#223168'
    },

    calculate: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#223168',
        borderRadius: 10,
        padding: 40,
        paddingTop: 10,
        paddingBottom: 10
    }
})

const LightStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63000018',
        padding: 50,
        paddingTop: 80,
    },
    containerInner: {
        backgroundColor: '#ffffff',
        padding: 15,
        paddingBottom: 15,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0, 
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.60,
        elevation: 15
    },

    linearGradient: {
        flex: 1,
    },

    mode: {
        paddingBottom: 0
    },

    header: {
        alignSelf: 'center',
        padding: 10,
        paddingBottom: 0,
        color: '#2e3e76',
        fontWeight: 'bold'
    },

    header2: {
        alignSelf: 'center',
        padding: 10,
        color: '#2e3e76',
        fontSize: 35,
        fontWeight: 'bold'
    },

    TextInput: {

    },

    titles: {
        flexDirection: 'row'
    },
    titleBottles: {
        padding: 10,
        paddingLeft: 8,
        fontSize: 22,
        color: '#2e3e76',
        fontWeight: 'bold'
    },
    titleHours: {
        padding: 10,
        paddingLeft: 40,
        fontSize: 22,
        color: '#2e3e76',
        fontWeight: 'bold'
    },
  
    numInput: {
        flexDirection: 'row',
        width: 200,
        borderRadius: 10,
        color: '#2e3e76',
        borderColor: '#2e3e76'
    },
    numInputBottles: {
        paddingBottom: 15,
    },
    numInputHours: {
        paddingLeft: 9
    },

    borderColor: '#2e3e76',

    icon: {
        color: '#2e3e76',
    },
    color: '#2e3e76',

    radioButtonsGroup: {
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },

    uncheckedColor: '#2e3e76',

    colorWeight: '#1f1f1f',

    trackColor: '#2e3e76',

    radioTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2e3e76'
    },

    calculate: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#2e3e76',
        borderRadius: 10,
        padding: 40,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export {DarkStyle, LightStyle}