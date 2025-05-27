import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/**
 * Componente Card do Produtor
 * 
 * Exibe um resumo das informações de um produtor em formato de card.
 */
export default function ProducerCard({ producer }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: producer.image || 'https://via.placeholder.com/80' }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{producer.name}</Text>
        <Text style={styles.category}>{producer.category}</Text>
        {/* Poderia adicionar uma descrição curta aqui se desejado */}
        {/* <Text style={styles.description} numberOfLines={2}>{producer.description}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular image
    marginRight: 15,
  },
  infoContainer: {
    flex: 1, // Takes remaining space
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  /*
  description: {
    fontSize: 13,
    color: '#888',
    marginTop: 5,
  },
  */
});

