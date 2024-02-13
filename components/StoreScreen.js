import { Text, View } from "react-native";

export default function StoreScreen({ navigation }) {
    return(
        <View style={{
            flex: 1,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Mentés</Text>
        </View>
    );
}
