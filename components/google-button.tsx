import GoogleIcon from '@/assets/Icons';
import strings from '@/constants/string.json';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type TouchableOpacityProps,
  type ViewStyle,
} from 'react-native';

export type GoogleButtonProps = TouchableOpacityProps & {
  title?: string;
};

export function GoogleButton({
  title = strings.login.continueWithGoogle,
  style,
  ...rest
}: GoogleButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style as StyleProp<ViewStyle>]}
      {...rest}>
      {/* Swap for the official multicolor logo by dropping a PNG/SVG in assets. */}
      <GoogleIcon width={20} height={20} style={styles.icon} />
      {/* <AntDesign name="google" size={20} color="#4285F4" style={styles.icon} /> */}
      <Text style={styles.text}>{title}</Text>
      <View style={styles.spacer} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E3E5E8',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  icon: {
    marginRight: 12,
  },
  spacer: {
    width: 20,
    height: 20,
  },
  text: {
    flex:1,
    fontSize: 18, lineHeight: 22,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
});
