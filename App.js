import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager, ScrollView, Alert } from 'react-native';
import Card from './components/Card';
import Input from './components/Input';
import CustomButton from './components/CustomButton';

I18nManager.allowRTL(false);

export default function App() {
  const [result, setResult] = useState("No result ATM");
  const [numOne, setNumOne] = useState("0");
  const [numTwo, setNumTwo] = useState("0");
  const [numThree, setNumThree] = useState("0");

  const handleReset = () => {
    setResult("No result ATM");
    setNumOne("0");
    setNumTwo("0");
    setNumThree("0");
  };

  const handleCalculate = () => {
    if (numOne === "" || numTwo === "" || numThree === "") {
      Alert.alert("All the inputs must to be with number!")
      return;
    }

    const result = returnCalculateResult(numOne, numTwo, numThree);
    setResult(result);

  };

  const returnCalculateResult = (num1, num2, num3) => {
    const result = parseInt(num1) + parseInt(num2) + parseInt(num3);
    return result.toString();
  };



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.wrapper}>
          <Card style={styles.card} numOne={numOne} numTwo={numTwo} numThree={numThree}>
            <View>
              <Text style={styles.title}>Calculator</Text>
            </View>
            <View style={styles.inputContainer}>
              <Input value={numOne} onChangeText={(txt) => setNumOne(txt.replace(/[^0-9]/g, ''))} />
              <Text>+</Text>
              <Input value={numTwo} onChangeText={(txt) => setNumTwo(txt.replace(/[^0-9]/g, ''))} />
              <Text>+</Text>
              <Input value={numThree} onChangeText={(txt) => setNumThree(txt.replace(/[^0-9]/g, ''))} />
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton color="green" onPress={handleCalculate} />
              <CustomButton color="#c1c1c1" title="reset" onPress={handleReset} />
            </View>
          </Card>
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Result: </Text>
            <Text style={[styles.resultLabel, styles.resultNum]}>{result}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    width: "90%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center"
  },
  resultLabel: {
    fontSize: 20,
  },
  resultNum: {
    fontWeight: "bold"
  },
  card: { width: "90%" },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "50%",
    alignItems: "center"
  },
  buttonsContainer: {
    borderTopWidth: 1,
    borderColor: "black",
    width: "90%",
    marginTop: 10,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between"
  }
});
