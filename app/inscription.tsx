import { View, Text, StyleSheet } from 'react-native';

export default function ConnexionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page de Connexion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
});
