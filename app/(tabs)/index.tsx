import React, { useState } from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import { DATA, RecipeEntry } from '../data';

let nextId = 11;

const shuffleArray = (array: RecipeEntry[]) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray
};

const Item = ({ data }: { data: RecipeEntry }) => (
  <View>
    <Text>{data.name}</Text>
  </View>
);



export default function TabTwoScreen() {

  const RECIPE_DATA = DATA;

  //set state variables
  const [mealPlan, setMealPlan] = useState<RecipeEntry[]>([]);
  const [recipeData, setRecipeData] = useState<RecipeEntry[]>(RECIPE_DATA);

  
  //create a new meal plan that is displayed
  const GenerateNewMealPlan = () => {
    //this should insteade create a new array based on data and filter it based on parameters
    // so a mealplan is created with varied recipes
    const shuffledData = shuffleArray([...recipeData]);
    const newMealPlan = shuffledData.slice(0, 7);
    setMealPlan(newMealPlan);
  };

  const AddNewRecipe = () => {
    //add a recipe to the recipes array
    console.log("new recipe");
    let nextIdPlus = nextId++;
    let nextIdString = nextIdPlus.toString();
    const newRecipeData = [...recipeData, { id: nextIdString, name: 'sdfsdf', instructions: 'dosmth' }];

    setRecipeData(newRecipeData);
  };

  const AddNewIngredient = () => {
    console.log("new ingredient");

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal plan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.separator} />
      <Text style={styles.title}>This is the meal plan for this week</Text>
      <View style={styles.separator} />
      
      <Button title="New meal plan" onPress={GenerateNewMealPlan} />
      <Button title="Add recipe" onPress={AddNewRecipe} />
      <Button title="Add ingrdient" onPress={AddNewIngredient} />
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
