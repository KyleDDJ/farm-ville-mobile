import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddPlantCard from "@/components/PlantButton";
import { defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";
import SeedDashboard from "@/screens/SeedsDashboard";

const FarmScreen: React.FC = () => {
  const [show_seeds, setShowSeeds] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: defaultBackground }}>
      {!show_seeds ? (
        <View style={{ paddingTop: 16, alignItems: "center" }}>
          <AddPlantCard
            title="Add a Plant"
            onPress={() => setShowSeeds(true)}
          />
        </View>
      ) : (
        <FlatList
          data={SEEDS}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
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
