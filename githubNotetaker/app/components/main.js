import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		padding: 30, 
		marginTop: 65, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		backgroundColor: '#48BBEC'
	}

})

class Main extends Component {
	render() {
		return (
			<View>
				<Text>Testing the Router</Text>
				<Text>Testing the Router</Text>
				<Text>Testing the Router</Text>
				<Text>Testing the Router</Text>
				<Text>Testing the Router</Text>
				<Text>Testing the Router</Text>
			</View>
		);
	}
}

module.exports = Main;