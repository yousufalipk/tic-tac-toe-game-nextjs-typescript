import React from 'react';

interface BlockProp {
    value? : string,
    onClick?: () => void
}

const Block: React.FC<BlockProp> = (props) => {
    return (
        <div onClick={props.onClick} className='w-20 h-20 flex justify-center items-center border-2 border-[black] mx-1 rounded-md text-2xl font-bold bg-gray-200 hover:cursor-pointer'>
            {props.value}
        </div>
    )
}

export default Block;
