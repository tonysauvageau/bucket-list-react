import React from 'react';
import Form from '../Form';
import List from './List';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/lists',
      type: 'GET',
      data: { bucketId: this.props.bucketId }
    }).done( lists => {
      this.setState({ lists });
    });

  }

  addList = (name) => {
    let { bucketId } = this.props;
    $.ajax({
      url: '/lists',
      type: 'POST',
      data: { bucketId, name }
    }).done( list =>  {
      this.setState({ lists: [...this.state.lists, list] });
    });
  }

  deleteList = (id) => {
    $.ajax({
      url: `/lists/${id}`,
     type: 'DELETE' 
    }).done( () => {
      this.setState({ lists: this.state.lists.filter( l => l._id !== id )});
    });
  }

  render() {
    let lists = this.state.lists.map( list => {
      return (
        <List
          key={list._id}
          deleteList={this.deleteList}
          {...list}
        />
      )
    });

   return (
     <div>
       <Form add={this.addList} placeholder="Add List"/>
       <div className="row">
         {lists}
       </div>
     </div>
   )
  }
}

export default Lists;
