import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style'; // Pastikan path benar

export const onDelete = async (id, getDataList) => {
  const dataCache = await AsyncStorage.getItem('formMahasiswa');
  const oldData = dataCache !== null ? JSON.parse(dataCache) : [];
  const updateData = oldData.filter((item) => item.id !== id);

  await AsyncStorage.setItem('formMahasiswa', JSON.stringify(updateData));
  getDataList();
};

export default function DeleteScreen({ navigation }) {
  const [dataListState, setDataListState] = useState([]);

  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = async () => {
    const dataCache = await AsyncStorage.getItem('formMahasiswa');
    const data = dataCache !== null ? JSON.parse(dataCache) : [];
    setDataListState(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        {dataListState.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>Nama Depan: {item.namaDepan}</Text>
            <Text>Nama Belakang: {item.namaBelakang}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Edit', { item })}
                style={styles.editButton}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDelete(item.id, getDataList)}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
