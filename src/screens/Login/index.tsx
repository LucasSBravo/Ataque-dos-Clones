import React from 'react';
import { View,} from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header/header';
import Body from '../../components/Body/body';
import Footer from '../../components/Footer';


const Login = () => {
    return <View style={styles.container}>
      
        <Header />
        <Body />
        <Footer />
    </View>
}

export default Login;