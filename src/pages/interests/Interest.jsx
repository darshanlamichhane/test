import './interest.scss'
import React from 'react'

function Interest() {
  return (
    
    <div className='interest'>
        <div className="container">
        <div className="text">
        <h1>Interests</h1>
        <span>Select the topics you are interested in and
            would want your companion to share.
        </span>
        </div>
        <div className="topics">
            <div className="row1">
            {/* <div className="topic1"> */}
                <button>Movies</button>
            {/* </div> */}
            {/* <div className="topic2"> */}
                <button>Stoicism</button>
            {/* </div> */}
            {/* <div className="topic3"> */}
                <button>Tech</button>
            {/* </div> */}
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Interest
