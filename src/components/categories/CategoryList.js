import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as homeActions from "../../redux/actions/homeActions";
import Filter from "./Filter";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getHomes(category.id);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Categories</Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              key={category.id}
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Filter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getHomes: bindActionCreators(homeActions.getHomes, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
