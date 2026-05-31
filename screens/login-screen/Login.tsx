import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text'

const Login = () => {
  return (
    <View style={styles.container}>
    <ThemedText>Login </ThemedText>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})