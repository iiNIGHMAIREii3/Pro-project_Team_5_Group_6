import React from 'react'
import blackgoogle from '../component/images/blackgoogle.png'
import microsoft from '../component/images/microsoft.png'
import ibm from '../component/images/ibm.png'
import '../style/Company.css'

import github from '../component/images/github.png'

function Company() {
  return (
    <div>
<div className='Htitle'>
    <h1>Trusted by Leading Tech Company</h1>
</div>
<div className='logos'>

 <div className='google'><img src={blackgoogle} /></div>



<div className='ibm'><img src={ibm} /></div>
<div className='github'><img src={github} /></div>



</div>

    </div>
  )
}

export default Company