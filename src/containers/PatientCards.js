import { Patient } from "../components/Patient";

export const PatientCards = ({ patients }) => {
  return (
    <div className='flex flex-row gap-8 flex-wrap'>
      {/* the ".map" function basically goes through
      each element in the array. it's like the
      python for loop. the "patient" variable holds
      the information for one patient.*/}
      {patients.map((patient, i) => {
        return (
          // I passed in the information of the patient
          // to the Patient component, which can be found in
          // src>components>Patient.js
          <Patient
            name={patient.name}
            age={patient.age}
            status={patient.status}
            key={i}
          />
        );
      })}
    </div>
  );
};
