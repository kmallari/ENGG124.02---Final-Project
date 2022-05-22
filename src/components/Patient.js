export const Patient = ({ name, age, status }) => {
  // I output the information of the patient
  return (
    <div className='w-56 bg-white rounded-lg p-8 shadow-lg'>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        Status:{" "}
        <span
          className={`${
            status === "Stable" ? "text-green-600" : "text-red-600"
          } font-bold`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
