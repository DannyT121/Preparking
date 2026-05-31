import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import {
  StyleSheet,
  TouchableOpacity,
  type StyleProp,
  type TextStyle,
  type TouchableOpacityProps,
  type ViewStyle,
} from 'react-native';

export type MagicButtonProps = TouchableOpacityProps & {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
};

export function MagicButton({ title, style, textStyle, fullWidth=true, ...rest }: MagicButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style as StyleProp<ViewStyle>, fullWidth && styles.fullWidth]} {...rest}>
      <ThemedText style={[styles.buttonText, textStyle]}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 28,
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
});
