import React from 'react';

const Person = ( props ) => {
    return (
        <div><li key={props.person.name}> {props.person.name} {props.person.number}</li></div>
    )
  }

const AddPersonForm = ( props ) => {
    return (
      <form onSubmit={props.add.addItem}>
      <div>
        nimi: <input value={props.add.state.newName}
        onChange={props.add.handleItemChange}
        />
      </div>
      <div>
        numero: <input 
        value={props.add.state.newNumber}
        onChange={props.add.handleNumberChange}
        />
     </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
    )
  }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '23242343244',
          id: 0 }
      ],
      newName: 'uusi nimi..',
      newNumber: '21-323223'
    }
  }

  addItem = (event) => {
    event.preventDefault()
    var already_exists = false;
    var uusi = this.state.newName;
    this.state.persons.forEach(function(item, index, array) {
      if(uusi == item.name){
          already_exists = true;
      }
    });
    console.log(already_exists);
    if(!already_exists) {
    const noteObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: this.state.persons.length + 1
      }
      const persons = this.state.persons.concat(noteObject)
      this.setState({
        persons: persons,
        newName: '',
        newNumber: ''
      })
    }
  }

  handleItemChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    console.log(this.state);    
    const m2 = this.state.persons.map(person => <Person person={person} /> );
    return (
      <div>
        <div>
                
        </div>
        <h2>Puhelinluettelo</h2>
        <AddPersonForm add={this} />
        <h2>Numerot</h2>
        <ul>
        {m2}
        </ul>
      </div>
    )
  }
}

export default App