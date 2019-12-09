import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListItem from '../../component/Listitem';
import {connect} from 'react-redux';
import {addComment} from '../../../redux/actions/comment';

class SwipeablePanels extends React.Component {
  constructor() {
    super();
    this.state = {
      commentName: '',
      comments: [],
    };
  }
  commentSubmitHandler = () => {
    if (this.state.commentName.trim() === '') {
      return;
    }
    this.props.add(this.state.commentName);
    this.setState({commentName: ''});
  };

  commentNameChangeHandler = value => {
    this.setState({
      commentName: '',
    });
  };

  commentOutput = () => {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.comments}
        keyExtractor={(item, index) => index.toString()}
        inverted={1}
        renderItem={info => <ListItem commentName={info.item.value} />}
      />
    );
  };

  render() {
    // const {navigation} = this.props;
    // const author = navigation.getParam('author', 'NO-NAME');
    return (
      <View style={styles.container}>
        <View style={styles.headerNavigation}>
          <TouchableOpacity style={styles.iconheader}>
            <Icon name="arrow-left" size={30} color="red" />
          </TouchableOpacity>
          <Text style={styles.txtTitle}> Bình Luận </Text>
        </View>
        {/* listItem */}
        <View style={styles.body}>
          <View style={styles.listContainer}>{this.commentOutput()}</View>
          {/* input */}
          <View style={styles.input}>
            <TextInput
              onChangeText={commentName => this.setState({commentName})}
              style={styles.inputs}
              placeholder="Comment"
              clearTextOnFocus={true}
              value={this.state.commentName}
            />
            <TouchableOpacity
              style={styles.sendComment}
              onPress={this.commentSubmitHandler}>
              <Icon name="send" color="#000" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addComment(name));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwipeablePanels);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  header: {
    marginTop: 20,
    marginLeft: 10,
  },
  headerNavigation: {
    height: 50,
    backgroundColor: '#DDDDDD',
    flexDirection: 'row',
  },
  iconheader: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '10%',
    marginLeft: 10,
  },
  txtTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#C0C0C0',
    justifyContent: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  inputs: {
    borderColor: 'gray',
    width: '80%',
  },
  sendComment: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: '20%',
  },
  listContainer: {
    width: '100%',
    marginBottom: 30,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
