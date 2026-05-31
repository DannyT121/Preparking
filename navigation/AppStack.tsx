
  import { createNativeStackNavigator } from '@react-navigation/native-stack';  
  import BottomTabs from '@/navigation/bottom-tabs';
  const Stack = createNativeStackNavigator();
  export default function AppStack() {
  
    return <Stack.Navigator>
          <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
  }
  