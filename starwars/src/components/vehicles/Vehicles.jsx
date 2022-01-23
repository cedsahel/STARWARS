import React, { useState, useEffect } from 'react';

function Characters() {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [prevP, setPrevP] = useState(false);
  const [nextP, setNextP] = useState(false);


  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
     .then( res => {
        return res.json()
     })
     .then(async (resultat) => {
       setData(resultat.results)
       if (resultat.next != null) {
         setNextP(true)
       } else {
        setNextP(false)
       }

       if (resultat.previous != null) {
         setPrevP(true)
       } else {
         setPrevP(false)
       }
     })
  },[page])

  const nextPage = (event) => {
    event.preventDefault()
    let pages = page + 1
    setPage(pages)
  }

  const prevPage = (event) => {
    event.preventDefault()
    let pages = page - 1
    setPage(pages)
}

  return <div>
    <h1>VEHICLES</h1>
    <div className='VEHICLES'>
     {data?.map((user , key) => (
        <p style={{textAlign:"center"}} key={key}><a href={"vehicles/"+user.url.slice(31,-1)}>{user.name}</a></p>
      ))}
    </div>
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {prevP
        ? <a href='prev' className='btn' onClick={prevPage}>prev</a>
        : <div></div>
      }
      {nextP
        ? <a  href='next' className='btn' onClick={nextPage}><p>next</p></a>
        : <div></div>
      }
    </div>
  </div>;
}

export default Characters;
