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
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class LoginActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['#FF0099', '#990099', '#660099']}
          style={styles.header}>
          <Image
            style={styles.imageLogo}
            source={require('../assets/logo.png')}
          />
        </LinearGradient>
        <View style={styles.body}>
          <Text style={styles.textSign}>SIGN IN</Text>
          <View style={styles.textInput}>
            <View style={styles.textInputChild}>
              <LinearGradient
                style={styles.imageinput}
                colors={['#FF0099', '#660099']}>
                <Icon name="user" color="#FFF" size={20} />
              </LinearGradient>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                inlineImageLeft="../assets/facebook.png"
              />
            </View>
            <View style={styles.textInputChild}>
              <LinearGradient
                style={styles.imageinput}
                colors={['#FF0099', '#660099']}>
                <Icon name="lock" color="#FFF" size={20} />
              </LinearGradient>
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
          <LinearGradient
            start={{x: 0.4, y: 0.01}}
            end={{x: 0.5, y: 0.25}}
            locations={[0, 0.6]}
            colors={['#993366', '#79378B']}
            style={styles.btnSignIn}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RegisterActivity')
              }>
              <Text style={styles.textSigns}> SIGN IN</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.textSigUp}>
            <Text>Still not connected ?</Text>
            <Text style={styles.textfogot}> Sign Up</Text>
          </View>
          <View style={styles.ors}>
            <View style={styles.gach} />
            <View>
              <Text style={styles.textOr}>or</Text>
            </View>
            <View style={styles.gach} />
          </View>
          <View style={styles.orss}>
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
    height: '30%',
    backgroundColor: '#B01A71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: -60,
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
    marginTop: 15,
  },
  textSigns: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  textInput: {
    width: '100%',
    padding: 20,
    marginTop: 15,
  },
  input: {
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
    color: '#780062',
    marginRight: 20,
    alignSelf: 'center',
  },
  btnSignIn: {
    width: '80%',
    height: 40,
    backgroundColor: '#B01A71',
    borderRadius: 20,
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
    justifyContent: 'center',
    marginTop: 15,
  },
  ors: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  orss: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginHorizontal: 10,
  },
  imageLogo: {
    width: 120,
    height: 100,
    marginBottom: 50,
  },
  textInputChild: {
    flexDirection: 'row',
    borderRadius: 35,
    borderWidth: 0.31,
    height: 50,
    marginTop: 10,
  },
  imageinput: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRemember: {
    alignSelf: 'center',
    color: 'gray',
  },
  textOr: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    width: 30,
    textAlign: 'center',
    borderColor: '#64004B',
  },
});
