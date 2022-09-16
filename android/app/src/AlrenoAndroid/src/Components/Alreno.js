/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../Styling/Styles';
import LPG from '../../assets/LPG.jpg';
import LpgTank from '../../assets/LpgTank.png';
import {auth} from '../../../../../../firebase/firebase';
import {useNavigation} from '@react-navigation/native';

export default function Alreno() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sign in');
    }, 2000);
    let isMounted = true;
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (isMounted) {
        if (user) {
          navigation.navigate('Home');
        }
      }
    });
    return () => {
      unsubscribe;
      isMounted = false;
    };
    // if (!user)
  }, []);

  return (
    <SafeAreaView style={styles.alrenoContainer}>
      <ImageBackground
        source={LPG}
        style={styles.LPG}
        imageStyle={{borderRadius: 20}}>
        <Image source={LpgTank} style={styles.lpgTank} />
        <View style={styles.smartRefill}>
          <Text style={styles.alreno}>ALRENO</Text>
          <Text style={styles.smartRefillText}>Smart Refilling Station</Text>
        </View>
        <View style={styles.fastDelivery}>
          <Text style={styles.fastDeliveryText}>
            Fast {'\n'}
            Delivery for {'\n'}
            your Cooking {'\n'}
            Needs
          </Text>
        </View>
      </ImageBackground>
      {/* <View style={styles.signinCreateButton}>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => navigation.navigate("Sign in")}
        >
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccout}
          onPress={() => navigation.navigate("Create Account")}
        >
          <Text style={styles.signinText}>Create an Account</Text>
        </TouchableOpacity>
        <Text style={styles.termsAndCondition}>
          By Continuing you agree to the Terms and Conditions
        </Text>
      </View> */}
    </SafeAreaView>
  );
}
