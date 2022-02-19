import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles, COLORS } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddTodo({ onTodoAdd }) {

    const [todoTaskInput, setTodoTaskInput] = useState("");

    const ID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    const addBtnPressHandler = () => {
        if (todoTaskInput == "") {
            alert("please fill input")
        } else {
            let newTodo = {
                id: ID(),
                task: todoTaskInput,
                completed: false
            }
            onTodoAdd(newTodo)
            setTodoTaskInput("")
        }
    }

    const textChangeHandler = (text) => {
        setTodoTaskInput(text)
    }

    return (
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Add Todo' style={{ marginTop: 10 }} value={todoTaskInput}
                    onChangeText={textChangeHandler} />
            </View>
            <TouchableOpacity onPress={addBtnPressHandler}>
                <View style={styles.iconContainer}>
                    <Icon name='add' size={30} color={COLORS.white}></Icon>
                </View>
            </TouchableOpacity>
        </View>

    )
}
