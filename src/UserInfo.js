import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class ShowAge extends React.Component {
  render() {
    return <h1>your age is {this.props.age}</h1>;
  }
}

var person = [
  { name: "sarah", age: 25 },
  { name: "michael", age: 30 },
  { name: "john", age: 33 },
];

class UserInfo extends React.Component {
  render() {
    return (
      <>
        {person.map((el) => {
          return (
            <div style={{ border: "1px solid #000", padding: "20px" }}>
              <Welcome name={el.name} />
              <ShowAge age={el.age} />
            </div>
          );
        })}
      </>
    );
  }
}

export default UserInfo;
