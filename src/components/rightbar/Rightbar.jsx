import React from 'react'
import './rightbar.scss'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <spam>Quick suggestions</spam>
          <div className="user">
            <div className="userInfo">
            <img alt='ET' src='data:image/jpeg;base64,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'></img>
            <spam>Elon Tiwari</spam>
            </div>
            <div className="buttons">
            <button>Connect</button>
            <button>Dismiss</button>
          </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
            <img alt='ET' src='data:image/jpeg;base64,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'></img>
            <spam>Elon Tiwari</spam>
            </div>
            <div className="buttons">
            <button>Connect</button>
            <button>Dismiss</button>
          </div>
          </div>

        </div>
        <div className="item">
          <spam>Online companions</spam>

          <div className="user">
            <div className="userInfo">
            <img alt='ET' src='data:image/jpeg;base64,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'></img>
            <div className="online"/>
              <spam>Elon Tiwari</spam>
            
            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar

