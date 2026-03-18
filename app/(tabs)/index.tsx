import { } from "@expo/ui/swift-ui";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Welcome to the index screen</Text>
      <Image
        source={
          require('@/assets/images/react-logo.png')
        }
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <Link href={'/about'}>Go to about</Link>
      <Button title="Profile" onPress={() => router.push("/(tabs)/profile")} />

      <ActivityIndicator size={"large"} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#123",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  helloWorldTitle: {
    color: "white",
    fontSize: 25,
  },

  image: {
    width: 200,
    height: 200,
  },

  input: {
    backgroundColor: "#ddddbb",
    width: 200,
    height: 20,
  }

});