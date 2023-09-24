import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { DarkStyle, LightStyle} from './Styles/Styles';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, Switch, TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function App() {

  
  const [isEnabled, setIsEnabled] = useState(false)
  
  const currentStyle = isEnabled ? DarkStyle : LightStyle
  
  const [weight, setWeight] = useState(0)
  
  const [bottles, setBottles] = useState(0)

  const [hours, setHours] = useState(0)
  
  const [index, setIndex] = useState(0)
  
  const [total, setTotal] = useState(0)
  
  const genders = [
    {gender: 'Male', index: 0.7},
    {gender: 'Female', index: 0.6}
  ]
  
  const genTable = genders.map(g => 
  <View key={g.gender} style={currentStyle.radioButtonsGroup}>
  <RadioButton uncheckedColor={currentStyle.color} color={currentStyle.color} value={g.index}/>
  <Text style={currentStyle.radioTitle}> {g.gender}</Text>
  </View>)

  const [loaded] = useFonts({
    GreatVibes: require('./assets/fonts/GreatVibes-Regular.ttf')
  });

  if(!loaded){
    return null;
  } 

  function calculate() {

    if (weight <= 0 || weight == '' || weight > 300) {
      return alert('Input right weight')
    }

    if (index < 0.6) {
      return alert('Choose gender')
    }

    else {
      const litres = bottles * 0.33

      const grams = litres * 8 * 4.5

      const weight_clear = weight.toString().replace(/,/g, '.')

      const burned = parseFloat(weight_clear) / 10

      const grams_left = grams - burned * hours

      if ( grams_left < 0) {
        setTotal(0)
      }

      else {
        setTotal(grams_left/(weight_clear * index))
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
      <LinearGradient colors={['#c8c2ff', '#ffffff', '#c8c2ff']} style={currentStyle.linearGradient}>
        <View style={currentStyle.container}>
          <View style={currentStyle.mode}>
            <Switch
            style= {{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
            value={isEnabled}
            onValueChange={() => {setIsEnabled(prev => !prev), console.log('Style switched')}}
            thumbColor={isEnabled ? currentStyle.color1 : currentStyle.color}
            trackColor={{true: currentStyle.trackColorTrue, false: currentStyle.trackColorFalse}}
            />
          </View>

          <View style={currentStyle.header}>
            <Text style={{fontFamily: 'GreatVibes', fontSize: 70, color: '#223168'}}>Alcometer</Text>
          </View>

          <View style={currentStyle.containerInner}>
            <TextInput
            label={'Weight'}
            right={<TextInput.Icon icon="scale"/>}
            mode="outlined" 
            onChangeText={w => {setWeight(w), console.log(w)}}
            keyboardType='numeric'
            placeholderTextColor={currentStyle.colorWeight}
            style={currentStyle.TextInput}
            />
              <View style={currentStyle.titles}>
                <View>
                  <Text style={currentStyle.titleBottles}>Bottles</Text>
                </View>
                <Text style={currentStyle.titleHours}>Hours</Text>
              </View>

              <View style={currentStyle.numInput}>
                <View style={currentStyle.numInputBottles}>
                  <NumericInput 
                  valueType='real'
                  rounded
                  iconStyle={currentStyle.icon}
                  minValue={0}
                  maxValue={99}
                  totalHeight={50}
                  totalWidth={110}
                  borderColor={currentStyle.borderColor}
                  textColor={currentStyle.color}
                  rightButtonBackgroundColor='#c2c7ffff'
                  leftButtonBackgroundColor='#c2c7ffff'
                  onChange={b => {setBottles(b), console.log(b)}}
                  />
                </View>

                <View style={currentStyle.numInputHours}>
                  <NumericInput
                  valueType='real'
                  rounded
                  iconStyle={currentStyle.icon}
                  minValue={0}
                  maxValue={99}
                  totalHeight={50}
                  totalWidth={110}
                  borderColor={currentStyle.borderColor}
                  textColor={currentStyle.color}
                  rightButtonBackgroundColor='#c2c7ffff'
                  leftButtonBackgroundColor='#c2c7ffff'
                  onChange={h => {setHours(h), console.log(h)}}
                />
              </View>
            </View>

            <RadioButton.Group value={index} onValueChange={i => {setIndex(i), console.log(i)}}>
              {genTable}
            </RadioButton.Group>

            {total.toFixed(2) <= 0.3 && 
              <Text style={[currentStyle.header2, {color: '#0fdd35'}]}>{total.toFixed(2)}</Text>
            }

            {total.toFixed(2) >= 0.3 && total.toFixed(2) <= 0.6 && 
              <Text style={[currentStyle.header2, {color: '#f9c006'}]}>{total.toFixed(2)}</Text>
            }

            {total.toFixed(2) > 0.6 && 
              <Text style={[currentStyle.header2, {color: '#f90a06'}]}>{total.toFixed(2)}</Text>
            }

            <TouchableOpacity onPress={calculate}>
              <Text style={currentStyle.calculate}>CALCULATE</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}