import React from 'react';
import Bucket from './Bucket';
import Form from '../Form';

class Buckets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buckets: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/buckets',
      type: 'GET'
    }).done( buckets => {
      this.setState({ buckets });
    });
  }

  addBucket = (name) => {
    $.ajax({
      url: '/buckets',
      type: 'POST',
      data: { name }
    }).done( bucket => {
      this.setState({ buckets: [...this.state.buckets, bucket] });
    });
  }

  updateBucket = (bucket) => {
    let { _id, name } = bucket;
    $.ajax({
      url: `/buckets/${_id}`,
      type: 'PUT',
      data: { name }
    }).done( bucket => {
      let buckets = this.state.buckets.map( b => {
        if (b._id === _id)
          return bucket
        return b
      });

      this.setState({ buckets });
    });
  }

  deleteBucket = (id) => {
    $.ajax({
      url: `/buckets/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ buckets: this.state.buckets.filter( b => b._id !== id ) });
    });
  }

  render() {
    let buckets = this.state.buckets.map( bucket => {
      return (
        <Bucket
          key={bucket._id}
          deleteBucket={this.deleteBucket}
          updateBucket={this.updateBucket}
          {...bucket}
        />
      )
    });

    return (
      <div>
        <Form add={this.addBucket} placeholer="Add Bucket" />
        <div className="row">
          { buckets }
        </div>
      </div>
    )
  }
}

export default Buckets;













