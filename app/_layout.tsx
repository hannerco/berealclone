import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}
    >

      <Stack.Screen name="(tabs)" />
      {/*El stack que va a referenciar será el 
      que tiene todos (la carpeta (tabs));
      sino, aquí estuvieran todas las páginas*/}
    </Stack>
  )
}
