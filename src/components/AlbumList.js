import React,{ Component } from 'react';
import {View , Text} from 'react-native';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
	// componentWillMount() {
		
	// }

	render(){
		return (
			<View>
				<AlbumDetails title={'Title'} Name = {'Dheeraj Singh'} />
			</View>
		);

	}
};

export default AlbumList;