import { CountryPicker } from '@/components/country-picker';
import { DEFAULT_COUNTRY, type Country } from '@/constants/countries';
import strings from '@/constants/string.json';
import { Colors } from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';

type FocusHandler = NonNullable<TextInputProps['onFocus']>;
type BlurHandler = NonNullable<TextInputProps['onBlur']>;

export type PhoneInputProps = Omit<TextInputProps, 'style'> & {
  /** Controlled selected country. Falls back to internal state when omitted. */
  country?: Country;
  /** Called when the user picks a country from the dropdown. */
  onChangeCountry?: (country: Country) => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export function PhoneInput({
  country,
  onChangeCountry,
  containerStyle,
  placeholder = strings.phoneInput.placeholder,
  onFocus,
  onBlur,
  ...rest
}: PhoneInputProps) {
  const [focused, setFocused] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [internalCountry, setInternalCountry] = useState<Country>(DEFAULT_COUNTRY);

  // Controlled when `country` is provided, otherwise track internally.
  const selectedCountry = country ?? internalCountry;

  const handleFocus: FocusHandler = (e) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: BlurHandler = (e) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleSelectCountry = (next: Country) => {
    if (country === undefined) setInternalCountry(next);
    onChangeCountry?.(next);
    setPickerVisible(false);
  };

  return (
    <>
      <View style={[styles.container, focused && styles.containerFocused, containerStyle]}>
        <TouchableOpacity
          style={styles.country}
          activeOpacity={0.7}
          onPress={() => setPickerVisible(true)}>
          <Text style={styles.flag}>{selectedCountry.flag}</Text>
          <Text style={styles.dialCode}>{selectedCountry.dialCode}</Text>
          <AntDesign name="down" size={14} color="#11181C" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9AA5B1"
          keyboardType="phone-pad"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </View>

      <CountryPicker
        visible={pickerVisible}
        selectedCode={selectedCountry.code}
        onSelect={handleSelectCountry}
        onClose={() => setPickerVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E3E5E8',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  containerFocused: {
    borderColor: Colors.light.primary,
    borderWidth: 2,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  flag: {
    fontSize: 22,
    marginRight: 8,
  },
  dialCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#11181C',
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#11181C',
    paddingVertical: 0,
  },
});
