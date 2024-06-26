import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasInteractedEmail, setHasInteractedEmail] = useState(false);
  const [hasInteractedPassword, setHasInteractedPassword] = useState(false);

  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    validateForm();
  }, [userName, password]);

  const validateForm = () => {
    let isValid = true;

    // Validação de e-mail
    if (!userName) {
      setEmailError("");
      isValid = false;
    } else if (!userName.includes('@')) {
      setEmailError("Por favor, insira um e-mail válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validação de senha
    if (!password) {
      setPasswordError("");
      isValid = false;
    } else if (password.length <= 4) {
      setPasswordError("A senha deve ter mais de 4 dígitos.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    setIsButtonDisabled(!isValid);
  };

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    setHasInteractedEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setHasInteractedPassword(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isButtonDisabled) {
      alert("Login bem-sucedido! \nBem-vindo!");
      navigate('/home'); // Navega para a página Home
    }
  };

  return (
    <div className='back'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <div className="input-field">
            <input type="email" placeholder="Email ou número de celular" onChange={handleEmailChange} value={userName}/>
            {hasInteractedEmail && emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-field">
            <input type="password" placeholder="Senha" onChange={handlePasswordChange} value={password}/>
            {hasInteractedPassword && passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" disabled={isButtonDisabled}>Entrar</button>
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre-se de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="signup-link">
            <p>Novo por aqui? <a href="#">Assine agora.</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
