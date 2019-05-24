import React from 'react';
import SummaryItem from './SummaryItem.js';



class Summary extends React.Component {

    renderSummary(arr) {
    return (
        arr.map(key => <SummaryItem key={key} optionKey={key} name={this.props.selected[key].name} cost={this.props.selected[key].cost}/>
    )
    )
    }
    render() {
        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    
        const summary = Object.keys(this.props.selected);
        const renderedSum = this.renderSummary(summary);
        console.log(summary);
        return (
            <div>
            {renderedSum}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
            </div>
            
        )
    }
}
    


export default Summary;