import React from 'react';

const Name = ( props ) => {
    return (
        <div>{ props }</div>
    )
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: 0 }
      ],
      newName: 'uusi nimi..'
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
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: this.state.persons.length + 1
      }
      const persons = this.state.persons.concat(noteObject)
      this.setState({
        persons: persons,
        newName: ''
      })
    }
  }

  handleItemChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    console.log(this.state);    
    const m2 = this.state.persons.map(person => <li key={person.name}> {person.name} </li> );
    return (
      <div>
        <div>
                
        </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addItem}>
          <div>
            nimi: <input value={this.state.addItem}
            onChange={this.handleItemChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
        {m2}
        </ul>
      </div>
    )
  }
}

export default App