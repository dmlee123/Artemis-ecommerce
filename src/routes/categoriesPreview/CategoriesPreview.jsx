import React from "react";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from 'react-redux'
import Spinner from "../../components/Spinner/Spinner";


function CategoriesPreview() {

  const categoriesMap = useSelector(selectCategoriesMap)

  return (
   <>
   {
     !categoriesMap && <Spinner />
   }
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key = {title} title= {title} products = {products}/>
      })}
    </>
  );
}
// we need to label {title} out separately bc {products} doesnt have it.  {title} came from the Object.keys
export default CategoriesPreview;
