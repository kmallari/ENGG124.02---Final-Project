import { Sidebar } from "./components/Sidebar";
import { PatientCards } from "./containers/PatientCards";
import { Patient } from "./components/Patient";
import "./App.css";

function App() {
  // sample patient info for the mockup
  const patients = [
    {
      name: "Kevin",
      age: 22,
      status: "Stable",
    },
    {
      name: "Nathan",
      age: 20,
      status: "Stable",
    },
    {
      name: "Neil",
      age: 23,
      status: "Fell Sideways",
    },
  ];

  return (
    <div className='flex flex-row m-0'>
      <Sidebar />
      <div className='m-16'>
        {/* I passed in the "patients" variable in the patient
         cards container component. Check src>container for the component*/}
        <PatientCards patients={patients} />
      </div>
    </div>
  );
}

export default App;
