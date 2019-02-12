import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    const { repositoryInput } = this.state;

    event.preventDefault();
    this.props.addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
          {this.props.favorites.loading && <span>Carregando...</span>}
          <ul>
            {this.props.favorites.data.map(favorite => (
              <li key={favorite.id}>
                <strong>{favorite.name}</strong>
(
                {favorite.description}
)
                <a href={favorite.url}>Acessar</a>
              </li>
            ))}
          </ul>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
