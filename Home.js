import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import {Ecommercecontext} from '../Context/App' 
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Home() {

const {data} = useContext(Ecommercecontext)

  return (
    <div className='section'>
      <h1>Home Page <ArrowRightAltIcon/></h1>
    {
      data.map((element,index)=>{
        return(
          <div className='article' key={index}>
            <h2><Link to = {`blog/${element.id}`}>{element.title}</Link></h2>
            <p>{element.body}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Home