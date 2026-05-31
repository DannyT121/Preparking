import { ONBOARDING_PNG } from '@/assets/images'
import { MagicButton } from '@/components/magic-button'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import strings from '@/constants/string.json'
import type { AuthStackParamList } from '@/navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()

  return (
    <ThemedView style={styles.container}>
          <Image source={ONBOARDING_PNG} style={styles.image} />
          <View style={styles.textContainer}>
            <ThemedText style={styles.titleText}>{strings.welcome.title}</ThemedText>
            <ThemedText style={styles.subText}>{strings.welcome.subtitle}</ThemedText>
          </View>
          <View style={styles.buttonContainer} >
            <MagicButton title={strings.welcome.getStarted}  onPress={()=>{navigation.navigate('Login')}}/>
          </View>
    </ThemedView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 392,
    marginTop: 120,
    marginBottom: 45,
  },
  textContainer: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
  },
  titleText: { fontSize: 24, lineHeight: 32, fontWeight: '700', textAlign: 'center' },
  subText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 16,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
  },
})