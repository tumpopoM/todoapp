import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CheckBox = props => {
  return (
    <TouchableOpacity onPress={props.onChange}>
      <View style={styles.iconBox}>
        {props.value && (
          <Icon style={styles.icon} size={17} color="white" name="check" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconBox: {
    borderRadius: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    width: 22,
    height: 22,
    marginRight: 10,
  },
  icon: {
    backgroundColor: '#9acd32',
    borderRadius: 50,
    width: 20,
    height: 20,
    paddingTop: 1,
    paddingLeft: 1,
  },
});

export default CheckBox;
