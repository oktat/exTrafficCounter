import { Text, View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

export default function OperatorScreen({ navigation }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        navigation.addListener('tabPress', (e) => {
            AsyncStorage.getItem('counter').then(res => {
                setCounter(res)
            })
        });        
    }, [navigation]);

    useEffect(() => {
        AsyncStorage.setItem('counter', counter)
    }, [counter]);

    function zero() {
        setCounter(0);
    }

    function decrement() {
        setCounter(Number(counter) - 1);
    }
    

    return(
        <View style={{
            flex: 1,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Operátor</Text>
            <Text>{counter}</Text>
            <Button title="Nulla" onPress={zero} />
            <Button title="Csökkent" onPress={decrement} />
        </View>
    );
}
