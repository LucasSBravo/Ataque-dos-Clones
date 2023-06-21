import { StyleSheet, Platform, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        // backgroundColor:'white',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 40,
        width: 260,
        textAlign:"center",
        borderRadius: 7,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        // borderWidth: 1
    },
    btnLock:{
        marginTop:45,
        marginLeft:40,
        position:'absolute'
    },
})