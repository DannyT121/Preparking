
import Login from '@/screens/login-screen/Login';
import Otp from '@/screens/otp-screen /Otp';
import WelcomeScreen from '@/screens/welcome-screen/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Otp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
  
  export default function AuthStack() {
  
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        } }
        >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Otp"
            component={Otp}
           
          />
        </Stack.Navigator>

    
    );
  }
  