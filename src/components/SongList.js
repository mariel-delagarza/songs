import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  // "get my state" - all state in redux store
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
