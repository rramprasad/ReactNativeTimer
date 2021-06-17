import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.countDown}>10:20:30</Text>
            <Button 
                style={styles.startButton} 
                onPress={() => {
                    //navigation.navigate("TimerScreen",{"hours":hours,"minutes":minutes,"seconds":seconds})
                    navigation.navigate("TimerScreen",{"duration":10})
                    //navigation.navigate("TimerScreen")
                }}
                title="Start"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default HomeScreen