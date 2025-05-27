import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

/**
 * Tela de Detalhes do Produtor
 * 
 * Exibe informações detalhadas sobre um produtor específico,
 * recebidas via parâmetros de navegação.
 */
export default function ProducerDetailScreen({ route }) {
  // Extrai os dados do produtor passados pela navegação
  const { producerData } = route.params;

  if (!producerData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: Dados do produtor não encontrados.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: producerData.image || 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.name}>{producerData.name}</Text>
      <Text style={styles.category}>{producerData.category}</Text>
      <Text style={styles.description}>{producerData.description}</Text>
      
      {/* Adicionar mais detalhes se necessário, como lista de produtos, contato, etc. */}
      {/* Exemplo: Lista de Produtos (a implementar) */}
      {/* 
      <Text style={styles.sectionTitle}>Produtos:</Text>
      <FlatList 
        data={producerData.products} // Supondo que 'products' exista em producerData
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.productItem}>{item.name} - R$ {item.price}</Text>}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
      />
      */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'red',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  productItem: {
    fontSize: 15,
    marginBottom: 5,
    color: '#555',
  },
});

