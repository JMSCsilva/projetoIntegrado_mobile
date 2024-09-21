import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamento de Consultas Médicas</Text>
            <Text style={styles.description}>
            Um aplicativo de agendamento de consultas médicas facilita a marcação de consultas, permitindo aos pacientes escolher horários e médicos de forma rápida e eficiente, com recursos como notificações de lembrete e histórico de consultas.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#008080',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        color: '#666',
    },
    button: {
        backgroundColor: '#000080',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TelaInicial;
