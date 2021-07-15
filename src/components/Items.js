import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from './CheckBox';

const Items = props => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.boxLeft}>
        <CheckBox
          value={checkBoxValue}
          onChange={() => {
            setCheckBoxValue(!checkBoxValue);
          }}
        />
        <Text style={styles.btnMark}>Mark</Text>
        <Text style={styles.title}>{props.text}</Text>
      </View>
      <View style={styles.boxRight}>
        <Text style={styles.btnEdit}>Edit</Text>
        <Text style={styles.btnDelete}>Del</Text>
      </View>
    </View>
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
  },
  boxLeft: {
    flex: 0.8,
    flexDirection: 'row',
  },
  boxRight: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnMark: {
    marginRight: 10,
  },
  edibtnEdit: {
    marginRight: 10,
  },
});

export default Items;
