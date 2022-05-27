import { Sidebar } from "./components/Sidebar";
import { PatientCards } from "./containers/PatientCards";
import ReactLoading from "react-loading";
import "./App.css";
import firebase from "./firebase";
import React, { useEffect, useState } from "react";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("patients");

  const getPatients = () => {
    setLoading(true);
    ref.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPatients(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className='flex flex-row m-0 font-jakarta'>
      <Sidebar />
      <div className='m-16'>
        {loading ? (
          <ReactLoading type='spinningBubbles' color='#334155' />
        ) : (
          <PatientCards patients={patients} />
        )}
      </div>
    </div>
  );
};

export default App;
