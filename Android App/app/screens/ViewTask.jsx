import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import GlassCard from '../components/GlassCard';

export default function ViewTask() {
  return (
    <BackgroundGradient>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Task Details</Text>

          <GlassCard style={styles.taskCard}>
            <View style={styles.headerRow}>
              <Text style={styles.taskTitle}>Complete project report</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>High</Text>
              </View>
            </View>

            <Text style={styles.sectionLabel}>Description</Text>
            <Text style={styles.taskDescription}>
              Finish writing the final project report for the Q3 deliverables. Make sure to include all charts and analytics from the marketing team.
            </Text>

            <View style={styles.metaInfo}>
              <View style={styles.metaItem}>
                <Ionicons name="calendar-outline" size={20} color="rgba(255,255,255,0.7)" />
                <Text style={styles.metaText}>Due: Oct 25, 2026</Text>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={20} color="rgba(255,255,255,0.7)" />
                <Text style={styles.metaText}>Status: Pending</Text>
              </View>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
                <Ionicons name="pencil" size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                <Ionicons name="trash" size={20} color="#fff" />
                <Text style={styles.actionButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </GlassCard>
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
  taskCard: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginRight: 10,
  },
  badge: {
    backgroundColor: 'rgba(255, 60, 60, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 60, 60, 0.8)',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  sectionLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  taskDescription: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  metaInfo: {
    gap: 10,
    marginBottom: 30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 15,
    borderRadius: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 50, 50, 0.2)',
    borderColor: 'rgba(255, 50, 50, 0.5)',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
});