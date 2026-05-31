import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <ThemedText>Map</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
