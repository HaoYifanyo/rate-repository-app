import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';


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
    margin: 5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  inputError: {
    borderColor: theme.colors.red,
  },
  error: {
    color: theme.colors.red,
    fontSize: theme.fontSizes.body,
    height: 20,
    marginLeft: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    height: 30,
    margin: 5,
    padding: 10,
    alignItems: 'center',       
    justifyContent: 'center',  
  },

});

const initialValues = {
  userName: '',
  password: '',
};

const validationSchema = yup.object().shape({
  userName: yup
    .string('userName must be a string')
    .required('userName is required'),
    password: yup
    .string('password must be a string')
    .required('password is required'),
});


const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.touched.userName && formik.errors.userName && styles.inputError, // ◆ apply red border if error
        ]}
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.userName}
        onChangeText={formik.handleChange('userName')}
      />
       {formik.touched.userName && formik.errors.userName && (
        <Text style={styles.error}>{formik.errors.userName}</Text>
        )}
      <TextInput secureTextEntry
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.inputError, // ◆ apply red border if error
        ]}
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
       {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
        )}
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