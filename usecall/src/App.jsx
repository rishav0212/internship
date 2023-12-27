import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setpassword] = useState("");
  const [len, setlen]  = useState(8);
  const [num, setnum]  = useState(0);
  const [chara, setchar]  = useState(0);
  const [me, setme] = useState(0);


  const generatepass = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(num==1){
      str+="1234567890";
    }

    if(chara==1){
      str+="~!@#$%^&*()_+`-={}|:\"<>?[]\\;',./";
    }

    for(let i = 0;i<len;i++){
      let a = Math.floor((Math.random())*str.length);
      pass+=str[a];
    }
    console.log(pass);

    setpassword(pass);
  }, [len,num,chara, setpassword]
)


useEffect(()=>{
  generatepass()
}, [len,num,chara, setpassword])

  return (
    <>
    <h1>UseCallBack USE</h1>
    <div>
      <div>
        <input type="text" placeholder = "  Password" value={password} style={{backgroundColor: 'white',color:'black', borderRadius:50 , cursor:'pointer'}}/>
        <button  style={{borderRadius:50, cursor:'pointer'}} onClick={
          window.navigator.clipboard.writeText(password)
        }>COPY</button>
      </div>
      <div>
        <div>
          <input 
          type="range" 
          min={0} 
          max={100} 
          // defaultValue=""
          value={len} 
          onChange={(e)=>{setlen(e.target.value)}}/>
          <label>Length : {len}</label>
        </div>
        <div>
          <input type="checkbox"  defaultChecked={num} 
          onClick={()=>{setnum((prev)=> !prev)}}/>
          <label >Number</label>
          <input type="checkbox"  defaultChecked={chara}
          onClick={()=>{setchar((prev)=> !prev)}} />
          <label >Characters</label>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
