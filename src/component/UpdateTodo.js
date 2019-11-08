import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

class UpdateTodo extends Component {
    render() {
        return(
            <TouchableOpacity onPress={ () =>this.props.updateTodo() } style={styles.button}>
                <Text>
                    <Icon name="edit" size={20} color="#000000" />
                </Text>
            </TouchableOpacity >
        )
    }
    
}

export default UpdateTodo;

const styles = StyleSheet.create({
    button: {
        flex: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 5
    }
})