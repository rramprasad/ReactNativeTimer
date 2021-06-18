import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const HomeScreen = ({ navigation }) => {
    const [duration, setDuration] = useState(new Date(moment().startOf('Day')))

    return (
        <View style={styles.container}>
            <Text style={styles.hoursMinutesTitle}>Hours : Minutes</Text>
            <DatePicker
                style={styles.dateTimePicker}
                mode= 'time'
                androidVariant= 'iosClone'
                textColor= "#8BC34A"
                locale= "fr"
                is24hourSource= "locale"
                date={duration}
                onDateChange={setDuration}
            />
            <Pressable
                style={styles.startPressable}
                onPress={() => {
                    let selectedDurationInSeconds = durationToSeconds(duration.getHours()+":"+duration.getMinutes()+":"+duration.getSeconds())
                    //ToastAndroid.show(""+selectedDurationInSeconds,ToastAndroid.SHORT)
                    navigation.navigate("TimerScreen", { "duration": selectedDurationInSeconds })
                }}
            >
                <Text style={styles.startPressableText}>Start</Text>
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
    hoursMinutesTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#8BC34A',
        textAlign: 'center',
        alignSelf: 'center',
    },
    dateTimePicker: {
        fontWeight: 'bold',
        color: '#8BC34A',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    startPressable: {
        margin: 30,
        height: 80,
        backgroundColor: '#8BC34A',
        borderRadius: 40,
        justifyContent: "center"
    },
    startPressableText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
})

const durationToSeconds = (timer) => {
    return moment(timer, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');
}

export default HomeScreen