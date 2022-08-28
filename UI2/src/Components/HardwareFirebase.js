import React from "react";
import StartFirebase from "./firebase";
import { onValue, ref } from "firebase/database";
import ProductTracking from "./ProductTracking";

const db = StartFirebase();

class HardwareFirebase extends React.Component {
  constructor() {
    super();
    this.state = {
      // Temperature: '',
      // Humidity: '',
      // Alcohol: '',
      json: [],
    };
  }

  componentDidMount() {
    // const dbReftemp = ref(db, "Temperature");
    // const dbRefhumidity = ref(db, "Humidity");
    // const dbRefalcohol = ref(db, "Alcohol");
    const dbRefjson = ref(db, "json");

    // onValue(dbReftemp, (snapshot) => {
    //   let records = '';
    //   snapshot.forEach((childSnapshot) => {
    //     let data = childSnapshot.val();
    //     records = data;
    //   });
    //   this.setState({ Temperature: records });
    //   console.log(this.state.Temperature)
    // });
    // onValue(dbRefhumidity, (snapshot) => {
    //     let records = '';
    //     snapshot.forEach((childSnapshot) => {
    //       let data = childSnapshot.val();
    //       records = data;
    //     });
    //     this.setState({ Humidity: records });
    //   });
    // onValue(dbRefalcohol, (snapshot) => {
    //   let records = '';
    //   snapshot.forEach((childSnapshot) => {
    //     let data = childSnapshot.val();
    //     records = data;
    //   });
    //   let data = snapshot.val();
    //   records = data;
    //   this.setState({ Alcohol: records });
    // });

    onValue(dbRefjson, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let data = childSnapshot.val();
        records.push( data);
      });
      this.setState({ json: records});
      console.log(this.state.json);
    });
  }

  render() {
    return (
      <ProductTracking
        /* Temperature={this.state.Temperature} Humidity={this.state.Humidity}  Alcohol={this.state.Alcohol} */ Temperature={
          this.state.json
        }
      />
    );
  }
}

export default HardwareFirebase;
