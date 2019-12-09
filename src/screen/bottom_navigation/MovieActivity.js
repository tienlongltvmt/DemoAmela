import React from 'react';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';

import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var screen = Dimensions.get('window');
import SwipeablePanels from '../item/SwipeablePanels';

export default class MovieActivity extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    var list = [];

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>,
      );
    }

    return list;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.refs.modal1.open()}>
          <Text>ajsdknfkae</Text>
        </TouchableOpacity>
        <Modal
          style={[styles.modal, styles.modal1]}
          ref={'modal1'}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          backdrop={true}
          animationDuration={500}
          onClosingState={this.onClosingState}>
          <SwipeablePanels style={styles.wrappers} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },
  wrappers: {
    flex: 1,
    justifyContent: 'center',
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    elevation: 5,
  },

  btn: {
    width: 100,
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
});
