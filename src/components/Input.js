import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Input = props => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.inputTitle}>
        <TextInput placeholder="Title" />
      </View>
      <View style={styles.inputDescription}>
        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
          textAlign={'left'}
        />
      </View>
      <TouchableOpacity onPress={props.onPressAddTasks}>
        <View style={styles.buttonAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    borderRadius: 10,
    margin: 10,
  },
  inputTitle: {
    backgroundColor: '#e5e7ea',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  inputDescription: {
    backgroundColor: '#e5e7ea',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
  },
  buttonAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#9acd32',
    borderRadius: 10,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default Input;
