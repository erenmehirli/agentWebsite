import React from 'react'
import MoreToAdore from '../components/MoreToAdore'
import Productscard from '../components/Productscard'
import More from '../components/More'

const Home = () => {
  return (
    <div className='flex flex-col'>
<MoreToAdore/>
<br />
<Productscard/>
<br />
<More/>
    </div>
  )
}

export default Home