import React from 'react'
import { useState } from 'react';
import MenuItem from '../menuItem/MenuItem';
import "./Directory.scss"

function Directory() {
    
    const [sections, setSections] = useState([{
      title: 'H.I.T.',
      imageUrl: '',
      id: 1,
      food: "food",
      linkUrl: 'learn-more/hit'
    },
    {
      title: 'Fresh Mix',
      imageUrl: '',
      id: 2,
      food: "food",
      linkUrl: 'learn-more/freshmix'
    },
    {
      title: 'Osopure',
      imageUrl: '',
      id: 3,
      food: "food",
      linkUrl: 'learn-more/osopure'
    },
    {
      title: 'Dog',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0431/8714/2824/t/6/assets/artemis-grand-10_1080x1620_crop_center.jpg',
      id: 4,
      size: 'large',
      linkUrl: 'shop/dog'
    },
    {
      title: 'Cat',
      imageUrl: 'https://burst.shopifycdn.com/photos/shopify/cat-enjoying-the-view_1080x.jpg',
      id: 5,
      size: 'large',
      linkUrl: 'shop/cat'
    }]);

 const eachSection = sections.map((data) => {
    return (
    <MenuItem key = {data.id} data = {data}/>
        )
    
 })

  return (
    <div>
        <div className='directory-menu'>
            {eachSection}
        </div>
    </div>
  )
}

export default Directory