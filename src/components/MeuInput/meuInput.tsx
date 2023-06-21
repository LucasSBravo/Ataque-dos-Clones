import { AntDesign, } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import { styles } from './style';

const MeuInput = () => {
    return <SafeAreaView>
        <View>
            <AntDesign style={styles.btnLock} name="lock" size={27} color="white" />
            <TextInput
                secureTextEntry
                keyboardType='number-pad'
                placeholderTextColor='white'
                style={styles.input}
                maxLength={6}
            />
        </View>
    </SafeAreaView>
}

export default MeuInput;