import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

export default function SettingsScreen() {
  const settingsOptions = [
    { id: '1', title: 'Account Settings', icon: 'person-circle-outline' },
    { id: '2', title: 'Notifications', icon: 'notifications-outline' },
    { id: '3', title: 'Theme (Glass UI)', icon: 'color-palette-outline' },
    { id: '4', title: 'Privacy & Security', icon: 'shield-checkmark-outline' },
    { id: '5', title: 'About App', icon: 'information-circle-outline' },
  ];

  return (
    <BackgroundGradient>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>

          <View style={styles.settingsList}>
            {settingsOptions.map((item) => (
              <GlassCard key={item.id} style={styles.settingItem} intensity={40}>
                <TouchableOpacity style={styles.settingButton}>
                  <View style={styles.settingIconText}>
                    <Ionicons name={item.icon} size={24} color="#fff" style={styles.icon} />
                    <Text style={styles.settingText}>{item.title}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="rgba(255,255,255,0.5)" />
                </TouchableOpacity>
              </GlassCard>
            ))}
          </View>
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 10,
  },
  settingsList: {
    gap: 15,
  },
  settingItem: {
    padding: 5,
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  settingIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});