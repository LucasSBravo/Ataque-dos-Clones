import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { style } from './style';
import { StatusBar } from 'expo-status-bar';

const Header = () => {

    return <View>
        <StatusBar
            hidden={false}
            translucent={false}
            backgroundColor='lightgrey'
            style='light' />
        <Text style={style.title}>
            Olá, Lucas {'\n'}
        </Text>
        <FontAwesome5 style={style.iconUser} name="user-circle" size={40} color="grey" />
        <Text style={style.agencia}>
            ag:***0  c/c ****1-1
        </Text>
        <AntDesign style={style.btnDown} name="down" size={24} color="orange" />
    </View>
}

export default Header;