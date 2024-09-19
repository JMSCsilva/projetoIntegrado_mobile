// src/Atendimento.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Atendimento = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return monthNames[date.getMonth()];
  };

  const handleConfirm = () => {
    if (selectedDate) {
      Alert.alert('Data confirmada', `Você selecionou ${selectedDate}`);
      navigation.navigate('OutraTela', { date: selectedDate });
    } else {
      Alert.alert('Nenhuma data selecionada', 'Por favor, selecione uma data.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Cleomar</Text>
      </View>
      <Text style={styles.title}>Marcar Atendimento</Text>
      <Calendar
        style={styles.calendar}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'red' },
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: '#00adf5',
          arrowColor: 'blue',
        }}
      />
      {selectedDate ? (
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>Sua Data</Text>
          <Text style={styles.date}>{new Date(selectedDate).getDate()}</Text>
          <Text style={styles.month}>{getMonthName(selectedDate)}</Text>
          <Text style={styles.timeLabel}>Manhã</Text>
          <Text style={styles.time}>00:00 - 00:00</Text>
          <Text style={styles.timeLabel}>Tarde</Text>
          <Text style={styles.time}>00:00 - 00:00</Text>
        </View>
      ) : (
        <Text style={styles.noDateText}>Selecione uma data no calendário.</Text>
      )}

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const OutraTela = ({ route }) => {
  const { date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Selecionada</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Atendimento">
      <Stack.Screen name="Atendimento" component={Atendimento} />
      <Stack.Screen name="OutraTela" component={OutraTela} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#008080',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendar: {
    marginVertical: 10,
  },
  selectedDateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#008080',
  },
  month: {
    fontSize: 20,
    color: '#555',
  },
  timeLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  noDateText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999',
  },
  confirmButton: {
    backgroundColor: '#008080',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  confirmText: {
    color: 'white',
    fontSize: 18,
  },
});
