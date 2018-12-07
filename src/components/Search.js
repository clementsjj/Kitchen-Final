import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIngredients, addItem, deleteItem } from '../actions/index';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Search extends Component {
  constructor(props) {
    super(props);

    this.search = React.createRef();

    this.state = {
      ingredients: '',
      isButtonDisabled: true
    };
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }
  // onSearchInputChange = event => {
  //   console.log("Search: " + event.target.value);
  //   this.state.isButtonDisabled = false;
  //   //console.log(this.state.isButtonDisabled);
  // };

  //Dwyer's Code
  // handleSearch = event => {
  //   let value = this.search.current.value;
  //   let updated = Object.assign({}, this.state.ingredients);

  //   updated = value;
  //   //updated = value.split(",").join("%2C");
  //   //console.log(updated);

  //   this.setState({
  //     ingredients: updated
  //   });
  // };

  //JJ's Code
  handleSearch = event => {
    let value = this.search.current.value;
    console.log();
    let updated = Object.assign({}, this.state.ingredients);

    updated = value;
    updated = value.split(',').join('%2C');
    console.log(updated);

    this.setState({
      ingredients: updated
    });
  };

  // onSubmitHandler = event => {
  //   console.log("Search onsubmit");
  // };

  handleSubmitSearch = event => {
    event.preventDefault();
    console.log('Handling the Search...');

    this.props.fetchIngredients(this.state.ingredients);
    event.target.reset();
  };

  handleButtonClick = (e, name) => {
    //console.log("Click: " + name);
    let updated = Object.assign({}, this.state.fridge);

    if (!this.props.fridge.ingredients.includes(name)) {
      //console.log('***JJ***');
      this.props.addItem(name);
    }
  };

  render() {
    const { fetchedIngredients } = this.props.ingredients;
    let tempIngredients;

    //console.log("FetchedIngredients: ", fetchedIngredients);
    //console.log("fridge: ", this.props.fridge.ingredients);

    //  <img src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'></img>

    if (fetchedIngredients !== null) {
      tempIngredients = fetchedIngredients.map((item, i) => {
        return (
          <Button
            className="searchBox"
            name={item.name}
            item={item.name}
            key={i}
            onClick={e => {
              this.handleButtonClick(e, item.name);
            }}
          >
            <div className="searchBox">
              <div className="searchImg">
                <img
                  name={item.name}
                  src={
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    item.image
                  }
                />
              </div>
              <div className="searchName">{item.name}</div>
            </div>
          </Button>
        );
      });
    } else {
      tempIngredients = <p />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmitSearch} className="searchForm">
          <TextField
            label="Ingredient Search"
            type="search"
            id="searchInput"
            defaultValue=""
            helperText="Type an ingredient name and click Search"
            margin="normal"
            onChange={this.handleSearch}
            inputRef={this.search}
          />
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            type="submit"
            //onSubmit={this.handleSubmitSearch}
            //onClick={this.handleSubmitSearch}
            //disabled={this.state.isButtonDisabled}
          >
            Search
          </Button>
        </form>
        <div className="searchIngredients">{tempIngredients}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  fridge: state.fridge
});

export default connect(
  mapStateToProps,
  { fetchIngredients, addItem, deleteItem }
)(Search);
