import React, { setState } from "react";
import { SearchBar } from "react-native-elements";
import Character from "./Character";

export default class Search extends React.Component {
  state = {
    search: "",
    data: this.props.characters,
    filteredData: [],
  };

  updateSearch = (search) => {
    this.setState({ search });
    let filteredData = this.state.data.filter(function (item) {
      return item.name.includes(search);
    });
    this.setState({ filteredData: filteredData });
    this.props.setCurrentPageUrl(
      `https://rickandmortyapi.com/api/character?name=${search}`
    );
    this.props.setCharacters(filteredData);
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
        containerStyle={{ backgroundColor: "white" }}
        inputContainerStyle={{ backgroundColor: "white" }}
      />
    );
  }
}
