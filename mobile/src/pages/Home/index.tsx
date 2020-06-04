import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, Text, ImageBackground, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate('Points', { city, uf });
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/home-background.png')}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu Marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
        </Text>
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a UF"
          value={uf}
          onChangeText={setUf}
          maxLength={2}
          autoCapitalize="characters"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a cidade"
          value={city}
          onChangeText={setCity}
          autoCorrect={false}
        />

        <RectButton style={styles.button} onPress={handleNavigationToPoints}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#fff" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
