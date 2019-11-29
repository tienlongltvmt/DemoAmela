import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
// import CheckBox from 'react-native-checkbox';
// import {CheckBox} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
// import {Icon} from 'react-native-elements';
export default class LoginActivity extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.imageLogo}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.textSign}>SIGN IN</Text>
          <View style={styles.textInput}>
            <View style={styles.textInputChild}>
              <Image
                style={styles.imageinput}
                source={require('../assets/iconfinder_user_male4_172628.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                inlineImageLeft="../assets/facebook.png"
              />
            </View>
            <View style={styles.textInputChild}>
              <Image
                style={styles.imageinput}
                source={require('../assets/icons8-show-password-100.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                inlineImageLeft="../assets/facebook.png"
              />
            </View>
          </View>
          <View style={styles.checkbox}>
            <View style={styles.checkboxChild}>
              <CheckBox />
              <Text style={styles.textRemember}>Remember me</Text>
            </View>
            <Text style={styles.textfogot}> Forgot Password</Text>
          </View>
          <TouchableOpacity style={styles.btnSignIn}>
            <Text style={styles.textSign}> SIGN IN</Text>
          </TouchableOpacity>
          <View style={styles.textSigUp}>
            <Text>Still not connected ?</Text>
            <Text style={styles.textfogot}> Sign Up</Text>
          </View>
          <View style={styles.ors}>
            <View style={styles.gach} />
            <View>
              <Text>or</Text>
            </View>
            <View style={styles.gach} />
          </View>
          <View style={styles.ors}>
            <Image
              style={styles.image}
              source={require('../assets/facebook.png')}
            />
            <Image
              style={styles.image}
              source={require('../assets/twitte.png')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  header: {
    height: '40%',
    backgroundColor: '#B01A71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: -80,
    backgroundColor: 'white',
    height: '200%',
    margin: 20,
    alignItems: 'center',
    borderWidth: 0.25,
    borderRadius: 2,
    marginBottom: 100,
  },
  textSign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    padding: 20,
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    width: '70%',
    marginLeft: 10,
  },
  checkbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxChild: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  textfogot: {
    color: 'red',
    marginRight: 20,
    alignSelf: 'center',
  },
  btnSignIn: {
    width: '80%',
    height: 40,
    backgroundColor: '#B01A71',
    borderRadius: 10,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSigUp: {
    flexDirection: 'row',
  },
  gach: {
    height: 1,
    backgroundColor: 'black',
    width: 50,
    margin: 10,
  },
  ors: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  imageLogo: {
    width: 120,
    height: 100,
    marginBottom: 50,
  },
  textInputChild: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    marginTop: 10,
  },
  imageinput: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 10,
  },
  textRemember: {
    alignSelf: 'center',
  },
});
