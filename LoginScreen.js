import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); // Obtém o objeto de navegação

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
    navigation.navigate('Categoria'); // Navega para a tela Categoria
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/Online Doctor-amico 1.png')} // Caminho relativo para a imagem
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Bem vindo de volta!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.esqueceuSenha}>
        <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoLink}>Crie uma nova conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007BFF',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
  },
  esqueceuSenha: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  textoEsqueceuSenha: {
    color: '#007BFF',
  },
  botao: {
    width: '100%',
    padding: 12,
    backgroundColor: '#00264D',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
  },
  textoLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
