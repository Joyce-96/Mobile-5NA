import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Atenção", "Informe os campos obrigatórios");
      }
      setTimeout(() => {
        Alert.alert("Logado com sucesso!");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.titulo}>Bem vindo (a) </Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.tituloInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={20} color={themes.colors.gray} />
        </View>

        <Text style={style.tituloInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons
            name="remove-red-eye"
            size={20}
            color={themes.colors.gray}
          />
        </View>
      </View>
      <View style={style.boxButton}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color={"#fff"} size={"small"} />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={style.textSemConta}>
        Não tem conta? <Text style={style.textCriarConta}>Crie agora!</Text>
      </Text>
    </View>
  );
}
