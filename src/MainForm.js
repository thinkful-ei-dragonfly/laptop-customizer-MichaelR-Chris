import React from 'react';

import Option from './Option';

class MainForm extends React.Component {
  renderOptions(arr) {
    return arr.map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <Option key={index} objKey={key} item={item} featureClass={featureClass} updateFeature={this.props.updateFeature}/>
      });

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
    }); 
  }

  render() {
    const features = this.renderOptions(Object.keys(this.props.features));

      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          { features }
        </section>
      )
    }
}

export default MainForm;