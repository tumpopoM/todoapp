import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const Input = props => {
  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputTitle}>
            <TextInput
              placeholder="Title"
              value={props.valueTitle}
              maxLength={40}
              onChangeText={title => {
                props.setInputTitle(title);
              }}
            />
          </View>
          <View style={styles.inputDescription}>
            <TextInput
              placeholder="Description"
              multiline={true}
              numberOfLines={5}
              textAlign={'left'}
              textAlignVertical={'top'}
              value={props.valueDescription}
              onChangeText={description => {
                props.setInputDescription(description);
              }}
            />
          </View>
          {props.statusAction === 'add' && (
            <TouchableOpacity
              onPress={() => {
                if (props.valueTitle.length > 0) {
                  props.onPressAddTasks();
                } else {
                  Alert.alert('Please Enter Title');
                }
              }}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  inputWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 5,
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
