import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axiosInstance from '../service/axios';

class Header extends Component {
  state = {
    modalVisible: false,
    addtodo:''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleAddTodos = async () => {
    await axiosInstance({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      url: `/todos`,
      data: {
        name: this.state.addtodo,
        completed: false,
      }
    }).then( response => {
      this.setState({
        addtodo:'',
      })
    })
    this.setModalVisible(!this.state.modalVisible)
  }
  
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity 
                  onPress={()=>{ this.setModalVisible(true)}}
                >
                  <Icon name="add-box" size={29} color="#000000"/>
                </TouchableOpacity>
            </View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={styles.modal}>
                <View style={{alignItems:'center'}}>
                  <Text>Input Your Todos</Text>
                  <TextInput
                    onChangeText={(text) =>
                      this.setState({addtodo: text })
                    }
                    style={styles.textinput}
                  >
                  </TextInput>
                  <View style={{flexDirection:'row', justifyContent:'center', marginHorizontal:20}}>
                  <TouchableOpacity 
                  style={styles.btn}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    >
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={styles.btn}
                    onPress={
                      () => this.handleAddTodos()}
                    >
                    <Text>Add Todos</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )
    }
}
export default Header;

const styles = StyleSheet.create({
    header: {
      marginHorizontal:20,
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row' 
    },
    title: {
        color: '#f3f3f3',
        fontSize: 25,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    container: {
      backgroundColor: '#487EE9',
    },
    modal4: {
      height: 340,
      width:330,
      borderRadius:30
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textinput: {
      height: 50, 
      width: 200, 
      backgroundColor: '#DDDDDD',
      marginTop:16,
      borderRadius:10
    },
    btn: {
      backgroundColor:'#09CE61',
      paddingHorizontal:5,
      paddingVertical:5,
      marginVertical:10,
      borderRadius:10
    },
})