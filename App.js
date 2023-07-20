import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Quicksand': require('./src/Assets/Fonts/Quicksand/Quicksand-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <Navigator/>
  );
}
