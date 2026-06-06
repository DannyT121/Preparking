import { MagicButton } from '@/components/magic-button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import strings from '@/constants/string.json';
import { Colors } from '@/constants/theme';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import AuthHeader from '../login-screen/component/AuthHeader';
const Otp = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState<string>()
  return (
    <ThemedView style={styles.container}>
      <Text>{strings.otp.title}</Text>
      <StatusBar barStyle="dark-content" />
      <AuthHeader title={strings.otp.changeNumber} onBackPress={() => { navigation.goBack() }} />
      <View style={styles.content}>
        <ThemedText style={styles.titleText}>{strings.otp.heading}</ThemedText>
        <ThemedText style={styles.subText}>{strings.otp.subtitle} +62 813-8172-5977</ThemedText>
        <OtpInput
          numberOfDigits={4}
          focusColor={Colors.dark.primary}
          autoFocus={false}
          hideStick={true}
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onFocus={() => console.log("Focused")}
          onBlur={() => console.log("Blurred")}
          onTextChange={(text) => setOtp(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          textProps={{
            accessibilityRole: "text",
            accessibilityLabel: "OTP digit",
            allowFontScaling: false,
          }}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpPin,
            pinCodeTextStyle: styles.otpPinText,
            focusStickStyle: styles.otpFocusStick,
            focusedPinCodeContainerStyle: styles.otpFocused,
            filledPinCodeContainerStyle: styles.otpFilled,
          }}
        />

      </View>
      <View style={styles.footer}>
        <MagicButton title={strings.otp.continue}
          onPress={() => { console.log("next") }}
          style={[styles.continueButton, { backgroundColor: otp?.length !== 4 ? "lightgray" : Colors.dark.primary }]}
          disabled={otp?.length !== 4} />
        <ThemedText style={[styles.subText, styles.resend]} onPress={() => { console.log("Resend") }}>{strings.otp.resend}</ThemedText>
      </View>
    </ThemedView>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: { fontSize: 32, lineHeight: 36, fontWeight: '700', marginTop: 24 },
  subText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  footer: {
    paddingHorizontal: 24,
    marginBottom: 72,
  },
  continueButton: {
    marginTop: 24,
  },
  resend: {
    color: Colors.dark.primary,
    marginTop: 32,
  },
  otpContainer: {
    marginTop: 48,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  otpPin: {
    height: 52,
    width: 52,
    borderRadius: 26,
  },
  otpPinText: {
    color: 'white',
  },
  otpFocusStick: {
    borderWidth: 2,
    height: 52,
    width: 52,
    borderRadius: 26,
  },
  otpFocused: {
    borderColor: Colors.dark.primary,
    borderWidth: 2,
    height: 52,
    width: 52,
    borderRadius: 26,
  },
  otpFilled: {
    backgroundColor: Colors.dark.primary,
    borderColor: Colors.dark.primary,
    borderWidth: 2,
  },
})
