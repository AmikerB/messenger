import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const Message = () => {

    const [savedMessages, setSavedMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const coll = collection(db, 'messages');
        addDoc(coll, { text: newMessage })
    }

    useEffect(() => {
        const coll = collection(db, 'messages');
        const unsubscribe = onSnapshot(coll, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            })
            setSavedMessages(messages)
        })
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea value={newMessage} onChange={(event) => {
                    setNewMessage(event.target.value)
                }}></textarea>
                <button>Submit</button>
            </form>
            <ul>
                {savedMessages.map((message) => {
                    return <li key={message.id}>{message.text}</li>
                })}
            </ul>
        </div>
    )
}

export default Message;




// COUNTER

  // const [countId, setCounterId] = useState(null);
  
    // const handleClick = () => {
    //   if (!countId) {
    //     const coll = collection(db, 'example');
    //     addDoc(coll, { count: 1 }).then((docRef) => {
    //       setCounterId(docRef.id)
    //     })
    //   } else {
    //     const counterDoc = doc(db, 'example', countId);
    //     getDoc(counterDoc).then((docRef) => {
    //       const { count } = docRef.data()
    //       updateDoc(counterDoc, { count: count + 1 })
    //     })

    //   }
    // }