import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png" }}
        style={styles.image}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
  }

});