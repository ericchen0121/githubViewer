import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
var Badge = require('./badge')

var styles = StyleSheet.create({
	container: {
		flex: 1
	}, 
	buttonText: {
		fontSize: 18,
		color: 'white', 
		alignSelf: 'center'
	}, 
	rowContainer: {
		padding: 10
	}, 
	rowTitle: {
		color: '#48BBEC', 
		fontSize: 16
	},
	rowContent: {
		fontSize: 19
	}
})

class Profile extends Component{
	getRowTitle(user, item){
		item = (item==='public_repos') ? item.replace('_', ' ') : item;
		return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
	}
	render(){
		// cache userInfo prop
		var userInfo = this.props.userInfo;
		// github api keys
		var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
		var list = topicArr.map((item, index) => {
			if(!userInfo[item]){
				// react diffs here with the key
				return <View key={index} />
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)}</Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
					</View>
				)
			}
		});

		// need to pass badge userInfo, we can pass this down from dashboard to badge and further down
		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		)
	}
};

module.exports = Profile;