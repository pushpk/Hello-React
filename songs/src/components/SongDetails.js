import React from "react";
import { connect } from "react-redux";

class SongDetails extends React.Component {
  render() {
    if (!this.props.song) {
      return <div>No Song Selected!</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <p>{this.props.song.title}</p> <br />
        <p>{this.props.song.duration}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
