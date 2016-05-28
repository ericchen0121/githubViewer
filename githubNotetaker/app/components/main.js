import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TextInput,
  TouchableHighlight, 
  ActivityIndicatorIOS
} from 'react-native';

var api = require('../utils/api')

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		padding: 30, 
		marginTop: 65, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		backgroundColor: '#48BBEC'
	}, 
	title: {
		marginBottom: 20, 
		fontSize: 25, 
		textAlign: 'center', 
		color: '#fff'
	}, 
	searchInput: {
		height: 50, 
		padding: 4, 
		marginRight: 5, 
		fontSize: 23, 
		borderWidth: 1, 
		borderColor: 'white', 
		borderRadius: 8,
		color: 'white'
	}, 
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	}, 
	button: {
		height: 45, 
		flexDirection: 'row', 
		backgroundColor: 'white', 
		borderColor: 'white', 
		borderWidth: 1, 
		borderRadius: 8,
		marginBottom: 10,  
		marginTop: 10, 
		alignSelf: 'stretch', 
		justifyContent: 'center'
	}

})

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: '', 
			isLoading: false, 
			error: false
		}
	}
	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		})
	}
	handleSubmit(event){
		//update our indicatorIOS spinner
		this.setState({
			isLoading: true
		})
		api.getBio(this.state.username)
			.then((res) => {
				if(res.message === 'Not Found'){
					this.setState({
						error: 'User not found', 
						isLoading: false;
					})
				} else {
					// push a new route onto the stack, if user is found
					this.props.navigator.push({
						// if user doesn't have a name, select an option
						title: res.name || "Select an Option", 
						component: Dashboard,
						passProps: {userInfo: res}
					});
					//when you go back, reset the state to be clear
					this.setState({
						isLoading: false, 
						error: false, 
						username: ''
					})
				}
			}
		//fetch data from github
		//reroute to the next passing that github information
	}
	render() {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Search for a Github User</Text>
				<TextInput
					style = {styles.searchInput}
					value ={this.state.username}
					onChange={this.handleChange.bind(this)} />
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}
					underlayColor='white'>
					<Text style={styles.buttonText}> SEARCH </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

module.exports = Main;