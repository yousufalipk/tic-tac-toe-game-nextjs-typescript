import { NextPage } from 'next';
import Board from '../components/Board/page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center items-center m-20'> 
        <ToastContainer />
        <Board />
      </div>
    </>
  );
};

export default Home;
