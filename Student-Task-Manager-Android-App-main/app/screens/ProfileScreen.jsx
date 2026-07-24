import { Image, StyleSheet, Text, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        
        <GlassCard intensity={60} style={styles.profileCard}>
          <Image 
            style={styles.avatar} 
            source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/054/654/909/small/a-professional-young-man-with-neatly-styled-hair-wearing-a-light-blue-shirt-standing-with-arms-crossed-and-smiling-warmly-isolated-on-transparent-background-png.png"}}
          />
          <Text style={styles.name}>Ravi Teja</Text>
          <Text style={styles.role}>Software Developer</Text>

          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Ionicons name="call" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.infoText}>+91 9874566123</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="mail" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.infoText}>ravi@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="location" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.infoText}>Vijayawada</Text>
            </View>
          </View>
        </GlassCard>
        
      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  profileCard: {
    width: "100%",
    alignItems: "center",
    padding: 30,
    borderRadius: 25,
  },
  avatar: {
    height: 120, 
    width: 120, 
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 15,
  },
  name: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 10,
  },
  role: {
    fontSize: 18,
    color: "rgba(255,255,255,0.7)",
    marginBottom: 30,
    fontStyle: 'italic',
  },
  infoSection: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 15,
    padding: 20,
    gap: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  }
});