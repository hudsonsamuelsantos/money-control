export default function Login() {
    return (
      <main>
        <header>
          {/*Logo*/}
          <span>
            Easy Money
          </span>
          <span>
            Faça login e comece a usar!
          </span>
        </header>
        <form>
          <label>
            Endereço de e-mail
            <input type="email" name="email" id="email" placeholder="johndoe@example.com"/>
          </label>
          <label>
            Sua senha
            <input type="password" name="password" id="password" placeholder="***********"/>
          </label>
          <button type="submit">
            Entrar no sistema
          </button>
        </form>
        <footer>
          <a href="#"
          >
            Não possui conta? Crie uma agora!
          </a>
        </footer>
      </main>
    )
  }