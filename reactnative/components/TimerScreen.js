import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimerScreen = ({ navigation }) => {
    const [countDown, setCountDown] = useState(10)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countDown <= 0) {
                clearTimeout(timer)
            }
            else {
                setCountDown(countDown - 1)
            }
        }, 1000);

        return () => clearTimeout(timer)
    })

    return (
        <View style={styles.container}>
            <Text style={styles.countDown}>
                {countDown}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        },
        countDown:{
            fontWeight : 'bold',
            fontSize : 100,
            color : '#8BC34A'
        }
})

export default TimerScreen