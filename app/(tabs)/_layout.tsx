import { COLORS } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.gray400,
        tabBarStyle: {
          position: "absolute",
          borderRadius: 30,
          backgroundColor: COLORS.leafygreen,
          height: 78,
          borderTopColor: COLORS.leafygreen,
        },

        tabBarItemStyle: {
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          // headerTitle:
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="basket"
              size={focused ? 30 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Farm",
          // headerTitle:
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="barn"
              size={focused ? 30 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="seeds"
        options={{
          title: "Seeds",
          // headerTitle:
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="sprout"
              size={focused ? 30 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
