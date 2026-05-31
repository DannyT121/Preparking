import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import BookingsScreen from '@/screens/booking-screen/bookings-screen';
import HomeScreen from '@/screens/home-screen/home-screen';
import MapScreen from '@/screens/map-screen/map-screen';

export type RootTabParamList = {
  Home: undefined;
  Map: undefined;
  Bookings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const ACTIVE_TINT = '#13C2A3';
const INACTIVE_TINT = '#9AA5B1';

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: ACTIVE_TINT,
        tabBarInactiveTintColor: INACTIVE_TINT,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        tabBarStyle: { height: 88, paddingTop: 8 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="map.fill" color={color} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="list.bullet.rectangle.fill" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
