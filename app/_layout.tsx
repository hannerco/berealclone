import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const route = useRouter();
  let isAuth = false

  if (!isAuth) {
    route.replace('/(auth)/login');
  } else {
    route.replace('/(tabs)')
  }


  return (
    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  )
}
