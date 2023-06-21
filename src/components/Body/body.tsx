import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './style';
import MeuInput from "../MeuInput/meuInput";
import ButtonAcess from "../Button/ButtonAcess";

const Body = () => {
    return <View>
        <Text style={styles.textSenha}>
            senha eletrônica
        </Text>
        <MeuInput />
        <ButtonAcess />

        <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textEsqSenha}>
                esqueci minha senha
            </Text>
        </TouchableOpacity>
    </View>

}

export default Body;