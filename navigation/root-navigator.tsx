import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useCallback, useEffect, useState } from 'react';
import SplashScreen from '@/screens/splash-screen/SplashScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Modal: undefined;
};


export default function RootNavigator() {
  const colorScheme = useColorScheme();
  const [isLoading,setIsLoading]=useState(true)


useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false)
    console.log("Changes ");
    
  }, 3000);

},[isLoading])

 const getRoute= useCallback(()=>{

  if(true){ 
    return  AuthStack()
  }
  else{
    return AppStack()} 
 
  },[])
  if (isLoading) return <SplashScreen/>
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {getRoute()}
    </NavigationContainer>
  );
}
