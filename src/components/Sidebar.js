import { BsGithub } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <div className='bg-slate-700 w-64 h-screen p-8 text-white flex flex-col justify-between'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-bold text-xl'>Hospital System</h1>
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
      <div className='text-slate-200 transition-all hover:text-white flex flex-col gap-8'>
        Made with 💙 by Neil Limbaga, Kevin Mallari, and Nathan Yeung
        <hr className='w-3/4' />
        <a
          className='text-blue-400 hover:text-blue-200 transition-all underline underline-offset-4 flex flex-row items-center gap-2'
          href='https://github.com/kmallari/ENGG124.02---Final-Project/blob/main/package.json'
        >
          <span className='text-slate-200'>
            <BsGithub />
          </span>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
