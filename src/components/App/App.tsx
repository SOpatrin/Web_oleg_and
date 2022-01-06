import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Message from "../Message/Message";
import {randomInt} from "../../utils";
import Container from "../Container/Container";

function App() {
    const [data, setData] = useState([]);
    const [currentMessage, setCurrentMessage] = useState({});

    useEffect(() => {
        fetch('/oleg.json')
            .then((response) => response.json())
            .then(setData);
    },[]);

    useEffect(() => {
        setCurrentMessage(data[randomInt(data.length)]);
    }, [data]);

    return (
        <div className={styles.app}>
            <h1 className={styles.heading}>Олег и ...</h1>
            <Container className={styles.message}>
                <Message
                    data={currentMessage}
                    onReload={() => {
                        setCurrentMessage(data[randomInt(data.length)]);
                    }}
                />
            </Container>
        </div>
    );
}

export default App;
