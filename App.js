import React,{ useContext} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Context, { NewsContext } from './API/Context';
import InShortTabs from './components/InShortTabs';


 function App() {

  const {darkTheme}=useContext(NewsContext)

  return (
    //  colour  can be changed from here
    <View style={{...styles.container,backgroundColor: darkTheme ?'#282C35' : "white"}}>    
      <InShortTabs/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default ()=>{
  return (
  <Context>
    <App/>
  </Context>) ;
} 