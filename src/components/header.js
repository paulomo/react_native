// import libraries to make a component
import React from 'react';
import { Text } from 'react-native';


// make component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};

// styling
const styles = {
    textStyle: {
        fontSize: 20
    }
};

// make component available to other component
export default Header;

