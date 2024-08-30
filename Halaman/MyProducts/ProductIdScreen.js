import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { getBarangbyId } from "../../Services/barangServices";
import { AntDesign } from '@expo/vector-icons';

export default function ProductIdScreen({ route }) {
    const { barangId } = route.params;
    const [barang, setBarang] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBarang = async () => {
            try {
                const data = await getBarangbyId(barangId);
                setBarang(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBarang();
    }, [barangId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!barang) {
        return <Text>Produk tidak ditemukan.</Text>;
    }

    return (
        <View style={{ backgroundColor: '#dfe6ec', flex: 1, paddingHorizontal: 20, paddingVertical: 30 }}>
            {barang &&
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#FFF', marginVertical: 8, borderRadius: 10, padding: 30 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: '#797979', textAlign: 'center' }}>{barang.title}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 8, color: '#797979', textAlign: 'center' }}>{barang.category.toUpperCase()}</Text>

                        <Image
                            style={{ width: '100%', height: 250, resizeMode: 'contain' }}
                            source={{ uri: barang.image }}
                        />

                        <Text style={{ flex: 1, fontSize: 14, fontWeight: '400', marginTop: 16, color: '#797979', textAlign: 'center' }}>{barang.description}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 24 }}>
                            <AntDesign name="star" size={20} color='#71acf5' />
                            <Text style={{ fontSize: 12, fontWeight: '600', color: '#797979', marginLeft: 4 }}>{barang.rating.rate}</Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: '#71acf5', textAlign: 'center', marginTop: 8 }}>{'$' + barang.price}</Text>
                    </View>
                    <TouchableOpacity style={{ padding: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#71acf5', borderWidth: 2, borderColor: '#FFF', marginTop: 4, borderRadius: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFF' }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}