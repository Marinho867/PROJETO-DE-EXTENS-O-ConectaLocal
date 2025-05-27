import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProducerCard from '../components/ProducerCard'; // Assuming ProducerCard component exists

// Dados de exemplo (substituir por dados reais ou de API posteriormente)
const SAMPLE_PRODUCERS = [
  { id: '1', name: 'Sítio Verde', category: 'Hortaliças Orgânicas', description: 'Produção familiar de verduras e legumes sem agrotóxicos.', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Queijaria Artesanal da Serra', category: 'Laticínios', description: 'Queijos frescos e curados feitos com leite local.', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Mãos que Tecem', category: 'Artesanato', description: 'Peças de tear manual e bordados tradicionais.', image: 'https://via.placeholder.com/100' },
];

/**
 * Tela Principal (Home)
 * 
 * Exibe uma lista de produtores locais.
 * Permite navegar para a tela de detalhes do produtor.
 */
export default function HomeScreen({ navigation }) {
  const [producers, setProducers] = useState(SAMPLE_PRODUCERS);

  const handleSelectProducer = (producer) => {
    navigation.navigate('ProducerDetail', { producerData: producer });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={producers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectProducer(item)}>
            <ProducerCard producer={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produtor encontrado.</Text>}
      />
      {/* Botão para adicionar produtor (exemplo, funcionalidade a implementar) */}
      {/* 
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddProducer')} // Navega para a tela de adicionar produtor
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#666',
  },
  // Estilos para o botão de adicionar (opcional)
  /*
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30, 
  },
  */
});

