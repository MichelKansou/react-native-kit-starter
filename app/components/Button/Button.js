// @flow
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const Button = (props) =>  {
    const {icon, text, customStyle, textHidden, onPress} = props;
    return (
        <TouchableOpacity style={customStyle ? customStyle.button : styles.button} onPress={onPress}>
            <Text style={customStyle ? customStyle.buttonText : styles.buttonText}>
                {textHidden ? '' : text}
            </Text>
        { icon ? <Image
        style={customStyle ? customStyle.buttonIcon : styles.buttonIcon}
        source={icon}
        /> : null }
        </TouchableOpacity>
    );
};

Button.propTypes = {
  text: React.PropTypes.string,
  icon: React.PropTypes.number,
  customStyle: React.PropTypes.object,
  textHidden: React.PropTypes.bool,
  onPress: React.PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
};

export default Button;
