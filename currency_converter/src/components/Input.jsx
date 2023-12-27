import {useId} from 'react';


function Input({
    label,
    amount =0,
    onAmountChange,

    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""

}) {

    const amountID = useId();

    return ( 
        <div>

            <div>
                <label htmlFor={amountID}>
                    {label}
                </label>
                <input type="number" placeholder='Amount' disabled = {amountDisable} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div>
                <p>Currency Type</p>
                <select name="" id={amountID} value={selectCurrency} 
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled = {currencyDisable}>
                    {currencyOption.map((c)=>(
                        <option key = {c} value={c}>{c}</option>
                    ))}

                </select> 
            </div>
        </div>
     );
}

export default Input;