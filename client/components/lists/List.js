import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/cards',
      type: 'GET',
      data: { listId: this.props._id }
    }).done( cards => {
      this.setState({ cards });
    });
  }

  addCard = (e) => {
    e.preventDefault();
    $.ajax({
      url: `/cards`,
      type: 'POST',
      data: { name: this.cardName.value, listId: this.props._id }
    }).done( card => {
      this.setState({ cards: [...this.state.cards, card] });
      this.cardName.value = null;
    });
  }

  deleteCard = (id) => {
    $.ajax({
      url: `/cards/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ cards: this.state.cards.filter( c => c._id !== id )     });
   });
  }

  render() {
    let { name, deleteList, _id } = this.props
    let cards = this.state.cards.map( c => {
    return (
      <li key={c._id} className="collection-item">
        <div>
          {c.name}
          <a 
            className="secondary-content"
            onClick={ () => this.deleteCard(c._id) }
          >
            <i className="materiali-icons">delete</i>
          </a>
        </div>
      </li>
    )
  });

  return (
    <div className="col s12 m6">
      <h5 className="center">
        {name}
      <span>
        <i 
          className="material-icons"
          onClick={() => deleteList(_id)}
        >
          delete
        </i>
      </span>
      </h5>
       <form onSubmit={this.addCard}>
         <input ref={ n => this.cardName = n } placeholder="Add Card" />
       </form>
       <ul className="collection">
        {cards}
       </ul>
     </div>
    )
  }
}

export default List;
