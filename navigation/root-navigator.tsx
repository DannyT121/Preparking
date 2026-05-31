import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import SplashScreen from '@/screens/splash-screen/SplashScreen';
import { useEffect, useState } from 'react';
import AuthStack from './AuthStack';

export type RootStackParamList = {
  Tabs: undefined;
  Modal: undefined;
};


export default function RootNavigator() {
  const colorScheme = useColorScheme();
  const [isLoading,setIsLoading]=useState(true)


useEffect(()=>{
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 3000);
  return () => clearTimeout(timer)
},[])

  if (isLoading) return <SplashScreen/>
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthStack />
    </NavigationContainer>
  );
}
