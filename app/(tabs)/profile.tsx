import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>THIS IS THE PAGE PROFILE</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});