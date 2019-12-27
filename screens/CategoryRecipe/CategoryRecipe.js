import React from 'react';
import { 
   View,
   FlatList, 
   Text, 
   Image, 
   TouchableHighlight } from 'react-native';
import { getRecipesByCategoryId } from '../../database/dataAPI';
import styles from './styles';

const CategoryRecipe = (props) => {

    const onPressRecipe = (item) => {
      const recipeId = item.recipeId
      const recipePhoto = item.photo_url
      const recipeTitle = item.title
      const recipePreptime = item.prepTime
      const recipeCooktime = item.cookTime
      const recipeServingsize = item.servingSize
      props.navigation.navigate('Recipe', {
          recipeTitle, 
          recipeId,
          recipePhoto,
          recipePreptime, 
          recipeCooktime, 
          recipeServingsize});
    }

    return(
        <View>
            <FlatList 
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={getRecipesByCategoryId(props.navigation.getParam('categoryId'))} 
              renderItem={({item}) => {
                return(
                    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
                    <View style={styles.container}>
                      <Image style={styles.photo} source={{ uri: item.photo_url }} />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </TouchableHighlight>
                )
            }}
            keyExtractor={item => `${item.recipeId}`}
            />
        </View>
    )
}

export default CategoryRecipe;
