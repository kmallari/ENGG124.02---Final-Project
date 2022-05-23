export const Patient = ({ name, age, status }) => {
  // I output the information of the patient
  return (
    <div
      className={`w-56 bg-white rounded-lg p-6 shadow-xl ${
        status === "Stable"
          ? "shadow-green-200"
          : status === "Stand Up"
          ? "shadow-yellow-200"
          : "shadow-red-300"
      } transition-all hover:-translate-y-1`}
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
            status === "Stable"
              ? "text-green-600"
              : status === "Stand Up"
              ? "text-orange-400"
              : "text-red-600"
          } font-bold`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
