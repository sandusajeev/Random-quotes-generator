import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './QuotesGenerator.css'
import request from './request'

function QuoteGenerator() {
    const [quotes, setQuotes] = useState()
    const [quotetext, setQuoteText] = useState()
    const [author, setAuthor] = useState()
    const [image, setImage] = useState("");

    const qoutesUrl = "https://dummyjson.com/quotes"
    const fetchQuotes = async () => {
        const { data } = await axios.get(qoutesUrl)
        console.log(data);
        console.log(data.quotes);
        const result = data.quotes[Math.floor(data.quotes.length * Math.random())]
        setQuotes(result)
        setQuoteText(result.quote);
        console.log(result.quote);

        var Quote = result.quote;
        console.log(Quote)

        setAuthor(result.author)
        console.log(result.author);

        var AuthorName = result.author;
        console.log(AuthorName)
   

        if(AuthorName == 'Rumi'){
            const img = (request.Rumi);
            setImage(img)
        }
        else if(AuthorName == 'Abdul Kalam'){
            const img = (request.AbdulKalam)
            setImage(img)
        }
        else if(AuthorName == 'Bill Gates'){
            const img = (request.BillGates)
            setImage(img)
        }
        else if(AuthorName == 'Abu Bakr (R.A)'){
            const img = (request.AbuBakr)
            setImage(img)
        }
        else if(AuthorName == 'Albert Einstein'){
            const img = (request.AlbertEintein)
            setImage(img)
        }
        else if(AuthorName == 'Abraham Lincoln'){
            const img = (request.AbrahamLincoln)
            setImage(img)
        }
        else if(AuthorName == 'Oprah Winfrey'){
            const img = (request.OprahWinfrey)
            setImage(img)
        }
        else if(AuthorName == 'Muhammad Ali'){
            const img = (request.MuhammadAli)
            setImage(img)
        }
        else if(AuthorName == 'William Shakespeare'){
            const img = (request.Shakespeare)
            setImage(img)
        }
        else if(AuthorName == 'Mother Teresa'){
            const img = (request.MotherTeresa)
            setImage(img)
        }
        else if(AuthorName == 'Nelson Mandela'){
            const img = (request.NelsonMandela)
            setImage(img)
        }
        else if(AuthorName == 'Umar ibn Al-Khattāb (R.A)'){
            const img = (request.UmaribnAl)
            setImage(img)
        }
        else if(AuthorName == 'Walt Disney'){
            const img = (request.WaltDisney)
            setImage(img)
        }
        else if(AuthorName == 'Ali ibn Abi Talib (R.A)'){
            const img = (request.AliibnAbi)
            setImage(img)
        }
        else if(AuthorName == 'Aristotle'){
            const img = (request.Aristole)
            setImage(img)
        }
    }

    

 

    useEffect(() => {
        fetchQuotes()
    }, [])

    function refresh() {
        fetchQuotes()
    }

    return (
        <>

            <div className='qoutesBox'>
                <div className='mainBox'>
                    <h1 style={{ color: 'red', textAlign: 'center' }}>Quotes</h1>
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', fontSize: '18px', margin: '20px 40px', fontWeight: 'bold' }}>{quotetext}</p>
                        <p style={{ color: 'white', textAlign: 'center', fontSize: '20px', margin: '20px 40px', fontWeight: 'bold' }}>- {author}</p>
                        <img src={image} alt="" style={{height:'200px', width:'200px', borderRadius:'1rem'}}/>
                    </div>
                    <div className='mt-3'>
                        <button className='clickbutton' onClick={refresh} >CLICK HERE FOR NEXT</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default QuoteGenerator