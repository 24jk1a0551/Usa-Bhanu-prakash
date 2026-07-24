import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

export default function HomeScreen() {
  return (
    <BackgroundGradient>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>

          <GlassCard intensity={60} style={styles.heroCard}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.titleDescription}>
                Task Management with features to Add, View, Edit, and Delete tasks efficiently.
              </Text>
            </View>
            <View>
              <Image 
                style={styles.heroImage} 
                source={{ uri: "https://www.w3villa.com/production/assets/solution_assets/Project-Management--Task-Management-Solution-e4d0f0c5657973fd91451f5a0e7aab53b39f98e522c679d04f34bf1741df64ef.png" }} 
              />
            </View>
          </GlassCard>

          <Text style={styles.sectionTitle}>Features</Text>

          {/* Row 1 */}
          <View style={styles.featuresRow}>
            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Add Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>

            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Delete Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>

            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Edit Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>
          </View>

          {/* Row 2 */}
          <View style={styles.featuresRow}>
            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Add Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>

            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Delete Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>

            <GlassCard style={styles.featureCard}>
              <Text style={styles.featureHeadLine}>Edit Task</Text>
              <Image style={styles.featureImage} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzo29c4FMPXkTf5s9QxJ1Q-6bnbowyRVab4j_hMC0A&s=10"}}/>
            </GlassCard>
          </View>

        </View>
      </ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // padding for absolute tab bar
  },
  container: {
    padding: 15,
    paddingTop: 60, // padding for transparent header
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowRadius: 10,
    marginBottom: 20,
  },
  heroCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  titleDescription: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 24,
  },
  heroImage: {
    height: 100,
    width: 120,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    marginLeft: 5,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  featureCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 140,
  },
  featureHeadLine: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  featureImage: {
    height: 70,
    width: '100%',
    borderRadius: 10,
    resizeMode: "cover",
  },
});




