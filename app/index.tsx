
import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle} >HOLAAA, care bola</Text>
      <Link href={"/about"}>Go to About Screen</Link>
      <Text>¿Por qué no se ve?</Text>

      <Button title="Navigate" onPress={() => router.push("/about")} />

      <TextInput placeholder="Email" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  helloWorldTitle: {
    color: "red",
  },

  image: {
    width: 200,
    height: 200,
  }

});