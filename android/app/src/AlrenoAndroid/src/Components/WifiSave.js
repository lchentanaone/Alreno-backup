/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {formStyles} from '../Styling/FormStyle';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {auth, db} from '../../../../../../firebase/firebase';

const WifiSave = ({navigation}) => {
  const user = auth.currentUser.uid;
  const [ssid, setSsid] = useState('');
  const [wifiPass, setWifiPass] = useState('');
  const [WifiDetails, setWifiDetails] = useState();
  const [tankWeights, setTankWeights] = useState();

  async function SaveInternet() {
    try {
      const data = {user, ssid, wifiPass: wifiPass};
      fetch('https://ck8hih4bk4.execute-api.us-east-1.amazonaws.com/wifisave', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async function updateInternet() {
    var washingtonRef = db
      .collection('wifi_save')
      .doc(user)
      .update({
        ssid,
        wifiPass,
      })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch(error => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  }

  async function getInternet() {
    const docRef = db.collection('wifi_save').doc(user);
    docRef.get().then(doc => {
      if (!doc.exists) {
        SaveInternet();
        setWifiDetails(false);
      } else {
        updateInternet();
        setWifiDetails(true);
      }
    });
    setWifiPass('');
  }
  async function SaveTankWeight() {
    db.collection('user_info')
      .doc(user)
      .set({
        tankWeights,
        user,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
      });
  }

  return (
    <SafeAreaView style={formStyles.SettingsContainer}>
      <View style={formStyles.wifiContainer}>
        <Text style={formStyles.wifiTextblack}>Wi-Fi</Text>
        <View style={formStyles.wifiTextfield}>
          <View style={formStyles.textFieldBackground}>
            <OutlinedTextField
              style={formStyles.createInputField}
              label="SSID"
              value={ssid}
              onChangeText={ssid => setSsid(ssid)}
            />
          </View>
          <View style={formStyles.textFieldBackground}>
            <OutlinedTextField
              style={formStyles.createInputField}
              label="Wifi Password"
              value={wifiPass}
              onChangeText={wifiPass => setWifiPass(wifiPass)}
            />
          </View>
        </View>
        <View style={formStyles.wifiBtn}>
          <TouchableOpacity
            style={formStyles.wifiOpacity}
            onPress={getInternet}>
            <Text style={formStyles.wifiText}>
              {WifiDetails ? 'Update' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={formStyles.tankWeightsContainer}>
        <Text style={formStyles.tankTextblack}>Tank Weight</Text>
        <View style={formStyles.wifiTextfield}>
          <View style={formStyles.textFieldBackground}>
            <OutlinedTextField
              style={formStyles.createInputField}
              label="Input your Tank Weight"
              keyboardType="numeric"
              value={tankWeights}
              onChangeText={tankWeights => setTankWeights(tankWeights)}
            />
          </View>
        </View>
        <View style={formStyles.wifiBtn}>
          <TouchableOpacity
            style={formStyles.wifiOpacity}
            onPress={SaveTankWeight}>
            <Text style={formStyles.wifiText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={formStyles.wifiBtn}>
        <TouchableOpacity
          style={formStyles.wifiOpacity}
          onPress={() => navigation.navigate("Weight")}
        >
          <Text style={formStyles.wifiText}>Tank Weight</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default WifiSave;
