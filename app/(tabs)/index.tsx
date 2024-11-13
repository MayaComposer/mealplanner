import { StyleSheet, Button, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export interface IUser {
  id: string;
  name: string; 
  instructions: string;
}

const DATA = [
  {
    id: '0',
    name: 'pasta',
    instructions: 'dosmth',
  }, 
  {
  id: '1',
  name: 'potatoes',
  instructions: 'dosmth',
  }, 
  {
  id: '2',
  name: 'lasagne',
  instructions: 'dosmth',
  }, 
  {
  id: '3',
  name: 'grateng',
  instructions: 'dosmth',  
  }, 
  {
  id: '4',
  name: 'soup',
  instructions: 'dosmth',
  }, 
  {
  id: '5',
  name: 'pizza',
  instructions: 'dosmth',  
  }, 
  {
  id: '7',
  name: 'curry',
  instructions: 'dosmth',  
  }, 
  {
  id: '8',
  name: 'sdfoisdf',
  instructions: 'dosmth',  
}
];



export function GenerateNewMeal() {

  return (
    <Text>hi</Text>
  );

};


const Item = ({data}: {data: IUser}) => (
  <View>
    <Text>{data.name}</Text>
  </View>
);




export default function TabTwoScreen() {
  

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
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={(item: IUser) => item.id}
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