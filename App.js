0
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#111" barStyle="light-content" />
      <Text style={styles.title}>Treino Semanal</Text>
      <Text style={styles.subtitle}>Seu app de treinos está funcionando! 💪</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 16,
    textAlign: 'center',
  },
});


