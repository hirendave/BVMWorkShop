import React, {Component} from 'react';

export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
          super(props);

          this.state = {
            count: data,
          };
        }

        handleClick = () => {
          this.setState({
            count: this.state.count + 1,
          });
        };

        render() {
          return (
            <HocComponent
              CountNumber={this.state.count}
              handleCLick={this.handleClick}
            />
          );
        }
    } 
}
