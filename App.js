
import React from 'react'
import {Provider as PaperProvider , TextInput} from 'react-native-paper'
import { LoginScreen } from './App/screen/login/loginscreen'
import { Register } from './App/screen/Register/Register';





const App = () => {
  return (
    <PaperProvider>
    <LoginScreen/>
    </PaperProvider>
  )
}

export default App