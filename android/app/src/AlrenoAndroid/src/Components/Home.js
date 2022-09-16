/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {styles} from './../Styling/Styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeHeader from './HomeHeader';
import {initializeApp} from '../../../../../../firebase/firebase';
import {auth, db} from '../../../../../../firebase/firebase';
import TankProgress from './TankProgress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';

export default function Home({navigation}) {
  const [weight, setWeight] = useState(0);
  const [percent, setPercent] = useState(100);
  const user = auth.currentUser.uid;

  const getData = async () => {
    initializeApp({
      apiKey: 'AIzaSyCaJDtx5bjZwGje1Um9F_DKHbv8rrNn61s',
      authDomain: 'alreno-api-404ac.firebaseapp.com',
      projectId: 'alreno-api-404ac',
    });
    const db = getFirestore();
  };

  const getWeight = async () => {
    const user = auth.currentUser.uid;
    if (user) {
      const docRef = db.collection('tank_logs').doc(user);
      // console.log('Home', user);
      docRef
        .get()
        .then(doc => {
          const {weight} = doc.data();
          setPercent((weight / 20) * 100);
          setWeight(weight);
        })
        .catch(error => {});
    }
  };

  // const percentCounter = () => {
  //   if (percent < 1) {
  //     setPercent(100);
  //   } else {
  //     if (percent > weight) {
  //       setPercent((percent) => percent - 1);
  //     }
  //   }
  // };
  const getStorageData = async () => {
    try {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    let isMounted = true;
    getStorageData();

    // setInterval(() => {
    //   percentCounter();
    //   // console.log(percent);
    // }, 1000);
    setInterval(() => {
      getWeight();
    }, 10000);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <SafeAreaView style={styles.homeContainer}>
        <ScrollView>
          <HomeHeader />
          <View style={styles.usageContainer}>
            <View style={styles.timeUsage}>
              <View style={styles.timeUsageText}>
                <Text style={styles.realTimeUsageText}>Real-time Usage</Text>
                <TankProgress style={styles.TankProgress} progress={weight} />
              </View>
              <View style={styles.tankDetails}>
                <View style={styles.usagePercentage}></View>
              </View>
            </View>
          </View>
          <View style={styles.optionsButtons}>
            <TouchableOpacity
              style={styles.optionOpacity}
              onPress={() => navigation.navigate('Coming Soon')}>
              <Text style={styles.optionText}>Choose your{'\n'} Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionOpacity}
              onPress={() => navigation.navigate('Coming Soon')}>
              <Text style={styles.optionText}>Nearby{'\n'}Reatail Store</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsButtons}>
            <TouchableOpacity
              style={styles.optionOpacity}
              onPress={() => navigation.navigate('Coming Soon')}>
              <Text style={styles.optionText}>News and {'\n'}Safty Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionOpacity}
              onPress={() => navigation.navigate('Coming Soon')}>
              <Text style={styles.optionText}>Apply for {'\n'}Distributor</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.HomebuttomIcons}>
            <TouchableOpacity style={styles.iconOpacity} onPress={() => 'Home'}>
              <AntDesign name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconOpacity}
              onPress={() => navigation.navigate('Profile')}>
              <AntDesign name="user" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconOpacity}
              onPress={() => navigation.navigate('Wi-Fi')}>
              <AntDesign name="setting" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
