import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

  componentWillMount() {
    let quandlApiKey = "ZRSDJExtCK25PExCpxsy";

    let copperJson = [];
    let zincJson = [];

    let copperUrl = "LME/PR_CO";
    let zincUrl = "LME/PR_ZI";

    let quandlUrl = "https://www.quandl.com/api/v3/datasets"
    let apiUrl = ("?api_key=" + quandlApiKey);
    let dataUrl = "data.json";

    let copUrl = (quandlUrl + "/" + copperUrl + "/" + dataUrl + apiUrl);
    console.log(copUrl);

    let ziUrl = (quandlUrl + "/" + zincUrl + "/" + dataUrl + apiUrl);
    console.log(ziUrl);

    fetch(copUrl).then(function(response) {
        return response.json();
    }).then(function(blob){
      console.log(blob);
    });

    fetch(ziUrl).then(function(response) {
        return response.json();
    }).then(function(blob){
      console.log(blob);
    });
  }

  render() {

    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
