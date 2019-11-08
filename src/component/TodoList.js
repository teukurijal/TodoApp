import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, CheckBox, ScrollView, RefreshControl } from 'react-native';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';


Item = (props) => {
  return (
      <View style={styles.itemcontainer}>
          <View style={styles.checkboxcontainer}>
              <CheckBox
              style={styles.checkbox}
              // onChange={true}
              value={props.completed}
              />
              <Text style={styles.title}> {props.name} </Text>
          </View>
          <View style={styles.iconcontainer}>
              <UpdateTodo isEditMode={ props.activeItemId ===  props.index} updateTodo={() => props.updateTodo()} />
              <DeleteTodo deleteTodo={ () => props.deleteTodo()} />
          </View>
      </View>
  )
}
class TodoList extends Component {





    render(){

        return(
            <View>
               
              <FlatList
                data={this.props.todo}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) =>
                  <Item
                    name={item.name}
                    completed={item.completed}
                    />
                }
              />
            </View>
        )
    }
}


export default TodoList

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    itemcontainer: {
      flex:1,
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      elevation: 1,
      borderRadius: 10
    },
    title: {
      flex:0.6,
      fontSize: 10,
      color: '#000000',
    },
    button: {
      justifyContent: 'center',
    },
    checkbox: {
      justifyContent: 'center'
    },
    checkboxcontainer: {
      flexDirection:'row',
      alignItems:'center'
    },
    iconcontainer: {
      flexDirection:'row'
    }
})