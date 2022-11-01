import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ToastAndroid } from "react-native";
import { BASE_URL } from "../api/client";
import { useLogin } from "../context/LoginProvider";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import axios from "axios";

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        await axios
          .post(`${BASE_URL}users/auth`, userInfo)
          .then((res) => {
            if (res.data.success) {
              console.log("Logged In:", res.data);
              setUserInfo({ email: "", password: "" });
              setProfile(res.data.user);
              setIsLoggedIn(true);
            } else {
              showToast(res.data.message);
            }
          })
          .catch((error) => console.log("log err:", error));
      } catch (error) {
        console.log("login error at last-", error);
      }
    }
  };

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        label="Email"
        placeholder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        label="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Login" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
