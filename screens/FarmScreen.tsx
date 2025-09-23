import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EarningsSummary from "@/components/EarningsSummary";
import AddPlantCard from "@/components/PlantButton";
import SeedCard from "@/components/SeedCard";
import { COLORS, defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";
import { useSeeds } from "@/context/SeedsContext";
import { Seeds } from "@/entities/seeds.entities";
import SeedDashboard from "@/screens/SeedsDashboard";

const FarmScreen: React.FC = () => {
  const [selectedSeed, setSelectedSeed] = useState<Seeds | null>(null);
  const { seeds, addSeed } = useSeeds();

  const plantedSeeds = seeds.filter(
    seed => seed.status === "planted" || seed.status === "growing"
  );
  const hasPlantedSeeds = plantedSeeds.length > 0;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["65%"], []);

  const handleAddPlant = () => {
    bottomSheetModalRef.current?.present();
  };

  const handlePlantAgain = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSeedSelect = (seed: Seeds) => {
    setSelectedSeed(seed);
  };

  const handlePlantNow = () => {
    if (selectedSeed) {
      const newPlantedSeed: Seeds = {
        ...selectedSeed,
        id: Date.now(),
        status: "planted",
        plantedAt: new Date(),
        harvestReadyAt: new Date(Date.now() + 5 * 60 * 1000),
      };

      addSeed(newPlantedSeed);

      setSelectedSeed(null);
      bottomSheetModalRef.current?.dismiss();
    }
  };

  const handleCancel = () => {
    setSelectedSeed(null);
    bottomSheetModalRef.current?.dismiss();
  };

  const renderSeedItem: ListRenderItem<Seeds> = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleSeedSelect(item)}
      className={`rounded-2xl mb-2 ${
        selectedSeed?.id === item.id ? "border-2" : "border-0"
      }`}
      style={{
        borderColor:
          selectedSeed?.id === item.id ? COLORS.leafygreen1 : "transparent",
      }}
    >
      <SeedCard seed={item} variant="seeds" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: defaultBackground,
        paddingBottom: 100,
      }}
    >
      <EarningsSummary />

      {!hasPlantedSeeds ? (
        <View style={{ paddingTop: 16, alignItems: "center" }}>
          <AddPlantCard title="Add a Plant" onPress={handleAddPlant} />
        </View>
      ) : (
        <FlatList
          data={plantedSeeds}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => <SeedDashboard seed={item} />}
          ListFooterComponent={
            <View style={{ marginTop: 5, alignItems: "center" }}>
              <AddPlantCard title="Plant Again" onPress={handlePlantAgain} />
            </View>
          }
        />
      )}

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: COLORS.leafygreen2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        handleIndicatorStyle={{
          backgroundColor: COLORS.leafygreen1,
        }}
      >
        <BottomSheetView className="flex-1 px-4">
          <Text className="text-center text-xl font-bold text-white mb-4">
            Select a Seed to Plant
          </Text>

          <FlatList
            data={SEEDS}
            keyExtractor={item => item.id.toString()}
            renderItem={renderSeedItem}
            showsVerticalScrollIndicator={false}
            className="flex-1"
          />

          <View className="flex-row gap-3 pb-4 pt-2">
            <TouchableOpacity
              className="flex-1 rounded-lg py-3"
              style={{ backgroundColor: COLORS.gray400 }}
              onPress={handleCancel}
            >
              <Text className="text-center text-white text-lg font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 rounded-lg py-3 ${
                !selectedSeed ? "opacity-50" : ""
              }`}
              style={{ backgroundColor: COLORS.leafygreen1 }}
              onPress={handlePlantNow}
              disabled={!selectedSeed}
            >
              <Text className="text-center text-white text-lg font-semibold">
                Plant Now
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default FarmScreen;
