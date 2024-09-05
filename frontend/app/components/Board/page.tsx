"use client";

import React, {useState} from 'react';
import Block from '../Block/page';
import { toast } from 'react-toastify';

const Board: React.FC = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState<string>('X');
    const [winner, setWinner] = useState<boolean>(false);
    
    const checkWinner = () => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i = 0; i<win.length; i++){
            const [a,b,c] = win[i];
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c] ){
                return true
            }
        }
        return false;
    }

    const handleBlockClick = (index: number) => {
        if(state[index]){
            toast.error("Already Marked!")
        }
        else{
            state[index] = player;
            const win = checkWinner();
            if(win){
                setWinner(true);
                return
            }
            setPlayer(player === 'X' ? 'O' : 'X')
        }
    }

    const handleReset = () => {
        setWinner(false);
        setPlayer('X');
        setState(Array(9).fill(null));
    }  

    if(winner){
        return (
            <>
                <div className='winner-banner flex flex-col justify-center items-center'> 
                    <div className='italic font-semibold text-5xl text-green-600 flex justify-center items-center mt-40'>
                        <h1>
                            Player {player} Wins!
                        </h1>
                    </div>

                    <button
                        onClick={handleReset}
                        className='p-3 mt-10 w-1/2 rounded-lg bg-gray-200 text-center hover:bg-white hover:text-black hover:border-2 border-[black]'
                    >
                        Restart
                    </button> 
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                <div className='flex justify-center my-8 italic font-semibold'>
                    {player === 'X' ? ( 
                        <h1 className='text-center'>Player <span className='text-green-600'>X</span> Turn</h1>
                    ) : (
                        <h1 className='text-center'>Player <span className='text-green-600'>O</span> Turn</h1>
                    )}
                </div>
                <div className='board-container flex-col border-2 border-[black] rounded-md p-2 bg-gray-300'>
                    <div className='row flex my-2'>
                        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
                        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
                        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
                    </div>
                    <div className='row flex my-2'>
                        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
                        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
                        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
                    </div>
                    <div className='row flex my-2'>
                        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
                        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
                        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board;
