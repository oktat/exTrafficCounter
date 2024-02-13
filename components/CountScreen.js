import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CountScreen({ navigation }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        navigation.addListener('tabPress', (e) => {
            AsyncStorage.getItem('counter').then(res => {
                setCounter(res)
            })
        });        
    }, [navigation]);    
    
    function increment() {
        setCounter( Number(counter)+1)
    }

    useEffect(() => {
        AsyncStorage.setItem('counter', counter)
    }, [counter]);
    
    return(
        <View style={{
            flex: 1,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text onPress={() => navigation.navigate('Operátor', { adat: counter})}>Forgalom</Text>
            <Text>{counter}</Text>

            <Pressable onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>Növel</Text>
            </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 3,
        margin: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
    },
  });
  