import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Neurologia = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá, Cleomar</Text>
        <Image 
          source={{ uri: 'https://example.com/user-avatar.png' }} 
          style={styles.avatar}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image 8.png')} // Caminho relativo para a imagem
          style={styles.imagem}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.doctorName}>Dr. Hans Chucrutes</Text>
          <Text style={styles.doctorSpecialty}>Neurologia</Text>
          <Text style={styles.rating}>★★★★★</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Atendimento')}
      >
        <Text style={styles.buttonText}>Marcar Atendimento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Ajuste a cor para garantir boa visibilidade
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
  },
  descriptionContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#000080',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default Neurologia;
