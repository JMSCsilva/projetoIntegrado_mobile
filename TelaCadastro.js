import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const TelaCadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);

    // Navega para a outra tela após o cadastro
    navigation.navigate('OutraTela');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Criar Conta</Text>
      <Text style={styles.subtitulo}>
        Crie uma conta para explorar todas as vagas disponíveis
      </Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.textoLink}>Já tem uma conta?</Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007BFF', // Cor semelhante à do imagem
  },
  subtitulo: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 32,
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
  botao: {
    width: '100%',
    padding: 12,
    backgroundColor: '#00264D', // Botão azul escuro semelhante ao da imagem
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

export default TelaCadastro;
