import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles, COLORS } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ListItem({ todo, onTodoMark, onDeleteTodo }) {



    return (
        <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    ...styles.todoText,
                    textDecorationLine: todo?.completed ? 'line-through' : 'none'
                }
                }
                >{todo?.task}</Text>
            </View>
            {
                !todo.completed && (
                    <TouchableOpacity style={{ ...styles.actionIcon, backgroundColor: COLORS.success }}>
                        <Icon name='done' size={22} color={COLORS.white}
                            onPress={() => onTodoMark(todo.id)}
                        ></Icon>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity style={{ ...styles.actionIcon, backgroundColor: COLORS.danger }}>
                <Icon name='delete' size={22} color={COLORS.white}
                    onPress={() => onDeleteTodo(todo.id)}></Icon>
            </TouchableOpacity>
        </View>
    )
}
