import { useState } from 'react';
import './quote.modular.css';

const Quote = (props) => {
   console.log(props);
   
     return (
        <div className='quoteContainer'>
               <p className='quetes'>
                  {props.data.quest}
               </p>
              <p className='author'>
               {props.data.author}
              </p>
        </div>
     );
};

export default Quote;