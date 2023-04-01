import './quote.css'
import { getQuoteAsync } from './quoteSlice';
import { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

export function Quote(){

 const initialState = {
    text:"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author:"Oprah Winfrey"
 }

 const category = ['happiness','courage','death','dreams','fear','forgiveness','inspirational','marriage','equality','family']

 //const [quote,setQuote] = useState(initialState);
 const quote  = useSelector((state) => state.quote)
 const dispatch = useDispatch();

 const rando = Math.floor(Math.random() * 10);

  return(
    <div className={'header bg-success' } style={{ }}>
        <div id="quote-box" className={'p-4 card'} style={{ width: '' }}>
        
            <div style={{width:'35rem'}}>
                <p id="text">{quote.text}</p>
                <span id="author"className="ml-5">- {quote.author}</span>

             </div>
            <div className="d-flex mt-4 justify-content-between">
                <div>
                <a id="tweet-quote" href='twitter.com/intent/tweet' className="btn btn-success">twitter</a>
                <button className="btn btn-success ms-2">tumblr</button>
                </div>
                <div className="ms-">
                <button  onClick={() => dispatch(getQuoteAsync(category[rando]))} id="new-quote" className="btn btn-success">New quote</button>
                </div>
            </div>
        
        </div>
    </div>
  )
}