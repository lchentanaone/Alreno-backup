/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {formStyles} from './../Styling/FormStyle';

// import * as ImagePicker from 'expo-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
import {auth, db} from '../../../../../../firebase/firebase';
import EditProfBg from '../../assets/EditProfBg.png';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {Avatar} from 'react-native-paper';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({navigation}) => {
  const user = auth.currentUser.uid;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [userDetails, setUserDetails] = useState([]);

  const handleSubmit = () => {
    db.collection('user_info')
      .doc(user)
      .update({
        firstname: firstname ? firstname : userDetails.firstname,
        lastname: lastname ? lastname : userDetails.lastname,
        address: address ? address : userDetails.address,
        mobileNumber: mobileNumber ? mobileNumber : userDetails.mobileNumber,
        // image: image ? image : userDetails.image,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
      });
  };

  const loadData = () => {
    if (auth.currentUser) {
      const docRef = db.collection('user_info').doc(auth.currentUser.uid);
      docRef
        .get()
        .then(doc => {
          if (doc.exists) {
            const {firstname, lastname, mobileNumber, address, password} =
              doc.data();
            setUserDetails(doc.data());
            console.log('Document data:', doc.data());
          } else {
            console.log('No such document!');
          }
        })
        .catch(error => {
          console.log('Error getting document:', error);
        });
    }
  };

  useEffect(() => {
    (async () => {
      // if (Platform.OS !== "web") {
      //   const { status } =
      //     await ImagePicker.requestMediaLibraryPermissionsAsync();
      //   if (status !== "granted") {
      //     alert(" Sorry! We need camera roll permissions to make this work.");
      //   }
      // }
    })();
    loadData();
  }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  // const uploadImageFbase = async () => {
  //   const user = auth.currentUser.uid;
  //   const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function () {
  //       resolve(xhr.response);
  //     };
  //     xhr.onerror = function () {
  //       reject(new TypeError("Network request failed"));
  //     };
  //     xhr.responseType = "blob";
  //     xhr.open("GET", image, true);
  //     xhr.send(null);
  //   });

  //   const ref = firebase.storage().ref().child(new Date().toISOString());
  //   const snapshot = ref.put(blob);

  //   snapshot.on(
  //     firebase.storage.TaskEvent.STATE_CHANGED,
  //     () => {
  //       setUploading(true);
  //     },
  //     (error) => {
  //       setUploading(false);
  //       console.log(error);
  //       blob.close();
  //       return;
  //     },
  //     () => {
  //       snapshot.snapshot.ref.getDownloadURL().then((url) => {
  //         setUploading(false);
  //         console.log("download Url : ", url);
  //         blob.close();
  //         return url;
  //       });
  //     }
  //   );
  // };

  return (
    <SafeAreaView style={formStyles.editProfContainer}>
      <ImageBackground source={EditProfBg} style={formStyles.editImgBackground}>
        <View style={formStyles.profImageContainer}>
          <Avatar.Image
            style={formStyles.profImage}
            marginLeft={150}
            size={100}
            source={require('../../assets/prof.jpg')}
          />
          {/* <Image
            source={{ uri: image }}
            style={{ width: 110, height: 110, borderRadius: 100 }}
          /> */}
          {/* <View style={formStyles.cameraIcons}>
            <FontAwesome
              name="camera"
              size={24}
              color="black"
              // onPress={pickImage}
            />
          </View> */}
        </View>
      </ImageBackground>
      <View style={formStyles.editFieldContainer}>
        <View style={formStyles.editTextField}>
          <OutlinedTextField
            style={formStyles.createInputField}
            onChangeText={e => setFirstname(e)}
            label="First name"
            placeholder={userDetails.firstname}
          />

          <OutlinedTextField
            style={formStyles.createInputField}
            label="Last name"
            onChangeText={value => setLastname(value)}
            placeholder={userDetails.lastname}
          />

          <OutlinedTextField
            style={formStyles.createInputField}
            label="Address"
            placeholder={userDetails.address}
            onChangeText={text => setAddress(text)}
          />
          <OutlinedTextField
            style={formStyles.createInputField}
            label="Mobile Number"
            keyboardType="numeric"
            placeholder={userDetails.mobileNumber}
            onChangeText={text => setMobileNumber(text)}
          />
        </View>
        <View style={formStyles.signUpBtn}>
          <TouchableOpacity
            style={formStyles.signInUpOpacity}
            onPress={() => handleSubmit()}>
            <Text style={formStyles.createTextBtn}>Save</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={formStyles.signUpBtn}>
          <TouchableOpacity
            style={formStyles.signInUpOpacity}
            // onPress={() => uploadImageFbase()}
          >
            <Text style={formStyles.createTextBtn}>Save</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
