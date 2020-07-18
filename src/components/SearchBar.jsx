import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }
  handleQuery = (e) => {
    let query = e.currentTarget.value;
    this.setState({ query });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(query);
  };
  render() {
    return (
      <Paper className="searchbar" elevation={6}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handleQuery}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
