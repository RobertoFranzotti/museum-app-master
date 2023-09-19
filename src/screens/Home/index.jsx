import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MuseuApp = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const museumsData = [
    { id: 1, name: "Museu 1", image: require("../../assets/capelasistina.jpeg") },
    { id: 2, name: "Museu 2", image: require("../../assets/vaticano.jpeg") },
    { id: 3, name: "Museu 3", image: require("../../assets/vaticano.jpeg") },
  ];

  const cardsData = [
    {
      id: 4,
      name: "Augusto",
      description: " - 63 A.C a 14 D.C",
      image: require("../../assets/augusto.jpeg"),
    },
    {
      id: 5,
      name: "Nero",
      description: " - 37 a 68 D.C.",
      image: require("../../assets/nero.jpg"),
    },
    {
      id: 6,
      name: "Cesar",
      description: " - 100 a 44 A.C",
      image: require("../../assets/cesar.jpeg"),
    },
    {
      id: 7,
      name: "Cesar",
      description: " - 100 a 44 A.C",
      image: require("../../assets/cesar.jpeg"),
    },
  ];

  const handleCardPress = (item) => {
    navigation.navigate("MuseumDetail", { museum: item });
  };

  const SearchInput = ({ value, onChangeText }) => (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 36.4,
        letterSpacing: 0,
        backgroundColor: "#E5EBED",
        color: "#fff",
        borderRadius: 50,
      }}
    >
      <TextInput
        style={{
          flex: 1,
        }}
        placeholder="Digite sua pesquisa"
        onChangeText={onChangeText}
        value={value}
      />
      <FontAwesome name="search" size={24} color="black" />
    </View>
  );

  const HeaderText = () => (
    <Text
      style={{
        fontSize: 28,
        fontWeight: "900",
        color: "#424242",
      }}
    >
      {"Welcome to\nAR Museum Guide"}
    </Text>
  );

  const NearbyMuseums = ({ data }) => (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10, alignItems: "center" }}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item)} style={{ borderRadius: 16 }}>
          <Image
            source={item.image}
            style={{ width: 150, height: 150, backgroundColor: "#e5f" }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      )}
    />
  );

  return (
    <SafeAreaView
      style={{ flex: 1, gap: 20, paddingTop: 60, paddingHorizontal: 20, alignItems: "center" }}
    >
      <HeaderText />
      <SearchInput value={searchQuery} onChangeText={(text) => setSearchQuery(text)} />
      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Nearby Museums</Text>
      </View>
      <NearbyMuseums data={museumsData} />
      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Nearby Cards</Text>
      </View>
      <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
        <FlatList
          contentContainerStyle={{ gap: 10, paddingBottom: 30, width: "100%" }}
          showsVerticalScrollIndicator={false}
          data={cardsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleCardPress(item)}
              style={{ flexDirection: "row", alignItems: "flex-start", gap: 20 }}
            >
              <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 16 }} />
              <View style={{}}>
                <Text style={{ alignItems: "flex-start" }}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MuseuApp;
