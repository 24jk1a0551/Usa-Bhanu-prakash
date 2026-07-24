import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import { Image, Platform, StyleSheet, View } from "react-native";

import AddTaskScreen from "../screens/AddTaskScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
            },
            headerRight: () => (
                <View style={{ marginRight: 15 }}>
                    <Image 
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2wsHxVU--8fgw4Iez7qtG3vPPJ8d7c7y4_nGx6lWwwQETOm1Nk6X8Zk&s=10" }}
                        style={{ width: 35, height: 35, borderRadius: 17.5, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                    />
                </View>
            ),
            headerBackground: () => (
                Platform.OS === 'ios' 
                  ? <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} /> 
                  : <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(30, 9, 57, 0.66)' }]} />
            ),
            tabBarStyle: {
                position: 'absolute',
                borderTopWidth: 0,
                elevation: 0,
                height: 60,
                backgroundColor: 'transparent',
            },
            tabBarBackground: () => (
                Platform.OS === 'ios' 
                  ? <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill} /> 
                  : <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15, 32, 39, 0.85)' }]} />
            ),
            tabBarLabelStyle: {
                fontWeight: "bold",
                fontSize: 12,
                marginBottom: 5,
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                title: "Home",
                tabBarIcon: (({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ))
            }} />

            <Tab.Screen name="AddTask" component={AddTaskScreen} options={{
                title: "Add Task",
                tabBarIcon: (({ color, size }) => (
                    <Ionicons name="add-outline" size={size} color={color} />
                ))
            }} />

            <Tab.Screen name="Products" component={ProductsScreen} options={{
                title: "Products",
                tabBarIcon: (({ color, size }) => (
                    <Ionicons name="eye-outline" size={size} color={color} />
                ))
            }} />
            
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                title: "Profile",
                tabBarIcon: (({ color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                ))
            }} />
        </Tab.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
                <Stack.Screen name="MainTabs" options={{ headerShown: false }} component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}