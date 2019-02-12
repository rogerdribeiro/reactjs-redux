import React, { Component, Fragment } from 'react';

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repository}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <ul>
            <li>
              <p>
                <strong>Facebook/react</strong>
                (description alkdf lkdf akldjfklasdf aksldf ajlksdf )
              </p>
              <a href="url">Acessar</a>
            </li>
          </ul>
        </form>
      </Fragment>
    );
  }
}
