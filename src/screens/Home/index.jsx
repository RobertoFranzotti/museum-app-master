import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const museumsData = [
  // Coloque aqui os dados dos museus que você deseja exibir na FlatList
  { id: 1, name: 'Museu 1', image: require('./museu1.jpg') },
  { id: 2, name: 'Museu 2', image: require('./museu2.jpg') },
  { id: 3, name: 'Museu 3', image: require('./museu3.jpg') },
  // Adicione mais museus conforme necessário
];

const MuseuApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ width: 325, height: 72, fontSize: 28, fontWeight: '800', lineHeight: 36.4, letterSpacing: -1 }}
        placeholder="Pesquisar Museus"
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Text style={{ width: 325, height: 72, top: 115, left: 24, fontSize: 28, fontWeight: '800', lineHeight: 36.4, letterSpacing: -1 }}>
        Resultados da pesquisa
      </Text>
      <View style={{ width: 380, height: 47, top: 207, left: 24, borderRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
        {/* Aqui você pode adicionar o componente de pesquisa */}
        <TextInput
          style={{ flex: 1, paddingHorizontal: 8 }}
          placeholder="Digite sua pesquisa"
        />
      </View>
      <FlatList
        style={{ width: 463, height: 324, top: 274, left: 24 }}
        horizontal
        data={museumsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={{ width: 200, height: 300, margin: 8 }}
          />
        )}
      />
      <FlatList
        style={{ width: 380, height: 254.67, top: 653, left: 23 }}
        data={museumsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Aqui você pode adicionar a ação quando o card for clicado
            }}
          >
            <View style={{ width: 380, height: 84.89, marginBottom: 16, backgroundColor: 'lightgray' }}>
              {/* Aqui você pode adicionar os detalhes do card, como o nome do museu */}
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MuseuApp;
