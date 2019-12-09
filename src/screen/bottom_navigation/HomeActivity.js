import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Monent from 'react-moment';
import {Avatar} from 'react-native-elements';
import SwipeablePanels from '../item/SwipeablePanels';
import Modal from 'react-native-modalbox';

export default class HomeActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      //isModalVisible: false,
      buttomColor: '#979797',
      // isOpen: false,
      // isDisabled: false,
      // swipeToClose: true,
    };
  }
  _onClose() {
    console.log('Modal just closed');
  }

  _onOpen() {
    console.log('Modal just opened');
  }

  _onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }
  _toggleModal = () => this.props.navigation.navigate('SwipeablePanels');

  _onButtomPress = () => {
    if (this.state.buttomColor === '#ff002b') {
      this.setState({buttomColor: '#979797'});
    } else {
      this.setState({buttomColor: '#ff002b'});
    }
  };

  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c68080ea2b7942d3b9b9c6acaa52bc47',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  showModal = item => {
    try {
      this.modal1.open();
      this.setState({author: item.author});
    } catch (error) {
      console.log('ajdhjlfdfja');
    }
  };
  commentshow = item => {
    if (item.author === '') {
      this.showModal();
    }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Icon name="camera-outline" color="#000" size={30} />
            <Text style={styles.textheader}>Instagram</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon name="filmstrip" color="#000" size={30} />
            <Icon
              style={styles.headerRightChild}
              name="send"
              color="#000"
              size={30}
            />
          </View>
        </View>
        <FlatList
          style={styles.wrapper}
          data={this.state.dataSource}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <View style={styles.viewList}>
                <View style={styles.txtAuth}>
                  <View style={styles.txtChildAuth}>
                    <Avatar
                      rounded
                      source={{
                        uri:
                          'https://i.pinimg.com/564x/62/91/87/629187ca16a4594045fcfdb2df7b3400.jpg',
                      }}
                    />
                    <Text style={styles.txChildAuth} numberOfLines={1}>
                      {item.author}
                    </Text>
                  </View>
                  <View style={styles.headerRightList}>
                    <Icon name="dots-vertical" color="#000" size={30} />
                  </View>
                </View>
                <View style={styles.viewListImage}>
                  <ImageBackground
                    style={styles.viewImage}
                    source={{uri: item.urlToImage}}
                    // eslint-disable-next-line react-native/no-inline-styles
                    imageStyle={{borderRadius: 10}}
                  />
                </View>
                <View style={styles.viewlistTitle}>
                  <Text
                    style={styles.texttitle}
                    ellipsizeMode="tail"
                    // onPress={() =>
                    //   this.props.navigation.navigate('ChitietMainActivity', {
                    //     title: item.title,
                    //     url: item.urlToImage,
                    //     content: item.content,
                    //     publishedAt: item.publishedAt,
                    //     author: item.author,
                    //     description: item.description,
                    //   })
                    // }
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={styles.textdescription}
                    ellipsizeMode="tail"
                    numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>
                <View style={styles.comment}>
                  <View style={styles.commentLeft}>
                    <View style={styles.viewcomment}>
                      <Icon
                        name="heart-outline"
                        color={this.state.buttomColor}
                        onPress={this._onButtomPress}
                        size={30}
                      />
                    </View>
                    <View style={styles.wrapper}>
                      <TouchableOpacity
                        style={styles.bnt}
                        onPress={this.commentshow}>
                        <Icon
                          name="comment-multiple-outline"
                          color="#000"
                          size={30}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.viewcomment}>
                      <Icon name="send" color="#000" size={30} />
                    </View>
                  </View>
                  <View style={styles.headerRight}>
                    <Icon name="bookmark-outline" color="#000" size={30} />
                  </View>
                </View>
              </View>
            );
          }}
        />
        <Modal
          style={[styles.modal]}
          ref={ref => {
            this.modal1 = ref;
          }}
          isOpen={this.state.modal}
          keyboardTopOffset={0}
          coverScreen={true}
          animationDuration={500}
          backdropPressToClose={false}
          onClosed={() => this.setState({modal: false})}
          onOpened={() => this.setState({modal: true})}>
          <SwipeablePanels style={styles.swipe} />
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    height: '10%',
    backgroundColor: '#F5F5F5',
    width: '100%',
    flexDirection: 'row',
  },
  headerRight: {
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    flexDirection: 'row',
  },
  headerLeft: {
    width: '50%',
    alignItems: 'flex-start',
    padding: 10,
    flexDirection: 'row',
  },
  textheader: {
    fontSize: 20,
    marginLeft: 10,
  },
  headerRightChild: {
    marginLeft: 20,
  },
  viewList: {
    flex: 1,
    width: '95%',
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderColor: 'black',
    paddingBottom: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderWidth: 0.31,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewImage: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  textTitle: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  viewListImage: {
    flex: 0.8,
    width: '100%',
    padding: 5,
  },
  viewlistTitle: {
    flex: 1,
  },
  loading: {
    flex: 1,
    padding: 10,
  },
  textdescription: {
    fontSize: 12,
    color: '#212',
    padding: 5,
  },
  texttitle: {
    fontSize: 14,
    color: 'red',
    padding: 10,
  },
  txtAuth: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderColor: 'black',
    height: 50,
  },
  txChildAuth: {
    marginLeft: 15,
    justifyContent: 'center',
    width: 100,
  },
  headerRightList: {
    alignItems: 'flex-end',
    width: '50%',
    padding: 20,
    marginRight: 20,
  },
  txtChildAuth: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    flexDirection: 'row',
  },
  commentLeft: {
    width: '50%',
    alignItems: 'flex-start',
    padding: 10,
    flexDirection: 'row',
  },
  viewcomment: {
    marginHorizontal: 5,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    elevation: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  swipe: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
  },
  btn: {
    width: 100,
  },
});
