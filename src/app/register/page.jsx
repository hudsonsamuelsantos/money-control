export default function Register() {
  return (
    <main>
      <header>
        {/*Logo*/}
        <span>
          Easy Money
        </span>
        <span>
          Insira seus dados para criar uma conta!
        </span>
      </header>
      <form>
        <label>
          Seu nome
          <input type="text" name="name" id="name" placeholder="Nome"/>
        </label>
        <label>
          Endereço de e-mail
          <input type="email" name="email" id="email" placeholder="johndoe@example.com"/>
        </label>
        <label>
          Sua senha
          <input type="password" name="password" id="password" placeholder="***********"/>
        </label>
        <label>
          Confirme sua senha
          <input type="password" name="password" id="password" placeholder="***********"/>
        </label>
        <button type="submit">
          Cadastrar no sistema
        </button>
      </form>
      <footer>
        <a href="#"
        >
          Já possui conta? Faça login agora!
        </a>
      </footer>
    </main>
  )
}