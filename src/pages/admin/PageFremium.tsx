import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavbarSeller from '../../components/organisms/NavbarSeller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#EFD3A3',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: '#959292',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#F1B77C',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
  },
  subTitle: {
    marginTop: 20,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    width: 300,
  },
  highlighted: {
    color: '#F1B77C',
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 200,
  },
  footer: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    top: 60,
    right: 20,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    zIndex: 1,
  },
  dropdownItem: {
    width: 300,
    paddingVertical: 10,
    backgroundColor: '#EFD3A3',
  },
});

const PageFremium: React.FC = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle-sharp" size={35} color="black" />
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={35} color="black" />
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { navigation.navigate('Service1'); setMenuVisible(false); }}>
              <Text>Servicio 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { navigation.navigate('Service2'); setMenuVisible(false); }}>
              <Text>Servicio 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { navigation.navigate('Service3'); setMenuVisible(false); }}>
              <Text>Servicio 3</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={styles.title}>SUSCRÍBETE</Text>
        <Text style={styles.subTitle}>
          ¡Potencia tu Negocio con Nuestra Suscripción Premium!
        </Text>
        <Text style={styles.subTitle}>
          ¿Eres un vendedor y quieres destacar entre la competencia? ¡No te pierdas la oportunidad de transformar tu negocio con nuestra suscripción premium!
        </Text>
        <Image
          source={require('../../assets/img/imgPago.png')} 
          style={styles.image}
        />
        <Text style={styles.subTitle}>
          Beneficios Exclusivos para Vendedores Premium:
          {'\n'}- Más Opciones en el Formulario de Servicio: Añade descripciones detalladas, imágenes adicionales, y especifica múltiples categorías para atraer a más clientes.
          {'\n'}- Mayor Visibilidad: Tus servicios serán destacados en los resultados de búsqueda, aumentando tus posibilidades de ser encontrado por nuevos clientes.
          {'\n'}- Análisis Avanzados: Accede a estadísticas detalladas sobre tus servicios, visualizaciones y reservas, para entender mejor a tus clientes y optimizar tus ofertas.
          {'\n'}- Gestión de Citas Mejorada: Herramientas avanzadas para la gestión de citas, incluyendo recordatorios automáticos y opciones de reprogramación flexibles.
        </Text>
        <Image
          source={require('../../assets/img/crown.gif')} 
          style={styles.image}
        />
      </ScrollView>
      <NavbarSeller />
    </View>
  );
}

export default PageFremium;
