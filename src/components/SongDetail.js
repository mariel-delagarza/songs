import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
  console.log(props);
  return <div>Songdetail</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);