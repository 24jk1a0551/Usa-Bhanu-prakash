import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

export default function ProductsScreen() {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  if (loading) {
    return (
      <BackgroundGradient>
        <View style={ProductStylings.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </BackgroundGradient>
    )
  }

  return (
    <BackgroundGradient>
      <View style={ProductStylings.container}>
        <Text style={ProductStylings.headerTitle}>Products</Text>

        <FlatList 
          data={Products} 
          contentContainerStyle={ProductStylings.listContent} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <GlassCard intensity={40} style={ProductStylings.card}>
              <Image style={ProductStylings.image} source={{ uri: item.thumbnail }} />
              <View style={ProductStylings.cardBody}>
                <Text style={ProductStylings.title} numberOfLines={1}>{item.title}</Text>
                <Text style={ProductStylings.brand}>{item.brand}</Text>
                <View style={ProductStylings.priceRow}>
                  <Text style={ProductStylings.price}>${item.price}</Text>
                </View>
              </View>
            </GlassCard>
        )} />
      </View>
    </BackgroundGradient>
  )
}


const ProductStylings = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // For transparent header
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 15,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 10,
  },
  listContent: {
    padding: 15,
    paddingBottom: 100, // padding for absolute tab bar
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
  },
  cardBody: {
    padding: 15,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: { 
    fontSize: 22, 
    color: "#a8ff78", 
    fontWeight: "bold",
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowRadius: 5,
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#fff"
  },
  brand: { 
    color: "rgba(255,255,255,0.7)", 
    marginTop: 5,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: 'rgba(255,255,255,0.1)',
  }
});