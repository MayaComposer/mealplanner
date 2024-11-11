import { StyleSheet, Button, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const recipes = [{
  id: 0,
  name: 'pasta',
  instructions: 'dosmth',
}, {
  id: 1,
  name: 'potatoes',
  instructions: 'dosmth',
}, {
  id: 2,
  name: 'lasagne',
  instructions: 'dosmth',
}, {
  id: 3,
  name: 'grateng',
  instructions: 'dosmth',  
}, {
  id: 4,
  name: 'soup',
  instructions: 'dosmth',
}, {
  id: 5,
  name: 'pizza',
  instructions: 'dosmth',  
}, {
  id: 7,
  name: 'curry',
  instructions: 'dosmth',  
}, {
  id: 8,
  name: 'sdfoisdf',
  instructions: 'dosmth',  
}];



export function GenerateNewMeal() {

  return (
    <Meal/>
  );

};

export function Meal() {
  return (
    <>
      <Text></Text>
      <View style={styles.separator}/>
    </>
  );
}

export default function TabTwoScreen() {
  const listItems = recipes.map(recipe =>
    <li>{recipe.name}</li>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal plan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.separator}/>
      <Text style={styles.title}>This is the meal plan for this week</Text>
      <View style={styles.separator}/>
      
      <Button title="New meal plan"/>
      <View style={styles.separator}/>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
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