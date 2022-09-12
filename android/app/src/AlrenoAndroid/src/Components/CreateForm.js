import React, {useState, useEffect} from 'react';
import {formStyles} from './../Styling/FormStyle';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {auth, db} from '../../../../../../firebase';

const CreateForm = ({navigation}) => {
  const [firstname, setFirsname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const uid = user.uid;
        // console.log(user);
        // console.log("Registered  with:", user.email);
        db.collection('user_info')
          .doc(uid)
          .set({
            firstname,
            lastname,
            address,
            mobileNumber,
            email,
            password,
            uid,
          })
          .then(docRef => {
            // console.log("Document written with ID: ", docRef.id);
          });
      });
    // .catch((error = alert(error.message)));
  };

  return (
    <SafeAreaView style={formStyles.createContainer}>
      <View style={formStyles.textContainer}>
        <Text style={formStyles.createText}>Create Account</Text>
      </View>
      <View style={formStyles.FieldsContainer}>
        <View style={formStyles.createTextField}>
          <OutlinedTextField
            style={formStyles.createInputField}
            required
            mode="outlined"
            label="Firs Name"
            value={firstname}
            onChangeText={firstname => setFirsname(firstname)}
          />
          <OutlinedTextField
            required
            style={formStyles.createInputField}
            label="Last Name"
            value={lastname}
            onChangeText={lastname => setLastname(lastname)}
          />
          <OutlinedTextField
            required
            style={formStyles.createInputField}
            label="Current Address"
            value={address}
            onChangeText={address => setAddress(address)}
          />
          <OutlinedTextField
            required
            style={formStyles.createInputField}
            label="Mobile Number"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={text => setMobileNumber(text)}
          />
          <OutlinedTextField
            required
            style={formStyles.createInputField}
            label="Email Addess"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <OutlinedTextField
            required
            style={formStyles.createInputField}
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <View style={formStyles.signUpBtn}>
          <TouchableOpacity
            style={formStyles.signInUpOpacity}
            onPress={handleSignup}>
            <Text style={formStyles.createTextBtn}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={formStyles.signInBtn}>
          <Text style={formStyles.goSignUpText}>Already Have An Account?</Text>
          <TouchableOpacity
            style={formStyles.goCreateOpacity}
            onPress={() => navigation.navigate('Sign in')}>
            <Text style={formStyles.goCreateLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateForm;
