import { GoogleButton } from '@/components/google-button'
import { MagicButton } from '@/components/magic-button'
import { PhoneInput } from '@/components/phone-input'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { DEFAULT_COUNTRY, type Country } from '@/constants/countries'
import strings from '@/constants/string.json'
import type { AuthStackParamList } from '@/navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import AuthHeader from './component/AuthHeader'

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY)

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AuthHeader onBackPress={() => { navigation.goBack() }} />
      <View style={styles.content}>
        <ThemedText style={styles.titleText}>{strings.login.title}</ThemedText>
        <ThemedText style={styles.subText}>{strings.login.subtitle}</ThemedText>

        <GoogleButton title={strings.login.continueWithGoogle} style={styles.googleButton} onPress={() => { }} />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <ThemedText style={styles.dividerText}>{strings.common.or}</ThemedText>
          <View style={styles.dividerLine} />
        </View>

        <PhoneInput
          value={phone}
          onChangeText={setPhone}
          country={country}
          placeholder={strings.login.phonePlaceholder}
          onChangeCountry={setCountry}
        />

        <ThemedText style={styles.disclaimerText}>{strings.login.smsDisclaimer}</ThemedText>
        <MagicButton title={strings.login.sendOtp} onPress={() => { navigation.navigate('Otp') }} />
      </View>
      <ThemedText style={styles.termsParagraph}>
        {strings.login.terms.prefix}
        <ThemedText style={styles.termsLink} onPress={() => { console.log("Terms") }}>{strings.login.terms.termsOfService}</ThemedText>
        {strings.login.terms.conjunction}
        <ThemedText style={styles.termsLink} onPress={() => { console.log("Privacy") }}>{strings.login.terms.privacyPolicy}</ThemedText></ThemedText>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  titleText: { fontSize: 32, lineHeight: 36, fontWeight: '700' },
  subText: {
    fontSize: 16, lineHeight: 24, fontWeight: '400',
    marginTop: 8,
  },
  googleButton: {
    marginTop: 32,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E3E5E8',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#9AA5B1',
  },
  disclaimerText: {
    fontSize: 14, lineHeight: 16, fontWeight: '400', marginTop: 16,
    color: '#6C7072',
  },
  termsParagraph: {
    fontSize: 14, lineHeight: 18, fontWeight: '400',
    marginBottom: 32,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  termsLink: {
    fontSize: 14, lineHeight: 18, fontWeight: '400',
    textDecorationLine: 'underline',
  },
})