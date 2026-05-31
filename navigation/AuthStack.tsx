
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/screens/login-screen/Login';
import Otp from '@/screens/otp-screen /Otp';  
  
const Stack = createNativeStackNavigator();
  
  export default function AuthStack() {
  
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        } }
        >
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen
            name="Otp"
            component={Otp}
           
          />
        </Stack.Navigator>

    
    );
  }
  