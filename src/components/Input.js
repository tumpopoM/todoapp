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
        <TextInput
          placeholder="Title"
          value={props.valueTitle}
          onChangeText={title => {
            props.setInputTitle(title);
          }}
        />
      </View>
      <View style={styles.inputDescription}>
        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
          textAlign={'left'}
          value={props.valueDescription}
          onChangeText={description => {
            props.setInputDescription(description);
          }}
        />
      </View>
      {props.statusAction === 'add' && (
        <TouchableOpacity onPress={props.onPressAddTasks}>
          <View style={styles.buttonAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      )}
      {props.statusAction === 'edit' && (
        <TouchableOpacity
          onPress={() => {
            props.onPressEdit(props.idEdit);
          }}>
          <View style={styles.buttonAdd}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 10,
    width: '100%',
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Input;
