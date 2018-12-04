import React from 'react'

const Otsikko = ( props ) => {
    return (
      <div>
      <h1>{ props.kurssi.nimi }</h1>
      </div>
    )
  }

const Sisalto = ( props ) => {

    let summa = 0;
    props.kurssi.osat.forEach(element => {
      { summa += element.tehtavia; }
    });
  
    const m2 = props.kurssi.osat.map((osa)=><li key={osa.id}> {osa.nimi}  {osa.tehtavia}  </li>);
  
    return (
      <div>
        <h1>{props.kurssi.nimi}</h1>
      <ul>{m2}</ul>
      <p> yhteensä  {summa} tehtävää</p>
      </div>
    )
  }


const Kurssi  = ( props ) => {

    return (
    <div>  
    <Otsikko  kurssi={props.kurssi}/>
    <Sisalto  kurssi={props.kurssi}/>
    </div>    
  )

}
export default Sisalto
