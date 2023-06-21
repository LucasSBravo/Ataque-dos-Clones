import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView, } from 'react-native';
import { estilo } from '../Home/style';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import IconPix from '../../assets/image/IconPix.png';
import speech from '../../assets/image/speech.png';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stackNavigation/stack'
import {NativeStackNavigationProp } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 't1',
    title: 'Yoriichi ',
    bank: 'Banco Slayer',
    payment: 'R$ 500,00',
    date: '11/06/2023',
  },
  {
    id: 't2',
    title: 'Naofumi ',
    bank: 'Banco Shiled',
    payment: 'R$ 10,00',
    date: '30/05/2023',
  },
  {
    id: 't3',
    title: 'Ichigo ',
    bank: 'Banco Bankai',
    payment: 'R$ 19,90',
    date: '14/02/2023',
  },
  
  {
    id: 't4',
    title: 'lelouch ',
    bank: 'Banco Geass',
    payment: 'R$ 138,90',
    date: '28/01/2023',
  },
  {
    id: 't5',
    title: 'Jin ',
    bank: 'Banco Runcadel',
    payment: 'R$ 210,90',
    date: '10/03/2023',
  },
];

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type ItemProps = { title: string, bank: string, payment: string, date: string };

const Item = ({ title, bank, payment, date }: ItemProps) => (
  <View>
    <Text style={estilo.flatItensTitle}>Pix recebido com sucesso</Text>
    <Text style={estilo.flatItens}>Você recebeu um Pix de {title}
      XXX.XXX.XXX-XX do banco {bank},
      no valor de {payment} em {date}</Text>
    <Text style={estilo.breakLine}></Text>
  </View>
)

const Home = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return <SafeAreaView >
    <StatusBar
            hidden={false}
            translucent={true}
            style='light' />
    <View style={estilo.header}>
      <TouchableOpacity 
      activeOpacity={0.7}
      onPress={() => {navigation.navigate('Login')}}
      >
        <AntDesign style={estilo.leftArrow} name="left" size={20} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <AntDesign style={estilo.settings} name="setting" size={24} />
      </TouchableOpacity>

      <Text style={estilo.textNotification}>notificações</Text>

    </View>

    <View>
      <View style={estilo.headerAnterior}>
        <Text style={estilo.textAnterior} >anteriores</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} bank={item.bank}
          payment={item.payment} date={item.date} />}
        keyExtractor={item => item.id}
      />
    </View>
  </SafeAreaView>
}

export default Home;
