import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
		if(song) return(
			<div className="item content">
				<h3>Details for:</h3>
				<div className="ui header">Title: {song.title}</div>
				<div className="ui description">Duration: {song.duration}</div>
			</div>
		);
		//console.log(props.song.title,props.song.duration);
		return <div>select a song eheh :)</div>
};

const mapStateToProps = (state) => {
	return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);