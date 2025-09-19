import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shops",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="play" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Farm",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="play" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="seeds"
        options={{
          title: "Seeds",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="play" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
