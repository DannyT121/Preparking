import { APP_LOGO_PNG } from '@/assets/images'
import { ThemedView } from '@/components/themed-view'
import React from 'react'
import { Image, StatusBar, StyleSheet } from 'react-native'

const SplashScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
      <Image source={APP_LOGO_PNG} />
    </ThemedView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{flex:1,alignItems:"center",justifyContent:"center"}
})