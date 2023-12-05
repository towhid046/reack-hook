/* eslint-disable react/prop-types */
import './IncrementB.css'
const IncrementB = ({count, increment}) => {

  
    return (
        <>
        <div className="card">
            <h1>{count}</h1>
            <button className='AddToCard_btn' onClick={increment}>Inrement</button>
        </div>
        </>
    )
}

export default IncrementB;