import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile screeen</Text>
            <Image
                source={require('../../assets/images/favicon.png')}
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