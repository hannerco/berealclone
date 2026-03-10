import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />


            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="information-outline"
                            color={color}
                            size={size}
                        />
                    )

                }}
            />




            <Tabs.Screen
                name="profile"
                options={
                    {
                        title: "profile",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="person-outline"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            {/* <Tabs.Screen name="profile" options={{ title: "Profile" }} /> */}
        </Tabs>
    )
}
