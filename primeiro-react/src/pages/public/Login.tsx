{/**Esta tela de login foi criada para entender o conceito de rotas e telas publicas
    
    O que estiver como tela publica é o que qualquer usuario pode ver quando não 
    estiver logado, como a tela de login. E o que estiver privado é o que ele pode acessar
    quando realizar o login
*/}

import { useState } from 'react';
import LoginStyles from './Login.module.css';


export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleLogin = () => {
    console.log('Entrar');
  }


  return (
    <div className={LoginStyles.PageContainer}>
      <div className={LoginStyles.PageContent}>
        <h1 className={LoginStyles.LoginTitle}>
          Login
        </h1>


        <b>Email</b>
        <input
          value={email}
          className={LoginStyles.Input}
          onChange={e => setEmail(e.target.value)}
        />

        <b>Senha</b>
        <input
          type='password'
          value={password}
          className={LoginStyles.Input}
          onChange={e => setPassword(e.target.value)}
        />

        <br />

        <button className={LoginStyles.Button} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
};