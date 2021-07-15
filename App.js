import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Items from './src/components/Items';

const todos = [
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
    description:
      'Labore veniam pariatur et esse dolore deserunt est minim aute tempor aliquip velit minim.',
    dateTime: new Date().getTime(),
    isDone: false,
  },
];

const App = () => {
  const onPressCheckBox = useCallback(item => {}, []);

  const onPressItem = useCallback(item => {}, []);

  const onPressEdit = useCallback(item => {}, []);

  const onPressDelete = useCallback(item => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.titleText}> Remainder </Text>
      </View>
      <View style={styles.itemWrapper}>
        <Items
          data={todos}
          onPressCheckBox={onPressCheckBox}
          onPressItem={onPressItem}
          onPressEdit={onPressEdit}
          onPressDelete={onPressDelete}
        />
      </View>
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
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    padding: 10,
    // height: 60,
    // shadowColor: "#000000",
    // shadowOffset: {width: 0, height: 2},
    // elevation: 3,
    // shadowOpacity: 0.2,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemWrapper: {
    padding: 20,
  },
});

export default App;
