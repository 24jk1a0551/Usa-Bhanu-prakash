import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

export default function BackgroundGradient({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={['#1a0b2e', '#4b134f', '#c94b4b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
