import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'; 
import theme from '../theme'; 

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary, 
  },
  tab: {
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab}>
        <Text color="textSecondary" fontWeight="bold">Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;