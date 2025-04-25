import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.white,
    flexDirection: 'column',
  },
  input: {
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    height: 30,
    margin: 10,
    padding: 10,
    alignItems: 'center',       
    justifyContent: 'center',  
  },

});

const initialValues = {
  userName: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}
      />
      <TextInput secureTextEntry
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button} >
        <Text fontWeight="bold" fontSize="body" color="white">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;