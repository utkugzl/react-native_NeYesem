import {
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import scaleByHeight from "../../utils/ScaleByHeight.js";

const Login = () => {
  const validationSchemaLogin = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    // onSubmit: values => {
    //   onLoginPress(values);
    // },
  });

  return (
    <TouchableOpacity
      style={{ flex: 1, backgroundColor: "white" }}
      activeOpacity={1}
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        behavior="height"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/loginLogo.png")}
            style={{ width: scaleByHeight(45), height: scaleByHeight(45) }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <TextInput
            label="Username"
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
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            //error={formik.errors.password}
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
          <Button
            mode="contained"
            //onPress={formik.handleSubmit}
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
            Login
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};

export default Login;
