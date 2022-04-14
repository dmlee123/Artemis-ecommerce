import React from 'react'
import "./category.scss"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux'
import ProductCard from '../../components/product-card/ProductCard';

function Category() {

    const categoriesMap = useSelector(selectCategoriesMap)
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);


    useEffect(() => {
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

   
  return (
    <> 
      <h2 className = "category-title">{category.toUpperCase()}</h2>
      <div className='category-container'>
          {
              products && products.map((product) => <ProductCard key = {product.id} product = {product} />)
          }
      </div>
    </>
  
  )
}

export default Category;