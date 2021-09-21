import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff"
import * as GryffFunctions from "./houses/Gryffindor";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"
  GryffFunctions.gryffMascot();
  return (
    <>
    <h1>Welcome to Hogwarts!</h1>
    <h3></h3>
    <h3><Hufflepuff /></h3>
    <h3>{GryffFunctions.colors}</h3>
    </>
    )
}

export default Hogwarts;