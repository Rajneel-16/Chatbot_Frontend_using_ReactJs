import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets.js'
import { Context } from '../../Context/Context';

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  console.log('Main component rendered')
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        
        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello, Rajneel</span></p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest places to see on upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize the concept of 'Urban Palnning'</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve readibitlity of cdoe</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        : <div className='result'>

          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
            <br /><br />
          </div>

          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
}
          </div>

        </div>
        }
        
        
        
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Warning! Gemini may display incorrect content!
          </p>
        </div>
      </div>    
    </div>
  )
}

export default Main