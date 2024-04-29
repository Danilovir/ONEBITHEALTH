
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/components/Title';
import Main from './SRC/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
