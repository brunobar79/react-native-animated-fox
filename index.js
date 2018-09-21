import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';
import { baseStyles } from '../../styles/common';
const webPage = require('./web/index.html'); // eslint-disable-line import/no-commonjs

const AnimatedFox = (props) => (
	<WebView
		style={baseStyles.flexGrow}
		source={webPage}
		javaScriptEnabled
		bounces={false}
		scrollEnabled={false}
		injectedJavaScript={`document.body.style.background="${props.bgColor}"`}
	/>
);

AnimatedFox.propTypes = {
		/**
		/* String that represents the background color
		*/
		bgColor: PropTypes.string
}
AnimatedFox.defaultProps = {
	bgColor: 'white'
}

export default AnimatedFox;
