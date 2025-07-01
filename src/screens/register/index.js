import { View, ScrollView } from "react-native";
import { TextInput, HelperText, Button, Text } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  const validationSchemaRegister = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaRegister,
  });

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TextInput
        label="Ad"
        mode="outlined"
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
        error={formik.errors.name}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.name}>
        {formik.errors.name}
      </HelperText>
      <TextInput
        label="Soyad"
        mode="outlined"
        value={formik.values.surname}
        onChangeText={formik.handleChange("surname")}
        error={formik.errors.surname}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.surname}>
        {formik.errors.surname}
      </HelperText>
      <TextInput
        label="Kullanıcı Adı"
        mode="outlined"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        error={formik.errors.username}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.username}>
        {formik.errors.username}
      </HelperText>
      <TextInput
        label="E-posta"
        mode="outlined"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        error={formik.errors.email}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.email}>
        {formik.errors.email}
      </HelperText>
      <TextInput
        label="Şifre"
        mode="outlined"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        error={formik.errors.password}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.password}>
        {formik.errors.password}
      </HelperText>
      <TextInput
        label="Şifre Tekrar"
        mode="outlined"
        secureTextEntry={true}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange("confirmPassword")}
        error={formik.errors.confirmPassword}
        style={{
          width: "90%",
          paddingLeft: 8,
          backgroundColor: "white",
        }}
        autoCapitalize="none"
      />
      <HelperText type="error" visible={formik.errors.confirmPassword}>
        {formik.errors.confirmPassword}
      </HelperText>
      <Button
        mode="contained"
        onPress={() => {
          if (formik.isValid) {
            formik.resetForm(); // Reset form after successful submission
            navigation.navigate("Login"); // Navigate to Login screen after successful registration
          } else {
            console.log("Form is invalid");
          }
        }}
        //disabled={loading} // Uncomment if you have a loading state
        //loading={loading}
        style={{
          marginTop: 6,
          width: "90%",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 15,
        }}
        labelStyle={{
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Kayıt Ol
      </Button>
    </ScrollView>
  );
};

export default Register;
