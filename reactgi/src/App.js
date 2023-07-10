import logo from "./logo.svg";
import "./App.css";
import React from "react";

//Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>John Doe</h1>
        <p>Phone: 123-456-7890</p>
        <p>Date of Birth: January 1, 1990</p>
      </div>
    );
  }
}
// Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  render() {
    return <div>{/* Content goes here */}</div>;
  }
}
//Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)
class BasicInfo extends React.Component {
  render() {
    const { name, number, dateOfBirth } = this.props.person;
    return (
      <div>
        <h1>{name}</h1>
        <p>Phone: {number}</p>
        <p>Date of Birth: {dateOfBirth}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "John Doe",
        number: "123-456-7890",
        dateOfBirth: "January 1, 1990",
      },
    };
  }

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}
// Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

class BasicInfo extends React.Component {
  render() {
    const { name, dateOfBirth } = this.props.person;
    return (
      <div>
        <h1>{name}</h1>

        <p>Date of Birth: {dateOfBirth}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Nicholas",
          dateOfBirth: "11/14/1999",
        },
        {
          name: "Jordan",
          dateOfBirth: "01/18/2002",
        },
        {
          name: "Eric",
          dateOfBirth: "09/22/1998",
        },
        {
          name: "Brianna",
          dateOfBirth: "02/07/1995",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((person, index) => (
          <div key={index}>
            <BasicInfo person={person} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
