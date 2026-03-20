import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function loginScreen() {
    return (
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Welcome back!
                </Text>
                <Text style={styles.subtitle}>
                    Sign in to continue
                </Text>

                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Email..."
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                    />

                    <TextInput style={styles.input}
                        placeholder="Password..."
                        placeholderTextColor={"#999"}
                        autoComplete="password"
                        autoCapitalize="none"
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkButton}>
                        <Text style={styles.linkButtonText}>Don't have an account? <Text style={styles.linkButtonTextBold}>Sign Up</Text></Text>
                    </TouchableOpacity>


                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 16,
        fontWeight: "semibold",
        marginBottom: 32,
        color: "#666"
    },

    form: {
        width: "100%",

    },

    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },

    button: {
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        alignItems: "center",
    },

    buttonText: {
        color: "#f5f5f5",
        fontSize: 16,
        fontWeight: "600",
    },

    linkButton: {
        marginTop: 34,
        alignItems: "center",
    },

    linkButtonText: {
        color: "#666",
        fontSize: 14,
    },

    linkButtonTextBold: {
        fontWeight: "600",
        color: "#000"
    },


})