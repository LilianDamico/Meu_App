import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyComponent()   {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardSubtitle}>Criando Aplicações para Android e iOS</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    card:   {
        color: '#fff',
        backgroundColor:'#008B8B',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 12
    },
    cardTitle:  {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    cardSubtitle: {
        color: '#fff',
        fontSize: 18
    },
});
