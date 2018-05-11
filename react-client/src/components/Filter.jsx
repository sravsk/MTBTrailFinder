import React from 'react';
import FilterItem from './FilterItem.jsx';

class Filter extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.trails.map(trail => (
            <FilterItem key={trail.id} trail={trail} />
            ))
        }
      </div>
      );
  }
}

Filter.propTypes = {
  trails : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

Filter.defaultProps = {
  trails : []
};


export default Filter;