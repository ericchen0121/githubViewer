import React, {Component} from 'react';
import { View, WebView, StyleSheet} from 'react-native'

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#F6F6EF', 
		flexDirection: 'column'	}
})

class Web extends Component{
	propTypes: {
		url: React.PropTypes.string.isRequired
	}
	render(){
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
}
module.exports = Web;