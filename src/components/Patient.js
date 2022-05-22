export const Patient = ({ name, age, status }) => {
  // I output the information of the patient
  return (
    <div
      className={`w-56 bg-white rounded-lg p-6 shadow-xl ${
        status === "Stable" ? "shadow-green-200" : "shadow-red-300"
      } hover:scale-110 transition-all`}
    >
      <div>
        <span className='font-bold'>Name</span>: {name}
      </div>
      <div>
        <span className='font-bold'>Age</span>: {age}
      </div>
      <div>
        <span className='font-bold'>Status</span>:{" "}
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
