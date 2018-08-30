import React from 'react';
import {View , Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumList = (props) => {
		return (
			<Card>
				<CardSection>
					<View></View>
					<View style={styles.headerContainerStyle}>
						<Text>{props.title}</Text>
                        <Text>{props.Name}</Text>
					</View>
				</CardSection>
			</Card>
			
		);	
};

const styles = {
	headerContainerStyle : {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default AlbumList;