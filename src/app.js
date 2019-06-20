import React from 'react';
import SongList from './song-list';
import SongDetail from './song-detail';
 
const App = () => {
		return(
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<div className="ui divided list"><SongList /></div>
				</div>
				<div className="column four wide"><SongDetail /></div>
			</div>
		</div>
		);
};

export default App;