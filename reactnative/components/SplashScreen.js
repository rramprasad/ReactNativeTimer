import { CommonActions } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    //const [isSplashTimeOut, setIsSplashTimeOut] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            //navigation.navigate('TimerScreen')
            navigation.dispatch(CommonActions.reset({
                index : 0,
                routes : [{name : 'HomeScreen'}]
            }))
        }, 3000);
    })
    return (
        <View style={styles.container}>
            <Image source={require('../images/app-logo.png')} style={styles.applogo} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 600
    },
    applogo: {
        width: 200,
        height: 200
    }
})

export default SplashScreen