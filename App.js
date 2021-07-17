import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from './src/components/Input';
import Items from './src/components/Items';

const initTodos = [
  {
    id: 1,
    title: 'Play Game',
    description: 'Tomorow i will play game.',
    dateTime: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    title: 'Exercitation exercitation.',
    description: 'Dolor aute sint veniam id enim ullamco.',
    dateTime: new Date().getTime(),
    isDone: true,
  },
  {
    id: 3,
    title: 'Qui cillum culpa.',
    description:
      'Aute elit ullamco laborum deserunt consectetur do adipisicing.',
    dateTime: new Date().getTime(),
    isDone: false,
  },
  {
    id: 4,
    title: 'Irure quis labore excepteur aliqua.',
    description:
      'Proident ex consequat amet dolor enim ipsum consectetur aute eu.',
    dateTime: new Date().getTime(),
    isDone: false,
  },
];

const App = () => {
  const [isShowAddTasks, setIsShowAddTasks] = useState(false);
  const [todos, setTodos] = useState(initTodos);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const onPressShowAddTasks = useCallback(
    item => {
      return setIsShowAddTasks(!isShowAddTasks);
    },
    [isShowAddTasks],
  );

  const onPressAddTasks = useCallback(
    item => {
      const data = [...todos];
      data.push({
        id: data.length + 1,
        title: inputTitle,
        description: inputDescription,
        dateTime: new Date().getTime(),
        isDone: false,
      });
      setTodos(data);
      setInputTitle('');
      setInputDescription('');
    },
    [inputDescription, inputTitle, todos],
  );

  const onPressCheckBox = useCallback(
    item => {
      const data = [...todos];
      const index = data.findIndex(i => {
        return i.id === item.id;
      });
      data[index].isDone = !data[index].isDone;
      setTodos(data);
    },
    [todos],
  );

  const onPressItem = useCallback(item => {
    return Alert.alert('onPressItem');
  }, []);

  const onPressEdit = useCallback(item => {
    return Alert.alert('onPressEdit');
  }, []);

  const onPressDelete = useCallback(item => {
    const data = [...todos];
    const index = data.findIndex(i => {
      return i.id === item.id;
    });
    data.splice(index, 1);
    setTodos(data);
    [todos];
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.titleText}> Remainder </Text>
        <TouchableOpacity onPress={onPressShowAddTasks}>
          <View style={styles.btnAddTasks}>
            <Icon size={20} color="black" name="plus" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.itemWrapper}>
        <ScrollView>
          <Items
            data={todos}
            onPressCheckBox={onPressCheckBox}
            onPressItem={onPressItem}
            onPressEdit={onPressEdit}
            onPressDelete={onPressDelete}
          />
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <Modal
          transparent={true}
          visible={isShowAddTasks}
          animationType="slide">
          <View style={styles.modalAdd}>
            <TouchableOpacity onPress={onPressShowAddTasks}>
              <View style={styles.modalClose}>
                <Icon size={20} color="black" name="times" />
              </View>
            </TouchableOpacity>
            <Input
              onPressAddTasks={onPressAddTasks}
              valueTitle={inputTitle}
              setInputTitle={setInputTitle}
              valueDescription={inputDescription}
              setInputDescription={setInputDescription}
            />
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e5e7ea',
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 0.98,
  },
  itemWrapper: {
    padding: 20,
  },
  btnAddTasks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  modalClose: {
    alignItems: 'flex-end',
    marginTop: 15,
    marginRight: 15,
  },
  modalAdd: {
    height: '50%',
    marginTop: 'auto',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default App;
