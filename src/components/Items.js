import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CheckBox from './CheckBox';

const Items = props => {
  // const [checkBoxValue, setCheckBoxValue] = useState(false);

  return (
    <>
      {props.data.map((item, i) => (
        <View key={i} style={styles.item}>
          <View style={styles.boxLeft}>
            <CheckBox
              value={item.isDone}
              onChange={() => {
                props.onPressCheckBox(item);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                props.onPressItem(item);
              }}>
              <View style={styles.textWidth}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.boxRight}>
            <TouchableOpacity
              onPress={() => {
                props.onPressShowEditTasks(item);
              }}>
              <View style={styles.btnEdit}>
                <Icon size={18} color="black" name="edit" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.onPressDelete(item);
              }}>
              <View style={styles.btnDelete}>
                <Icon size={18} color="black" name="trash-alt" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  boxLeft: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxRight: {
    flex: 0.2,
    flexDirection: 'row',
  },
  btnEdit: {
    marginRight: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  textWidth: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 22,
  },
});

export default Items;
