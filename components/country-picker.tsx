import { COUNTRIES, type Country } from '@/constants/countries';
import strings from '@/constants/string.json';
import { Colors } from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type CountryPickerProps = {
  visible: boolean;
  /** Currently selected country code, used to highlight the row. */
  selectedCode?: string;
  onSelect: (country: Country) => void;
  onClose: () => void;
};

export function CountryPicker({
  visible,
  selectedCode,
  onSelect,
  onClose,
}: CountryPickerProps) {
  const [query, setQuery] = useState('');

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q),
    );
  }, [query]);

  const handleSelect = (country: Country) => {
    setQuery('');
    onSelect(country);
  };

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}>
      <SafeAreaView style={styles.sheet} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Text style={styles.title}>{strings.countryPicker.title}</Text>
          <TouchableOpacity onPress={handleClose} hitSlop={8}>
            <AntDesign name="close" size={22} color="#11181C" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <AntDesign name="search" size={16} color="#9AA5B1" />
          <TextInput
            style={styles.searchInput}
            placeholder={strings.countryPicker.searchPlaceholder}
            placeholderTextColor="#9AA5B1"
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.code}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={<Text style={styles.empty}>{strings.countryPicker.empty}</Text>}
          renderItem={({ item }) => {
            const active = item.code === selectedCode;
            return (
              <TouchableOpacity
                style={styles.row}
                activeOpacity={0.6}
                onPress={() => handleSelect(item)}>
                <Text style={styles.rowFlag}>{item.flag}</Text>
                <Text style={styles.rowName}>{item.name}</Text>
                <Text style={styles.rowDial}>{item.dialCode}</Text>
                {active && (
                  <AntDesign
                    name="check"
                    size={18}
                    color={Colors.light.primary}
                    style={styles.rowCheck}
                  />
                )}
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#11181C',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 8,
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1F3F5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#11181C',
    paddingVertical: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  rowFlag: {
    fontSize: 22,
    marginRight: 12,
  },
  rowName: {
    flex: 1,
    fontSize: 16,
    color: '#11181C',
  },
  rowDial: {
    fontSize: 16,
    color: '#687076',
  },
  rowCheck: {
    marginLeft: 12,
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    color: '#9AA5B1',
    fontSize: 15,
  },
});
