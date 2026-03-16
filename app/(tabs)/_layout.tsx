import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                // Color del background del navBar focused
                tabBarActiveBackgroundColor: "#e4e4e4",
                // Color del relleno del ícono
                tabBarActiveTintColor: "black"
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    // Title in the top
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            // Color changes when focused
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={size} />
                    )
                }} />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "information-circle" : "information-circle-outline"}
                            color={color}
                            size={size} />
                    )
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={color}
                            size={size} />
                    )
                }} />
        </Tabs>
    )
}
