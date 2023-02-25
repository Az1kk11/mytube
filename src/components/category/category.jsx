import React from 'react'
import { CategoryBar } from '../../Utils/Constants'

import './category.scss'

const Category = ({ selectedCategory, selectedCategoryHander }) => {


  return (
    <div className='btn-category-box'>
        {CategoryBar.map((item, index)=>(
            <button key={index} 
                className={`btn-category ${ item.name === selectedCategory && 'color' }`}
                onClick={() => selectedCategoryHander(item.name)}
            >
                <span style={{
                    color: '#76323F',
                    marginRight: '15px',
                    color : item.name === selectedCategory && '#fff',
                }} >{item.icon}</span>
                <span style={{ opacity: '1' }} >{item.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Category