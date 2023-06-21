import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from './style';
import MeuInput from "../MeuInput/meuInput";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stackNavigation/stack'
import {NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const ButtonAcess = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return <SafeAreaView>
        <View>
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={styles.TouchOp}
         onPress={()=>{navigation.navigate('Home')}}
        >
            <Text style={styles.btnAcessar}>acessar</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
}

export default ButtonAcess;