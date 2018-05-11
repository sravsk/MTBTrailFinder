import React from 'react';
import Trail from './Trail.jsx';

class TrailList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.trails.map(trail => (
            <Trail key={trail.id} trail={trail} />
            ))
        }
      </div>
      );
  }
}

TrailList.propTypes = {
  trails : React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

TrailList.defaultProps = {
  trails : []
};

export default TrailList;