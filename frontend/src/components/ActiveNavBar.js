import React, { Component } from 'react';
import PropTypes from 'prop-types';



function SelectedTab (props) {
  var tabs = ["Home", "Companies", "Jobs",  "Sign In"];
  return (
    <ul className='tabs'>
      {tabs.map(function (list) {
        return (
        <li
          style={ list === props.selectedTab ? { color: '#d0021b'}: null}
          onClick={props.onSelect.bind(null, list)}
          key={list}>
          {list}
          </li>
        )
      })}
      </ul>
    )
}

SelectedTab.propTypes = {
  selectedTabs: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class ActiveNavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };

    this.updateTab = this.updateTab.bind(this);
  }

  componentDidMount () {
  // AJAX request in here
  this.updateTab(this.state.selectedTab);
  }

  updateTab(list) {
    this.setState(function () {
      return {

        selectedLanguage: list,
      }
    });

  }
  render() {


    return (
      <div>
       <SelectedTab
        selectedLanguage={this.state.selectedTab}
        onSelect={this.updateTab}
        />
      </div>
    )
  }
}

export default ActiveNavBar;
