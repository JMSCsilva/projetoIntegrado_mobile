import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // ou outra biblioteca de ícones que você preferir
import { faHeartbeat, faBrain, faMedkit } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Olá, Cleomar</Text>
        <Image 
          source={{ uri: 'https://example.com/user-avatar.png' }} 
          style={styles.avatar}
        />
      </View>
      <TextInput 
        placeholder="Procure aqui..." 
        style={styles.searchInput} 
      />
      <Text style={styles.categoriesTitle}>Categorias</Text>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.category}
        onPress={()=> navigation.navigate('Cardiologia')}>
          <View style={styles.iconWrapper}>
            <Icon name="heartbeat" size={40} color="#000080" />
          </View>
          <Text style={styles.categoryText}>Cardiologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}
        onPress={()=> navigation.navigate('Neurologia')}>
          <View style={styles.iconWrapper}>
            <Icon name="stethoscope" size={40} color="#000080" />
          </View>
          <Text style={styles.categoryText}>Neurologista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}
        onPress={()=> navigation.navigate('Dermatologia')}>
          <View style={styles.iconWrapper}>
            <Icon name="stethoscope" size={40} color="#000080" />
          </View>
          <Text style={styles.categoryText}>Dermatologista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  category: {
    alignItems: 'center',
  },
  iconWrapper: {
    marginBottom: 8,
    backgroundColor: '#000080',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    color: '#000080',
  },
});

export default HomeScreen;

