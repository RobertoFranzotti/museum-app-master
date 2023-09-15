import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const museumsData = [
  { id: 1, name: "Museu 1", image: require("./src/assets/capelasistina.jpeg") },
  { id: 2, name: "Museu 2", image: require("./src/assets/vaticano.jpeg") },
];

const cardsData = [
  {
    id: 3,
    name: "Augusto",
    description: " - 63 A.C a 14 D.C",
    image: require("./src/assets/augusto.jpeg"),
  },
  {
    id: 4,
    name: "Nero",
    description: " - 37 a 68 D.C.",
    image: require("./src/assets/nero.jpg"),
  },
  {
    id: 5,
    name: "Cesar",
    description: " - 100 a 44 A.C",
    image: require("./src/assets/cesar.jpeg"),
  },
];

const SearchInput = ({ value, onChangeText }) => (
  <View >
    <FontAwesome name="search" size={24} color="black" />
    <TextInput
      style={{
        
        width: 325,
        height: 47,
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 36.4,
        letterSpacing: 0,
        backgroundColor: "#E5EBED",
        color: "#fff",
        borderRadius: 50,
      }}
      placeholder="Digite sua pesquisa"
      onChangeText={onChangeText}
      value={value}
    />
   
     
  </View>
);

const HeaderText = () => (
  <Text
    style={{
      width: 300,
      top: 60,
      left: 24,
      fontSize: 28,
      fontWeight: "900",
      color: "#424242",
    }}
  >
    Welcome to AR Museum Guide
  </Text>
);

const NearbyMuseums = ({ data }) => (
  <FlatList
    style={{ width: 465, height: 100, top: 150, left: 24 }}
    horizontal
    data={data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => handleImagePress(item.id)}>
        <Image
          source={item.image}
          style={{ borderRadius: 32, width: 200, height: 120, margin: 5 }}
        />
      </TouchableOpacity>
    )}
  />
);

const MuseumCard = ({ item }) => (
  <TouchableOpacity onPress={() => handleImagePress(item.id)}>
    <View style={{ flexDirection: "row" }}>
      <Image
        source={item.image}
        style={{ borderRadius: 32, width: 100, height: 60, margin: 5 }}
      />
      <Text style={{ alignItems: "flex-start" }}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const MuseuApp = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchInput
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <HeaderText />
      <View
        style={{
          width: 350,
          height: 47,
          top: 100,
          left: 24,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <TextInput
          style={{ flex: 1, paddingHorizontal: 8 }}
          placeholder="Digite sua pesquisa"
        />
      </View>
      <Text
        style={{ top: 120, fontSize: 24, fontWeight: "600", marginLeft: 24 }}
      >
        Nearby
      </Text>
      <NearbyMuseums data={museumsData} />
      <FlatList
        style={{ width: 280, height: 60, left: 0 }}
        data={cardsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MuseumCard item={item} />}
      />
    </View>
  );
};

export default MuseuApp;
