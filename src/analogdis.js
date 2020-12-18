import React from 'react';

// export default ({ name }) => <h1>Hello {name}!</h1>;

const AnalogDisplay = function (props) {
  let date = new Date(props.time);
  let dialStyle = {
    position: 'relative',
    top: '20%',
    left: '30%',
    transformOrigin: '50%',
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'blue'
  };
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid yellow',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'white'
  };
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid white',
    width: '20%',
    height: 10,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'white'
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: hourHandStyle })
    )
  );
};

export default AnalogDisplay;
