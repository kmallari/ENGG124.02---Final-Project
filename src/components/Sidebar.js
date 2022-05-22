export const Sidebar = () => {
  return (
    <div className='bg-slate-700 w-64 h-screen p-8 font-sans text-white flex flex-col gap-8'>
      <h1 className='font-bold'>Hospital System</h1>
      <hr className='w-3/4' />
      <ul className='flex flex-col gap-6'>
        <li className='font-bold'>Dashboard</li>
        <li className='text-slate-400 hover:text-slate-100 transition-all cursor-pointer'>
          Doctors
        </li>
        <li className='text-slate-400 hover:text-slate-100 transition-all cursor-pointer'>
          Patients
        </li>
        <li className='text-slate-400 hover:text-slate-100 transition-all cursor-pointer'>
          Pharmacy
        </li>
        <li className='text-slate-400 hover:text-slate-100 transition-all cursor-pointer'>
          Available Rooms
        </li>
        <li className='text-slate-400 hover:text-slate-100 transition-all cursor-pointer'>
          Statistics
        </li>
      </ul>
    </div>
  );
};
