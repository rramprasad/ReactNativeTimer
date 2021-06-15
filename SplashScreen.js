import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const SplashScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>SplashScreen</Text>
            <Button title="Go to Timer"
                    onPress={ () =>
                            navigation.navigate('TimerScreen', { name: 'Jane' })
                    }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : 'white',
        height : 600
    },
    title : {
        textAlign : 'center',
        textDecorationColor : '#110000',
        fontSize : 20
    }
})

export default SplashScreen