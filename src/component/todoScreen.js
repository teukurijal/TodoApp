import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView, 
  RefreshControl
} from 'react-native';
import Header from './Header';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import * as actionTodos from '../_actions/actionTodos';


class todoScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRefreshing: false,
    }
}

componentDidMount() {
    this.props.getTodos()
}

refreshData() {
  this.setState({isRefreshing: true})
  this.componentDidMount()
  setTimeout(() => {
    this.setState({isRefreshing: false})
  }, 1000)
};

  render() {
    const { todos } = this.props
    return (
      <View style={styles.container}>
        <ScrollView
               refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={() => this.refreshData()}
                />
              }>
        <View style={styles.headercontainer}>
          <Header title='Todo App'/>
        </View>

        <View style={styles.todocontainer}>
          <TodoList
            todo={todos}
          />
        </View>
        </ScrollView>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todos.data
})
const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(actionTodos.getTodos()),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(todoScreen);

const styles = StyleSheet.create({
  headercontainer: {
    flex: 0,
    justifyContent: 'center'
  },
  textinputcontainer:{
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  todocontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
})