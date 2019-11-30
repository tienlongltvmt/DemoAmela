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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {Icon} from 'react-native-elements';
export default class RegisterActivity extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['#FF0099', '#990099', '#660099']}
          style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color="#FFF" size={30} />
          </TouchableOpacity>
          <Image
            style={styles.imageLogo}
            source={require('../assets/logo.png')}
          />
        </LinearGradient>
        <View style={styles.body}>
          <Text style={styles.textSign}>SIGN UP</Text>
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
            <Text style={styles.textfogot}> Forgot Password</Text>
          </View>
          <LinearGradient
            start={{x: 0.4, y: 0.01}}
            end={{x: 0.5, y: 0.25}}
            locations={[0, 0.6]}
            colors={['#993366', '#79378B']}
            style={styles.btnSignIn}>
            <TouchableOpacity>
              <Text style={styles.textSigns}> SIGN UP</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.textSigUp}>
            <Text>Still not connected ?</Text>
            <Text style={styles.textfogot}> Sign In</Text>
          </View>
          <View style={styles.ors}>
            <View style={styles.gach} />
            <View>
              <Text style={styles.textOr}>or</Text>
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
    height: '30%',
    backgroundColor: '#B01A71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: -70,
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
    marginTop: 20,
  },
  textSigns: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    width: '100%',
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    width: '70%',
    marginLeft: 10,
  },
  checkbox: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  checkboxChild: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  textfogot: {
    color: '#780062',
    marginRight: 20,
    alignSelf: 'flex-end',
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
  },
  textOr: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    width: 30,
    textAlign: 'center',
    borderColor: '#64004B',
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(21,22,48,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
