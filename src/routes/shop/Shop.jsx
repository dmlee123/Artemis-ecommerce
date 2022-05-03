import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category-page/Category";
import { useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux"
import SHOP_DATA from "../../data";

function Shop() {
  
    const dispatch = useDispatch();
    // getting the data from firebase - only need to run this once ( I THINK DOUBLE CHECK)
//  useEffect(() => {
//         const getCategoriesMap = async () => {
//              const categoriesArray = await getCategoriesAndDocuments('categories')
//              dispatch(setCategories(categoriesArray))
     
//         }
//         getCategoriesMap();
//     },[])


//getting the data ONTO firebase from SHOP_DATA
// just run this once then hide it to get onto database
// useEffect(() => {
//   addCollectionAndDocuments('categories', SHOP_DATA)
// }, [])

  return (
  
    <Routes>
      <Route index element = {<CategoriesPreview />} />
        <Route path = ":category" element = {<Category />} />
    </Routes>
  );
}

export default Shop;
