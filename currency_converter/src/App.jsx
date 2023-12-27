import { useEffect, useState } from 'react'
import {Input} from  './components'
import './App.css'
import usecurrencyInfo from './hooks/useCurrencyinfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setto] = useState('inr');
  const [result, setResult] = useState(0);

  const currencyinfo = usecurrencyInfo(from)

  useEffect(()=>convert(), [amount])

  const Options = Object.keys(currencyinfo)

  const swap = ()=>{
    setto(from)
    setFrom(to)
    setAmount(0)
    setResult(0)
  }

  const convert = ()=>setResult(amount*currencyinfo[to])

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
          <div>
            <form onSubmit={(e)=>{e.preventDefault()}}>
              <div>
                <Input 
                  label="From"
                  amount={amount}
                  currencyOption={Options}
                  onCurrencyChange={setFrom}
                  onAmountChange={setAmount}
                  selectCurrency={from}
                />
              </div>
              <div>
                <button onClick={swap}>swap</button>
              </div>
              <div>
                <Input 
                  label="To"
                  amount={result}
                  currencyOption={Options}
                  onCurrencyChange={setto}
                  selectCurrency={to}
                  

                />
              </div>

            </form>
          </div>
      </div>

      
    </div>
  )
}

export default App
