import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style'; 

export default function AddScreen({ navigation }) {
  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');

  const onSimpan = async () => {
    const dataCache = await AsyncStorage.getItem('formMahasiswa');
    const oldData = dataCache !== null ? JSON.parse(dataCache) : [];
    const uuid = Math.random().toString().replace("0.", "");
    const data = { id: uuid, namaDepan, namaBelakang };
    const dataSend = [...oldData, data];

    await AsyncStorage.setItem('formMahasiswa', JSON.stringify(dataSend));
    setNamaDepan('');
    setNamaBelakang('');
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
        <TouchableOpacity onPress={onSimpan} style={styles.button}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
