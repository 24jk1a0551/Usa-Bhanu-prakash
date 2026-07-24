import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

export default function LoginScreen({ navigation }) {

  const [details, setDetails] = useState({
    username: "",
    password: ""
  });

  function handleLogin() {
    if (!details.username || !details.password) {
      alert("Please fill in both username and password.");
      return;
    }
    // Navigate to the bottom tab navigator after login
    navigation.replace("MainTabs");
  }

  return (
    <BackgroundGradient>
      <View style={style.mainContainer}>
        
        <Image
          style={style.image}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2wsHxVU--8fgw4Iez7qtG3vPPJ8d7c7y4_nGx6lWwwQETOm1Nk6X8Zk&s=10" }}
          resizeMode="cover"
        />
        <Text style={style.title}>Login</Text>

        <GlassCard intensity={50} style={style.loginContainer}>
          {/* Input boxes */}
          <View>
            <Text style={style.inputLabel}>
              UserName  <Ionicons name='person' color={"white"} size={20} />
            </Text>
            <TextInput
              onChangeText={(val) => setDetails({ ...details, username: val })}
              style={style.inputStyle}
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              placeholder='Enter Username'
            />

            <Text style={style.inputLabel}>
              Password  <Ionicons name='lock-closed' color={"white"} size={20} />
            </Text>
            <TextInput
              onChangeText={(val) => setDetails({ ...details, password: val })}
              style={style.inputStyle}
              placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
              secureTextEntry
              placeholder='Enter password'
            />
          </View>

          {/* Buttons */}
          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={style.button}>
              <Text style={style.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={[style.button, style.buttonOutline]}
            >
              <Text style={style.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </GlassCard>
      </View>
    </BackgroundGradient>
  );
}


const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 40,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowRadius: 10,
    textShadowOffset: { width: 1, height: 1 },
  },
  loginContainer: {
    padding: 25,
    width: '100%',
    maxWidth: 400,
  },
  inputLabel: {
    fontSize: 16,
    fontStyle: "italic",
    marginLeft: 5,
    color: "#fff",
    marginBottom: 5,
    marginTop: 15,
  },
  inputStyle: {
    borderColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
  },
});