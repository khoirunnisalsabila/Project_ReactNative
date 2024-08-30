import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { getBarang } from "../../Services/barangServices";

export default function ProductsScreen({ route, navigation }) {

    const [barang, setBarang] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBarang();
            setBarang(data);
        };
        fetchData();
    }, []);

    const navigateToBarang = (id) => {
        navigation.navigate('Detail Product', { barangId : id });
    };

    return (
        <View>
            <FlatList
                data={barang}
                renderItem={({ item }) => 
                    <TouchableOpacity key={item.id}
                        style={{ backgroundColor: '#FFF', marginBottom: 32, padding: 12, borderRadius: 10 }}
                        onPress={() => navigateToBarang(item.id)}>
                        
                        <AntDesign name="hearto" size={24} color="#71acf5" />
                        
                        <Image
                            style={{ width: '100%', height: 250, resizeMode: 'contain', marginBottom: 12 }}
                            source={{ uri: item.image }}
                        />
                        
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#797979' }}>{item.tittle}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 8, color: '#797979' }}>{item.category.toUpperCase()}</Text>
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="star" size={20} color="#71acf5" />
                                <Text style={{ fontSize: 12, fontWeight: '600', color: '#797979', marginLeft: 4 }}>{item.rating.rate}</Text>    
                            </View> 
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#71acf5' }}>{'$' + item.price}</Text>
                        </View>

                        <TouchableOpacity style={{ padding: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#71acf5', marginTop: 12, borderRadius: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#71acf5' }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id.toString()}
            />   
        </View>
    );
}
