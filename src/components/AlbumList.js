import React,{ Component } from 'react';
import {ScrollView} from 'react-native';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
	// componentWillMount() {
		
	// }

	render(){
		return (
			<ScrollView>
				<AlbumDetails title={'Title'} Name = {'Dheeraj Singh'} />
			</ScrollView>
		);

	}
};

export default AlbumList;