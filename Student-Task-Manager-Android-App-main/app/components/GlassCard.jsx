import { BlurView } from 'expo-blur';
import { StyleSheet, View } from 'react-native';

export default function GlassCard({ children, style, intensity = 40, tint = "light" }) {
  return (
    <View style={[styles.glass, style]}>
      <BlurView intensity={intensity} tint={tint} style={StyleSheet.absoluteFillObject} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  glass: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
