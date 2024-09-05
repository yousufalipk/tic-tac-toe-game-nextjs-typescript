import Board from './components/Board/page';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className='flex justify-center items-center m-20'> 
    <ToastContainer />
      <Board />
    </div>
  );
}
