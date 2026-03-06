import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
    headerStyle: {backgroundColor: "cornflowerblue"},
    headerTintColor: "white",
    animation: "flip",
    }}
  >

    <Stack.Screen name="index" options={{title: 'Home'}}/>
    <Stack.Screen name="about" options={{title: 'AboutUS'}}/>
  </Stack>
  )
}
