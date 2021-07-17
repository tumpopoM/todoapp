import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Modal,
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
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [isShowEditTasks, setIsShowEditTasks] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  const onPressShowAddTasks = useCallback(
    item => {
      setIsShowAddTasks(!isShowAddTasks);
    },
    [isShowAddTasks],
  );

  const onPressShowEditTasks = useCallback(
    item => {
      setIsShowEditTasks(!isShowEditTasks);
      if (item.id > 0) {
        const titleValue = item.title;
        const descriptionValue = item.description;
        setInputTitle(titleValue);
        setInputDescription(descriptionValue);
        setIdEdit(item.id);
      } else {
        setInputTitle('');
        setInputDescription('');
      }
    },
    [isShowEditTasks],
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

  const onPressEdit = useCallback(
    id => {
      const data = [...todos];
      const index = data.findIndex(i => {
        return i.id === id;
      });
      data[index].title = inputTitle;
      data[index].description = inputDescription;
      setTodos(data);
      setIsShowEditTasks(!isShowEditTasks);
    },
    [inputDescription, inputTitle, isShowEditTasks, todos],
  );

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
            onPressShowEditTasks={onPressShowEditTasks}
            onPressDelete={onPressDelete}
          />
        </ScrollView>
      </View>
      <Modal transparent={true} visible={isShowAddTasks} animationType="slide">
        <View style={styles.modalAddContainer}>
          <View style={styles.modalAdd}>
            <View style={styles.titleContainer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>New Remainder</Text>
              </View>
              <TouchableOpacity onPress={onPressShowAddTasks}>
                <View style={styles.modalClose}>
                  <Icon size={20} color="black" name="times" />
                </View>
              </TouchableOpacity>
            </View>
            <Input
              statusAction={'add'}
              onPressAddTasks={onPressAddTasks}
              valueTitle={inputTitle}
              setInputTitle={setInputTitle}
              valueDescription={inputDescription}
              setInputDescription={setInputDescription}
            />
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={isShowEditTasks} animationType="slide">
        <View style={styles.modalAddContainer}>
          <View style={styles.modalAdd}>
            <View style={styles.titleContainer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Edit Remainder</Text>
              </View>
              <TouchableOpacity onPress={onPressShowEditTasks}>
                <View style={styles.modalClose}>
                  <Icon size={20} color="black" name="times" />
                </View>
              </TouchableOpacity>
            </View>
            <Input
              statusAction={'edit'}
              idEdit={idEdit}
              onPressEdit={onPressEdit}
              valueTitle={inputTitle}
              setInputTitle={setInputTitle}
              valueDescription={inputDescription}
              setInputDescription={setInputDescription}
            />
          </View>
        </View>
      </Modal>
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
  modalAddContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalAdd: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 25,
  },
  titleBox: {
    flex: 0.9,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalClose: {},
});

export default App;
