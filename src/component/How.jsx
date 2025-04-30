import React from 'react'
import bleutest from '../component/images/bleutest.png'
import calenda from '../component/images/calenda.png'
import team from '../component/images/team.png'
import "../style/How.css";


function How() {
  return (
    <div className='How' >
      <div className="Htxt1">
      <h1 >How Our AI Assessment Works?</h1>
      </div>
      <div className='HowSteps'>
        {/* Step 1 */}
        <div className="How1 step">
          <div className="icon">
           <img src={bleutest} className="w-5 h-5 mr-2" />
             
          </div>
          <h2 className="Htitle1">Complete Three Tests</h2>
          <p className="Htxt1">
            Take our specialized tests designed to evaluate different aspects of your skills and abilities.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="How2 step">
          <div className="icon">
           <img src={calenda} alt="" />
          </div>
          <h2 className="title2">AI Analysis</h2>
          <p className="Htxt2">
            Our advanced AI analyzes your responses and performance across all tests
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="How3 step">
          <div className="icon">
           <img src={team}alt="" />
          </div>
          <h2 className="Htitle3">Receive Results</h2>
          <p className="Htxt3">
            Get your acceptance rate and detailed feedback on your strengths and areas for improvement
          </p>
        </div>
      </div>
    </div>
  )
}

export default How