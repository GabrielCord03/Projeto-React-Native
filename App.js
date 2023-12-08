import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.Aplicativo}>

      <View style={styles.container_barra_topo}>
      </View>
        <View style={styles.container_login}>
          <View style={styles.container_imagem}> 
            <Image
              source={require("./src/assets/imagem_teste.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.container_usuario_senha}>
            <View style={styles.container_usuario}>
              <Text style = {styles.Text_usuario}>Usuário</Text>
            </View>
            <View style={styles.container_senha}>
              <Text style={styles.Text_Senha}>Senha</Text>
            </View>
          </View>
          <View>
             <TouchableOpacity style={styles.Botao_Entrar}>
                <Text style={styles.Texto_Botao_Entrar}>Entrar</Text>
             </TouchableOpacity>
          </View>
            <StatusBar style="auto" />
        </View>
        <View style={styles.container_criar_conta}>
          <TouchableOpacity>
            <Text>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.container_barra_rodape}>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container_barra_topo: {
    width: 500,
    height: 50,
    backgroundColor: '#1F1F1F',
  },
  container_login: {
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingBottom: 20,
  },
  container_imagem:{
    
  },
  logo: {
    borderRadius : 500,
    height: 220,
    width: 220,
  },
  container_usuario: {
    marginTop: 50,
    width: 221,
    height: 43,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 20
  },
  container_usuario_senha:{
  heigth: 700
  },
  container_senha:{
    marginTop : 50,
    width: 221,
    height: 43,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 20
  },
  Text_usuario: {
    opacity : 0.7
  },
  Text_Senha:{
    opacity : 0.7
  },
  Botao_Entrar:{
    marginTop: 50,
    backgroundColor: '#1F1F1F',
    borderRadius: 15,
    height: 56,
    width: 221,
    alignItems: 'center',
    paddingVertical : 18
  },
  Texto_Botao_Entrar:{
    color: '#FFFFFF' 
  },
  container_criar_conta:{
    alignItems: 'center',
    height: 20
  },
  container_barra_rodape:{
    justifyContent: 'space-around',
    height: 100,
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    marginTop: 80,
    borderRadius: 25 
  }

});
