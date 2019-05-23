import React from 'react';


class ClassExample extends React.Component {

  getSimpleText() {
    return "hello";
  }

  render() {
    let simpleText = this.getSimpleText();

    return <div>{simpleText}</div>
  }

  componentDidUpdate() {

  }
}

class ClassExampleUnrelated {
  render() {
    return <div>hello</div>;
  }
}


export {ClassExample, ClassExampleUnrelated};

