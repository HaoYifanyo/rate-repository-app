import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from './Text'; 
import theme from '../theme'; 


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tab: {
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.tab}>
        <Text color="textSecondary" fontWeight="bold">Repositories</Text>
      </Link>
      <Link to="/sign-in" style={styles.tab}>
        <Text color="textSecondary" fontWeight="bold">Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;