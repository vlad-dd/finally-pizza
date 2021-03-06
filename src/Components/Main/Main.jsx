import React from 'react'
import Sort from '../Header/Sort'
import Categories from '../Header/Categories'
import Pizza from './Pizza'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import Container from './Container'
import Button from '../Header/Button'
import './Container.css'


const Main = () => {
  
  let items = [`М'ясні`, `Вегетеріанські`, `Гриль`, `Гострі`, `Закриті`]
    return (
        <div>
         
            
        <div className="content">
        <div className="container">
          <div className="content__top">
           <Categories items = {items} />
          <Sort />
          <div>
          <Button />
          </div>
          </div>
          <Container />
        </div>
      </div>
    </div>
    )
}

export default Main
