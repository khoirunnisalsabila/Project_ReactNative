
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'; 
import ViewAllScreen from './User/ViewAllScreen';
import { styles } from "./User/style"; 

export default function DetailScreen({ route }) {

    const { product } = route.params;

return (
<View style={styles.container}>
<Text style={styles.title}>{product.title} </Text>
<Text style={styles.price}>Price: ${product.price}</Text>
<Text style={styles.description}>{product.description}</Text> 
</View>
);
}