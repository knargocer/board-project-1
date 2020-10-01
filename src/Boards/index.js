import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import Board from "./Board/index.js";

const Boards = () => {
    const[boardData, setBoardData] = useState([]);


    const fetchData = async ()=>{
        const boardRes = await db.collection('TravelDestination').get()
        const boardData = boardRes.docs.map(user => user.data())
    setBoardData(boardData)
    console.log(boardData)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        boardData.map(data => <Board {...data}/>)
    )

}

export default Boards