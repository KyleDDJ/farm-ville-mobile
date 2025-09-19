import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SeedCard from "@/components/SeedCard";
import { defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";

const ShopScreen = () => {
  const handlePress = (seedTitle: string) => {
    console.log("Pressed:", seedTitle);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: defaultBackground }}
      edges={["top", "bottom"]}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {SEEDS.map(seed => (
          <TouchableOpacity
            key={seed.id}
            activeOpacity={0.7}
            onPress={() => handlePress(seed.title)}
          >
            <SeedCard seed={seed} variant="shop" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
