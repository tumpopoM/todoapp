import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Detail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.btnBackTo}>
            <Icon size={20} color="black" name="chevron-left" />
          </View>
        </TouchableOpacity>
        <Text style={styles.titleText}> {route.params.data.title} </Text>
      </View>
      <View style={styles.contentArea}>
        <ScrollView>
          {/* <Text style={styles.titleText}> {route.params.data.title} </Text>
          <Text style={styles.dateTime}> {route.params.data.dateTime} </Text> */}
          <View style={styles.descriptionArea}>
            <View style={styles.dateTimeIdArea}>
              <Text style={styles.dateTime}>{route.params.data.dateTime}</Text>
              <Text style={styles.id}> ID: {route.params.data.id}</Text>
            </View>
            <Text style={styles.description}>
              {route.params.data.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#E8EaED',
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
  },
  btnBackTo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    marginRight: 10,
  },
  contentArea: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingBottom: 100,
  },
  descriptionArea: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    position: 'relative',
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    lineHeight: 25,
  },
  dateTimeIdArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateTime: {
    flex: 0.98,
  },
});
export default Detail;
