import React from "react";
import db from "../firebaseConfig.js";
import {Card} from "react-bootstrap";
import "../index.css";
import firebase from '@firebase/app';

// // /// single card
const Item = ({ itemInfo, boardId }) => {

   console.log(itemInfo)

   const handleClick = async (e) => {
    await db.collection("Board").doc(boardId).update({
           items: firebase.firestore.FieldValue.arrayRemove(itemInfo)
         })
         window.location.reload(true);
  };


  return (
    <Card className="inner-card">
      <Card.Header as="h6">Name: {itemInfo.itemTitle}</Card.Header>
      <Card.Body>
        <Card.Text>Date: {itemInfo.date}</Card.Text>
        <Card.Text>{itemInfo.people}</Card.Text>
      </Card.Body>
      <button onClick={(e) => handleClick(e)}> Delete </button>
    </Card>
  );
};



export default Item;
