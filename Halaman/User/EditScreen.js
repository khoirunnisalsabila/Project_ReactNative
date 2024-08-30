import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style'; // Pastikan path ke style.js benar

export default function EditScreen({ route, navigation }) {
  const { item } = route.params;
  const [namaDepan, setNamaDepan] = useState(item.namaDepan);
  const [namaBelakang, setNamaBelakang] = useState(item.namaBelakang);

  const onUpdate = async () => {
    const dataCache = await AsyncStorage.getItem('formMahasiswa');
    const oldData = dataCache !== null ? JSON.parse(dataCache) : [];
    const updateData = oldData.map(data => data.id === item.id ? { ...data, namaDepan, namaBelakang } : data);

    await AsyncStorage.setItem('formMahasiswa', JSON.stringify(updateData));
    navigation.navigate('Home');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.containerForm}>
      <View>
        <Text>Nama Depan</Text>
        <TextInput
          style={styles.input}
          value={namaDepan}
          onChangeText={setNamaDepan}
          placeholder='Nama Depan'
        />
      </View>

      <View>
        <Text>Nama Belakang</Text>
        <TextInput
          style={styles.input}
          value={namaBelakang}
          onChangeText={setNamaBelakang}
          placeholder='Nama Belakang'
        />
      </View>

      <View>
        <TouchableOpacity onPress={onUpdate} style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
