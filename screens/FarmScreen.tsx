import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddPlantCard from "@/components/PlantButton";
import { defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";
import SeedDashboard from "@/screens/SeedsDashboard";

const FarmScreen = () => {
  const [showSeeds, setShowSeeds] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: defaultBackground }}>
      {!showSeeds ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <AddPlantCard
            title="Add a Plant"
            onPress={() => setShowSeeds(true)}
          />
        </View>
      ) : (
        <FlatList
          data={SEEDS}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 15 }}
          renderItem={({ item }) => <SeedDashboard seed={item} />}
          ListFooterComponent={
            <View style={{ marginTop: 5, alignItems: "center" }}>
              <AddPlantCard
                title="Plant Again"
                onPress={() => console.log("Plant Again clicked")}
              />
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default FarmScreen;
