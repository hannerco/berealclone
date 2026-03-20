import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  let isAuth = false;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (!isAuth) {
      router.replace("/(auth)/login");
    } else {
      router.replace("/(tabs)");
    }
  }, [ready]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}