import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from 'moment';


const TimerScreen = ({ navigation, route}) => {
    const [duration, setDuration] = useState(route.params.duration)
    const [timer, setTimer] = useState(secondsToTimer(route.params.duration))
    const [progress, setProgress] = useState(100)
    
    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (duration < 0) {
                clearTimeout(timeOut)
            }
            else {
                setDuration(duration - 1)
                setTimer(secondsToTimer(duration))
                setProgress((duration/route.params.duration)*100)
            }
        }, 1000);

        return () => clearTimeout(timeOut)
    })

    return (
        <View style={styles.container}>
        <View style={styles.timerProgressView}>
            <AnimatedCircularProgress
                size={300}
                width={20}
                fill={progress}
                tintColor="#8BC34A"
                backgroundColor="gray"
                backgroundWidth={20}
                lineCap="round"
            >
                {
                    (fill) => (
                        <View style={styles.timerView}>
                            <Text style={styles.timerText}>{timer}</Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        </View>
        <Pressable
        style={styles.cancelPressable}
           onPress={()=>{
               navigation.goBack()
           }}
        >
            <Text style={styles.cancelPressableText}>Cancel</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    timerProgressView: {
        alignSelf: 'center'
    },
    timerView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    timerText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#8BC34A'
    },
    cancelPressable: {
        margin: 30,
        height: 80,
        backgroundColor: '#8BC34A',
        borderRadius: 40,
        justifyContent: "center"
    },
    cancelPressableText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
})

const secondsToTimer = (seconds) => {
    return moment.utc(seconds*1000).format('HH:mm:ss')
}

export default TimerScreen