import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from './actions/select-song';

class songList extends React.Component {
	render(){
		return this.props.songs.map((song) => {
			return(
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
					</div>
					<h4 className="content header">{song.title}</h4>
					<div className="description">{song.duration}</div>
				</div>
			);
		});
	}
}

const mapStateToProps = (state) => {
	return {songs: state.songs};
};

export default connect(mapStateToProps,{selectSong: selectSong})(songList);   ///calls the function above and passes to component as props