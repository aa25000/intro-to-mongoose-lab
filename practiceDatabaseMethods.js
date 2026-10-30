const dotenv = require('dotenv').config()
const Recipe = require('./models/Recipe')
const connectToDatabase = require('./db')

connectToDatabase()


async function createRecipe(newRecipe){
    try{
        const createdRecipe = await Recipe.create(newRecipe)
        console.log(createdRecipe)
    }
    catch(error){
        console.log("Failed to create recipe.")
    }
}

const newRecipe = {
    name: "Um Ali",
    instructions: ["bake at 180C"],
    prepTime: 120,
    difficulty: "Medium"
}



async function getAllRecipes(){
    const allRecipes = await Recipe.find()
    console.log(allRecipes)
}


async function getRecipeById(id){
    const foundRecipe = await Recipe.findById(id)

    if(foundRecipe){
        console.log(foundRecipe)
    }
    else{
        console.log("No recipe with this ID exists.")
    }
}


async function updateRecipe(recipeId, newRecipeData){
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, {new:true})
    console.log(updatedRecipe)
}


async function deleteRecipe(recipeId){
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)

    if(deletedRecipe){
        console.log("Recipe successfully deleted.")
    }
}

createRecipe(newRecipe)
 //getAllRecipes()
// getRecipeById('6ae4c1e73d7db390f4f8d77b')
// updateRecipe('6ae4c1e73d7db390f4f8d77b', {prepTime: 100})
// deleteRecipe('6ae4c1e73d7db390f4f8d77b')