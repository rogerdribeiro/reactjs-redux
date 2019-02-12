import React, { Component, Fragment } from 'react';
// import { Container } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    this.props.addFavorite();
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
          <button type="submit">Adicionar</button>
          <ul>
            {this.props.favorites.map(favorite => (
              <li key={favorite.id}>
                <strong>{favorite.name}</strong>
                {' '}
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
