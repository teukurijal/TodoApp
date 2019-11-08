import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class DeleteTodo extends Component {
    render () {
        return(
            <TouchableOpacity onPress={() => this.props.deleteTodo()} style={styles.button}>
                <Text><Icon name="delete" size={25} color="000000" /></Text>
            </TouchableOpacity >
        )
    }
}

export default DeleteTodo;

const styles = StyleSheet.create({
    button: {
        flex: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 5
    },
    
})