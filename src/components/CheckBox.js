import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CheckBox(props) {
  return (
    <TouchableOpacity onPress={props.onChange}>
      <View>
        {props.value && <Icon size={24} color="black" name="ticket-alt" />}
      </View>
    </TouchableOpacity>
  );
}
