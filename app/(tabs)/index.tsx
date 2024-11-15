import React, { useState } from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import { DATA, RecipeEntry } from '../data';

const shuffleArray = (array: RecipeEntry[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Item = ({ data }: { data: RecipeEntry }) => (
  <View>
    <Text>{data.name}</Text>
  </View>
);

export default function TabTwoScreen() {
  const [mealPlan, setMealPlan] = useState<RecipeEntry[]>([]);

  const GenerateNewMeal = () => {
    const shuffledData = shuffleArray([...DATA]);
    const newMealPlan = shuffledData.slice(0, 7);
    setMealPlan(newMealPlan);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal plan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.separator} />
      <Text style={styles.title}>This is the meal plan for this week</Text>
      <View style={styles.separator} />
      
      <Button title="New meal plan" onPress={GenerateNewMeal} />
      <View style={styles.separator} />
      <FlatList
        data={mealPlan}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item: RecipeEntry) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
