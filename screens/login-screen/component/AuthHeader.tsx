import { ThemedText } from '@/components/themed-text'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { Colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type AuthHeaderProps = {
    title?: string
    onBackPress?: () => void
    onRightPress?: () => void
}

const AuthHeader = ({ title, onBackPress, onRightPress }: AuthHeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <IconSymbol size={26} name="chevron.left" color={'#090A0A'} />
      </TouchableOpacity>
      {title && <ThemedText style={styles.title}>{title}</ThemedText>}
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  title: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'right',
    color: Colors.light.primary,
  },
})