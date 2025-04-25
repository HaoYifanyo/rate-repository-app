import { View, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView horizontal>
        <Link to="/" style={styles.tab}>
          <Text color="white" fontWeight="bold">Repositories</Text>
        </Link>
        <Link to="/sign-in" style={styles.tab}>
          <Text color="white" fontWeight="bold">Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;