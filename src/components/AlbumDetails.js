import React from 'react';
import {View , Text , Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumList = ({ albumData }) => {
	const {title , artist , thumbnail_image , image , url} = albumData;
	const {thumbNail , 
			headerContainerStyle,
			thumbNailContainer,
			headerTextStyle,
			imageStyle} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbNailContainer}>
						<Image
						style={thumbNail} 
						source={{uri: thumbnail_image}} />
					</View>
					<View style={headerContainerStyle}>
						<Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image 
					style={imageStyle}
					source={{uri : image}} />
				</CardSection>

				<CardSection>
					<Button  onPress={() => Linking.openURL(url)}>Buy Now</Button>
				</CardSection>
			</Card>
			
		);	
};

const styles = {
	headerContainerStyle : {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbNail: {
		width: 50,
		height: 50,
	},
	thumbNailContainer:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerTextStyle:{
		fontSize: 18
	},
	imageStyle:{
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumList;