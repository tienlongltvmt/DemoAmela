import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = props => {
  return (
    <ScrollView style={styles.listItem}>
      <View style={styles.headerBody}>
        <View style={styles.header}>
          <Avatar
            rounded
            source={{
              uri:
                'https://i.pinimg.com/564x/62/91/87/629187ca16a4594045fcfdb2df7b3400.jpg',
            }}
          />
        </View>
        <View style={styles.comment}>
          <View style={styles.commentheader}>
            <Text style={styles.txtauth}>Trần Tiến Long</Text>
            <Text style={styles.txtcomment}>{props.commentName}</Text>
          </View>
          <View style={styles.bodycoment}>
            <Text style={styles.house}>1 giờ </Text>
            <Icon
              style={styles.iconlike}
              name="thumb-up-outline"
              color="#000"
              size={20}
            />
            <Icon name="message-reply-text" color="#000" size={20} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flex: 1,
  },
  comment: {
    marginTop: 20,
    backgroundColor: '#F8F8FF',
    width: '80%',
    borderRadius: 20,
    marginLeft: 10,
  },
  txtauth: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtcomment: {
    fontSize: 12,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  commentheader: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  bodycoment: {
    flexDirection: 'row',
  },
  house: {
    marginLeft: 10,
  },
  iconlike: {
    marginHorizontal: 10,
  },
  headerBody: {
    flexDirection: 'row',
  },
});

export default ListItem;
