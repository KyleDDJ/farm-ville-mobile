import SeedCard from "@/components/SeedCard";
import { defaultBackground } from "@/constants/Colors";
import { useSeeds } from "@/context/SeedsContext";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ShopScreen = () => {
  const { seeds } = useSeeds();

  const seedsSheetRef = useRef<BottomSheetModal>(null);

  const handlePress = (seedId: number) => {
    console.log("Pressed seed", seedId);
    // trigger purchase logic here
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: defaultBackground }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {seeds.map(seed => (
          <TouchableOpacity
            key={seed.id}
            activeOpacity={0.7}
            onPress={() => handlePress(seed.id)}
          >
            <SeedCard seed={seed} variant="shop" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
