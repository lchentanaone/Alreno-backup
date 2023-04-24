/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {formStyles} from './../Styling/FormStyle';
import alrenoLogo from './../../assets/Alreno-sticker-black.png';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../../../../../../firebase/firebase';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';

const SignInForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = auth.currentUser;

  useEffect(async () => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        // Success
      })
      .catch(function (error) {
        // Error Handling
        console.log(error);
      });
  };
  const forgotPassword = async () => {
    auth
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your email...');
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={formStyles.signInContainer}>
      <View style={formStyles.SignInHeader}>
        <Text style={formStyles.SignInHeaderText}>Sign In</Text>
      </View>
      <View style={formStyles.alrenoContainer}>
        <Image source={alrenoLogo} width="20" style={formStyles.alrenoLogo} />
      </View>
      <View style={formStyles.SignTextField}>
        <View style={formStyles.textFieldBg}>
          <TextInput
            style={formStyles.SignInputField}
            placeholder="Email Address "
            placeholderTextColor="lightgray"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={formStyles.textFieldBg}>
          <TextInput
            style={formStyles.SignInputField}
            placeholder="Password"
            placeholderTextColor="lightgray"
            value={password}
            secureTextEntry={false}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={formStyles.signInBtn}>
        <TouchableOpacity
          style={formStyles.forgotOpacity}
          onPress={() => navigation.navigate('Forgot Password')}
          // onPress={() => forgotPassword()}
        >
          <Text style={formStyles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={formStyles.signInBtn}>
        <TouchableOpacity
          style={formStyles.signInUpOpacity}
          onPress={() => handleLogin()}>
          <Text style={formStyles.SignIntextBtn}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={formStyles.signInBtnText}>
        <Text style={formStyles.goCreateText}>Don't Have An Account?</Text>
        <TouchableOpacity
          style={formStyles.goCreateOpacity}
          onPress={() => navigation.navigate('Create Account')}>
          <Text style={formStyles.goCreateLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInForm;
