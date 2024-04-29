import React from "react";
import { View, Button, TextInput, Text } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="EX. 1.80"
                keyboardType="numeric"
                />

        <Text>Peso</Text>
                <TextInput
                placeholder="EX. 75.5"
                keyboardType="numeric"
                />

                <Button title="Calcular"/>

            </View>
        </View>
    );
}