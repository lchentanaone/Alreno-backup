/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {styles} from '../Styling/Styles';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {db} from '../../../../../../firebase/firebase';
import * as firebase from 'firebase';

export default function HomeHeader() {
  const [firstName, setFirsname] = useState('');
  const [userID, setUserID] = useState('');
  const navigation = useNavigation();

  firebase.auth().onAuthStateChanged(currentUser => {
    // console.log('astalabista: ', currentUser);

    if (currentUser) {
      const docRef = db.collection('user_info').doc(currentUser.uid);
      docRef.get().then(doc => {
        const {firstname} = doc.data();
        console.log(firstname);
        setFirsname(firstname);
      });
    } else {
      setFirsname('');
    }
  });

  // console.log({
  //   a: auth.currentUser,
  // });

  return (
    <>
      <View style={styles.homeHeader}>
        <Text style={styles.homeHeaderText}>Home</Text>
      </View>
      <SafeAreaView style={styles.homeHeaderContainer}>
        <View style={styles.homeHeaderBox}>
          <View style={styles.userInfo}>
            <View style={styles.helloText}>
              <Text style={styles.helloUser}>
                Hello, <Text style={styles.userName}>{firstName}</Text>!
              </Text>
            </View>
            <View style={styles.userImageContainer}>
              <Avatar.Image
                size={130}
                source={require('./../../assets/prof.jpg')}
              />
            </View>
          </View>
          <View style={styles.overviewTransac}>
            <TouchableOpacity
              style={styles.overviewButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.overviewText}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overviewButton}
              onPress={() => navigation.navigate('Coming Soon')}>
              <Text style={styles.overviewText}>Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
