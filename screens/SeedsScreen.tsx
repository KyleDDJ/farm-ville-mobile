import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EarningsSummary from "@/components/EarningsSummary";
import SeedCard from "@/components/SeedCard";
import { defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";

const SeedsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: defaultBackground }}
      edges={["top", "bottom"]}
    >
      <EarningsSummary />
      <ScrollView className="p-4">
        {SEEDS.map(seed => (
          <SeedCard key={seed.id} seed={seed} variant="seeds" />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeedsScreen;
