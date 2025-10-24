import { Suspense, useState } from 'react';
import './App.css'
import CustomerTickets from './components/CustomerTickets';
import Navbar from './components/Navbar'
import PRcard from './components/PRcard';
import ResolvedTasks from './components/ResolvedTasks';
import TaskStatus from './components/TaskStatus';
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer';

const fetchTickets= async()=>{
  const res= await fetch("/TicketsData.json")
  return res.json()
  
}
const ticketsPromise =fetchTickets();

function App() {
  const [pCardNo,setPCardNo]=useState(0);
  const [rCardNo,setRCardNo]=useState(0);
  const [inProgress,setInProgress] =useState([])
  const [isResolved,setIsResolved] =useState([])
  
  return (
    <>
      <Navbar></Navbar>
      <PRcard pCardNo={pCardNo} rCardNo={rCardNo} ></PRcard>
      <div className='flex flex-col lg:flex-row justify-between pr-4 lg:pr-11 mt-10 gap-8'>

      <Suspense className='text-blue-900 text-2xl' fallback="Data Loading..."><div className='flex items-center text-gray-700 mx-11'>
        <CustomerTickets ticketsPromise={ticketsPromise} setPCardNo={setPCardNo} pCardNo={pCardNo} rCardNo={rCardNo} setRCardNo={setRCardNo} inProgress={inProgress} setInProgress={setInProgress} isResolved={isResolved} setIsResolved={setIsResolved}></CustomerTickets>
      </div></Suspense>
      <div className='w-70'>
      <Suspense>
        <TaskStatus inProgress={inProgress} setInProgress={setInProgress} isResolved={isResolved}setIsResolved={setIsResolved} pCardNo={pCardNo} setPCardNo={setPCardNo} rCardNo={rCardNo} setRCardNo={setRCardNo}></TaskStatus>
      </Suspense>
      <Suspense>
        <ResolvedTasks isResolved={isResolved}></ResolvedTasks>
      </Suspense>
      </div></div>
      <Footer></Footer>

      <ToastContainer/>

    </>
  )
}

export default App
