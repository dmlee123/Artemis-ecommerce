import React from 'react'
import "./categoryPreview.scss"
import ProductCard from '../product-card/ProductCard'
import { Link } from 'react-router-dom'


function CategoryPreview({ title, products }) {
    // console.log(products)
    // console.log(title)
  return (
    <div className='category-preview-container'>
        <h2>
            <Link to ={title} className='title'>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
            {
                products.filter((_, index) =>(
                    index < 4
                )).map((product) =>(
                    <ProductCard key = {product.id} product = {product} /> 
                ))
            }
        </div>
    </div>
  )
}

export default CategoryPreview