import React from 'react'
import './VacencyList.css'
import Item from '../item/Item'
import vacancies from '../../assets/vacancies'
const VacencyList = () => {
  return (
    <div className='reletedproduct'>
      <h1>New Vacancies</h1>
      <hr/>
      <div className="reletedproduct_item">
        {vacancies.map((item,i)=>{
            return<Item key={i} id={item.id} title={item.title} image={item.image} company={item.company} location={item.location} description={item.description}/>
        })}
      </div>
    </div>
  )
}

export default VacencyList
