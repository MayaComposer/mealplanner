import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import { RecipeEntry, DATA } from '../data';

export default function TabOneScreen() {
  const [recipes, setRecipes] = useState<RecipeEntry[]>(DATA);
  const [newRecipe, setNewRecipe] = useState<RecipeEntry>({ id: '', name: '', instructions: '' });

  const addRecipe = () => {
    setRecipes([...recipes, { ...newRecipe, id: (recipes.length).toString() }]);
    setNewRecipe({ id: '', name: '', instructions: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.title}>Add a new recipe</Text>
      <TextInput
        placeholder="Recipe Name"
        value={newRecipe.name}
        onChangeText={(text) => setNewRecipe({ ...newRecipe, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructions"
        value={newRecipe.instructions}
        onChangeText={(text) => setNewRecipe({ ...newRecipe, instructions: text })}
        style={styles.input}
      />
      <Button title="Add new recipe" onPress={addRecipe} />
      <View style={styles.separator} />
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '10%',
  },
});
