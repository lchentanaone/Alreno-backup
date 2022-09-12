import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {formStyles} from '../Styling/FormStyle';
import forgotPass from '../../assets/forgotPass.png';
import {auth} from '../../../../../../firebase';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const user = auth.currentUser;

  const forgotPassword = async () => {
    auth
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your Email...');
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  useEffect(() => {
    forgotPassword();
  });

  return (
    <SafeAreaView style={formStyles.forgotPassContainer}>
      <ImageBackground source={forgotPass} style={formStyles.forgotImageBckgnd}>
        <View style={formStyles.forgotImageText}>
          <Text style={formStyles.forgotTexts}>Forgot Password?</Text>
          <Text>
            To recover your password please {'\n'}submit your Email address
          </Text>
        </View>
      </ImageBackground>
      <View style={formStyles.textFieldBg}>
        <TextInput
          style={formStyles.SignInputField}
          placeholder="Email Address "
          placeholderTextColor="lightgray"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={formStyles.signInBtn}>
        <TouchableOpacity
          style={formStyles.forgotSubmitOpacity}
          onPress={() => forgotPassword()}>
          <Text style={formStyles.forgotSubmitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RecoverPassword;
