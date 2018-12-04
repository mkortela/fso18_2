import React from 'react'
import ReactDOM from 'react-dom'

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
const Kurssit  = ( props ) => {

  return (
  <div>  
    {props.kurssit.map( kurssi=>
    <Sisalto key={kurssi.id} kurssi={kurssi}/>
    )}
  </div>    
)

}


const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Kurssit kurssit={kurssit} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)