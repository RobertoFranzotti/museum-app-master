import React from 'react';
import { View, Image, Text } from 'react-native';

const MuseumDetail = ({ route }) => {
  const { museum } = route.params; 

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.7, justifyContent: 'flex-end' }}>       
        <Image source={museum.image} style={{ flex: 1, resizeMode: 'cover' }} />
      </View>
      <View style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop:20 }}>      
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{museum.name}</Text>
          <Text style={{ fontSize: 16 }}>{museum.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default MuseumDetail;