import React from "react";

interface IProps {
  age: number;
  name: string;
}

export class test extends React.Component {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    //   this.state.count++;
  };

  render() {
    return (
      <div>
        test
        {/* <button onClick={handleClick()}>{this.state.count}</button> */}
      </div>
    );
  }
}

