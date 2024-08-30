import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import { onDelete } from './DeleteScreen'; // Pastikan path benar

export default function ViewAllScreen({ navigation, onEdit }) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = async () => {
    const dataCache = await AsyncStorage.getItem('formMahasiswa');
    const data = dataCache !== null ? JSON.parse(dataCache) : [];
    setDataList(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        {dataList.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>Nama Depan: {item.namaDepan}</Text>
            <Text>Nama Belakang: {item.namaBelakang}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => onEdit(item)} style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(item.id, getDataList)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
