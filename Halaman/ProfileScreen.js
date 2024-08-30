import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./User/style"; // Pastikan path ini sesuai dengan struktur proyek Anda

export default function ProfileScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((product, index) => (
          <View key={index} style={styles.item}>
            <Text>{product.title}</Text>
            <Text>Price: ${product.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Detail', { product: product })}
            >
              <Text style={styles.buttonText}>Lihat Product</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
