import React from 'react'

type Props = {}

// width: 10%;
//   border-style: dotted none none none;
//   color: grey;
//   border-width: 8px;
//   margin: 100px auto;

const Divider = (props: Props) => {
  return (
    <div className='w-[10%] border-b-[15px] border-dotted text-light mx-auto' />
  )
}

export default Divider