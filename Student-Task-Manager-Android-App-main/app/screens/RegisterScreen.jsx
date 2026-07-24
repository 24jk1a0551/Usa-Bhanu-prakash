import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleRegister() {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      Alert.alert("Please fill out all fields.");
    }
    else {
      navigation.navigate("Login");
    }
  }

  return (
    <BackgroundGradient>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Image
            alt="Register logo"
            style={styles.logo}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mY8eudibo8XpzAo5ce5BVu9_YvX-bm0YRv3cUtKTVAjlXHiUb1cn0tw&s=10" }}
            resizeMode="cover"
          />

          <Text style={styles.title}>Register</Text>

          <GlassCard intensity={50} style={styles.formContainer}>
            {/* First & Last Name row */}
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="First Name"
                placeholderTextColor={"rgba(255,255,255,0.6)"}
                onChangeText={(val) => setForm({ ...form, firstName: val })}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Last Name"
                placeholderTextColor={"rgba(255,255,255,0.6)"}
                onChangeText={(val) => setForm({ ...form, lastName: val })}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholderTextColor={"rgba(255,255,255,0.6)"}
              placeholder="Enter Email"
              keyboardType="email-address"
              onChangeText={(val) => setForm({ ...form, email: val })}
            />

            <TextInput
              style={styles.input}
              placeholderTextColor={"rgba(255,255,255,0.6)"}
              placeholder="Phone (+91)"
              keyboardType="phone-pad"
              onChangeText={(val) => setForm({ ...form, phone: val })}
            />
          </GlassCard>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleRegister} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </BackgroundGradient>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    fontSize: 40,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowRadius: 10,
    marginVertical: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    gap: 15,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    padding: 15,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderRadius: 15,
    color: "#fff",
    fontSize: 16,
  },
  halfInput: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    maxWidth: 400,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
  },
});