import React from "react";

import ResetCss from "../../styles/ResetCss";
import LoginStyled from "./LoginStyles";
import Spinner from "../../components/Spinner/Spinner";

import ThumbImg from "../../assets/icons/thumb.svg";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernamevalid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      usernamevalid: false,
      [name]: value
    });
    if (target.value.length > 5) {
      document.querySelector("form div div").style.display = "block";

      setTimeout(() => {
        document.querySelector("div.divAfter").style.display = "block";
        document.querySelector("button").style.display = "inline";
        this.setState({
          usernamevalid: true
        });
        document.querySelector("form div div").style.display = "none";
        document.querySelector("input[type=password]").focus();
      }, 3000);
    }
  }

  render() {
    return (
      <LoginStyled usernamevalid={this.state.usernamevalid}>
        <ResetCss />
        <div>
          <img src={ThumbImg} alt="thumb" />
          <form>
            <div>
              <label>Usuário</label>
              <input
                type="text"
                placeholder="mano_champion"
                onChange={this.handleInputChange}
              />
              <Spinner id="spinner" />
            </div>
            <div className="divAfter">
              <label>Senha</label>
              <input type="password" />
            </div>
            <button>ENTRAR</button>
          </form>
        </div>
        <a href={"/somewhere"}>Esqueci meus dados de acesso.</a>
      </LoginStyled>
    );
  }
}
