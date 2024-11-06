import { useState } from 'react'
import {apiReq} from "./api/postApi"

const App = () => {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const handleConvertCurrency = async() => {

    setError("");
    setLoading(true) ;

    try{
      const res = await apiReq.get(`${fromCurrency}/${toCurrency}/${amount}`) ;

      const data = await res.data ;
      setConvertedAmount(data.conversion_result
      )
    }
    catch(err) {
      console.log(err)
      setError("Internal Error! Try Again")
    }
    finally {
      setLoading(false) ;
    }
  }


  return (
    <section className='currencyConverter'>
      <div className="currencyDiv">
        <h1>Currency Converter</h1>
        <div>
          <label>Amount: </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div className="currencySelector">
          <label htmlFor="">From: </label>
            <select value={fromCurrency ? fromCurrency : "USD"} onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="USD">USD - United States Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="EUR">EUR - Euro</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="AED">AED - United Arab Emirates Dirham</option>
                <option value="SAR">SAR - Saudi Riyal</option>
                <option value="SEK">SEK - Swedish Krona</option>
                <option value="NOK">NOK - Norwegian Krone</option>
                <option value="DKK">DKK - Danish Krone</option>
                <option value="TRY">TRY - Turkish Lira</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="IDR">IDR - Indonesian Rupiah</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="PLN">PLN - Polish Zloty</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="CZK">CZK - Czech Koruna</option>
                <option value="HUF">HUF - Hungarian Forint</option>
                <option value="ILS">ILS - Israeli New Shekel</option>
                <option value="CLP">CLP - Chilean Peso</option>
                <option value="PKR">PKR - Pakistani Rupee</option>
                <option value="EGP">EGP - Egyptian Pound</option>
                <option value="BDT">BDT - Bangladeshi Taka</option>
                <option value="VND">VND - Vietnamese Dong</option>
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="LKR">LKR - Sri Lankan Rupee</option>
                <option value="KWD">KWD - Kuwaiti Dinar</option>
                <option value="QAR">QAR - Qatari Riyal</option>
                <option value="BHD">BHD - Bahraini Dinar</option>
                <option value="OMR">OMR - Omani Rial</option>
              </select>
        </div>


        <div className="currencySelector">
          <label htmlFor="">To: </label>
          
            <select value={toCurrency ? toCurrency : "INR"} onChange={(e) => setToCurrency(e.target.value)}>
                <option value="USD">USD - United States Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="EUR">EUR - Euro</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="AED">AED - United Arab Emirates Dirham</option>
                <option value="SAR">SAR - Saudi Riyal</option>
                <option value="SEK">SEK - Swedish Krona</option>
                <option value="NOK">NOK - Norwegian Krone</option>
                <option value="DKK">DKK - Danish Krone</option>
                <option value="TRY">TRY - Turkish Lira</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="IDR">IDR - Indonesian Rupiah</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="PLN">PLN - Polish Zloty</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="CZK">CZK - Czech Koruna</option>
                <option value="HUF">HUF - Hungarian Forint</option>
                <option value="ILS">ILS - Israeli New Shekel</option>
                <option value="CLP">CLP - Chilean Peso</option>
                <option value="PKR">PKR - Pakistani Rupee</option>
                <option value="EGP">EGP - Egyptian Pound</option>
                <option value="BDT">BDT - Bangladeshi Taka</option>
                <option value="VND">VND - Vietnamese Dong</option>
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="LKR">LKR - Sri Lankan Rupee</option>
                <option value="KWD">KWD - Kuwaiti Dinar</option>
                <option value="QAR">QAR - Qatari Riyal</option>
                <option value="BHD">BHD - Bahraini Dinar</option>
                <option value="OMR">OMR - Omani Rial</option>
              </select>

        </div>

        <button disabled={loading || amount <= 0} onClick={handleConvertCurrency}>
          {loading ? "converting..." : "Converted"}
        </button>

        <hr />
        {convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </h2>
          </div>
        )}
        
        {error && <p>{error}</p>}
      </div>

    </section>
  )
}

export default App