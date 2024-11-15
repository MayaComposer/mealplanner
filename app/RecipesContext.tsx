import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IUser, DATA } from './data';

interface RecipesContextProps {
  recipes: IUser[];
  addRecipe: (recipe: IUser) => void;
}

const RecipesContext = createContext<RecipesContextProps | undefined>(undefined);

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<IUser[]>(DATA);

  const addRecipe = (recipe: IUser) => {
    setRecipes([...recipes, { ...recipe, id: (recipes.length).toString() }]);
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipesProvider');
  }
  return context;
};
