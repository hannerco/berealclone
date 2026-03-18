import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function loginScreen() {
    return (
        <SafeAreaView edges={["top", "bottom"]}>
            <View>
                <Text>
                    Welcome back!
                </Text>
                <Text>
                    Sign in to continue
                </Text>

                <View>
                    <TextInput
                        placeholder="Email..."
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                    />

                    <TextInput
                        placeholder="Password..."
                        placeholderTextColor={"#999"}
                        autoComplete="password"
                        autoCapitalize="none"
                        secureTextEntry
                    />

                    <TouchableOpacity>
                        <Text>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Don't have an account?
                            <Text>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}