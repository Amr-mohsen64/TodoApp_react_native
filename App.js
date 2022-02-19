import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StatusBar, Alert } from 'react-native';
import { styles, COLORS } from './styles';
import ListItem from './list-item';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddTodo from './add-todo';

export default function App() {
  const [todos, setTodos] = useState([
    // { id: 1, task: "first todo", completed: true },
  ])

  const todoAddHandler = (todo) => {
    // console.log({ todo });
    setTodos([...todos, todo])
  }

  const markTodoCompleteHandler = (todoId) => {
    console.log(todoId);
    const newTodos = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true }
      }
      return item
    })
    setTodos(newTodos)
  }

  const deleteTodo = (todoId) => {
    const newTodo = todos.filter((item) => item.id != todoId)
    setTodos(newTodo)
    alert("deleted !")
  }

  const clearAllTodos = () => {
    Alert.alert('Confirm', "Do you want to delete All ?", [
      {
        text: 'Yes',
        onPress: () => setTodos([])
      },
      {
        text: 'No',
      }
    ])
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.appBackGround }}>
      <View style={styles.header}>
        <StatusBar hidden />
        <Text style={styles.itemTitle}>My TODO APP</Text>
        <Icon name='delete' size={30} color={COLORS.danger} onPress={clearAllTodos}></Icon>
      </View>
      {todos.length > 0 && <Text style={styles.message}>{todos.filter(todo => todo.completed == true).length} Completed TODOS of {todos.length}</Text>}

      {todos.length > 0 ?

        <FlatList
          data={todos}
          renderItem={({ item: todo }) => <ListItem
            todo={todo}
            onTodoMark={(id) => markTodoCompleteHandler(id)}
            onDeleteTodo={(id) => deleteTodo(id)} />}

          showsVerticalScrollIndicator={false}
          keyExtractor={(todo) => todo.id}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        />

        :
        <Text style={styles.noTodos}>No Todos ! let's add new </Text>
      }


      <AddTodo onTodoAdd={todoAddHandler} />
    </SafeAreaView>
  );
}


