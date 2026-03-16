import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false , animation:"slide_from_right" }} >

    <Stack.Screen name="index" options={{  title: 'index' }} />
    <Stack.Screen name="Home" options={{title:'Home'}}/>
        <Stack.Screen name="Daily" options={{title:'Daily'}}/>
                <Stack.Screen name="Monthly" options={{title:'Monthly'}}/>


  </Stack>
}
