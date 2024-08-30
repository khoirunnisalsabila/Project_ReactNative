import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ViewAllScreen from './User/ViewAllScreen';
import { styles } from './User/style'; // Pastikan path benar

export default function HomeScreen({ navigation }) {
  const handleEdit = (item) => {
    navigation.navigate('Edit', { item });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Data</Text>
      </TouchableOpacity>
      <ViewAllScreen navigation={navigation} onEdit={handleEdit} />
    </View>
  );
}
