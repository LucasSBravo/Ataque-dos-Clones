import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, } from 'react-native';
import { style } from './style';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import IconPix from '../../assets/image/IconPix.png';
import speech from '../../assets/image/speech.png';

const Footer = () => {
    return <SafeAreaView>
        <View>
            <TouchableOpacity activeOpacity={0.7}>
                <Image style={style.imagePix} source={IconPix} />
                <Text style={style.pix}>
                    Pix
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
                <Feather style={style.iTokenIcon} name="info" size={24} color="white" />
                <Text style={style.iToken}>
                    iToken
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
                <Image style={style.helpIcon} source={speech} />
                <Text style={style.help}>
                    Ajuda
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}

export default Footer;