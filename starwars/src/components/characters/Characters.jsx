import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import "./characters.css"

function Characters() {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [prevP, setPrevP] = useState(false);
  const [nextP, setNextP] = useState(false);


  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
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
  console.log("next "+nextP);
  console.log("prev "+prevP)
  // console.log(nextP)

  // const nextPage = async (event) => {
  //   event.preventDefault();
  //   setPage(page + 1)
  //   fetch(`https://swapi.dev/api/people/?page=${page}`)
  //   .then( res => { return res.json()})
  //   .then( async (resultat) => {setData(resultat.results)
  //     if(resultat.next == null) {
  //       setNext(false)
  //     }else{
  //       setNext(true)
  //     }
  //     if(resultat.previous != null){
  //       setPreview(true)
  //     } else{
  //       setPreview(false)
  //     }
  //     console.log(resultat.next)
  //   },[])
  // }

  const nextPage = () => {
    let pages = page + 1
    setPage(pages)
  }

  const prevPage = () => {
    let pages = page - 1
    setPage(pages)
}

  return <div>
    <h1>Characters</h1>
    <div className='characters'>
     {data?.map((user , key) => (
        <Card key={key} name={user.name}/>
      ))}
    </div>
    <div style={{display:"flex",justifyContent:"space-around"}}>
      
      <button onClick={prevPage}>prev</button>
      <button onClick={nextPage}>next</button>
    </div>
  </div>;
}

export default Characters;
