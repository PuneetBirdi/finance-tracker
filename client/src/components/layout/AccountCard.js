import React from 'react'
import PropTypes from 'prop-types'
import SmallChart from '../charts/SmallChart';
import { formatMoney } from 'accounting';

const AccountCard = ({name, balance, snapshots, id, history}) => {

   const redirect = (id) =>{
      history.push(`/accounts/${id}`)
   }

   return (
      <div className='block relative cursor-pointer w-1/5 h-32 m-4 bg-white text-black shadow-xl rounded-md' onClick={e =>  redirect(id)}>
         <SmallChart color={'purple'} snapshots={snapshots}/>
         <div className='absolute w-full h-full bottom-0 left-0 p-3'>
            <p className='font-semibold text-xs'>{name.toUpperCase()}</p>
            <p className='font-black text-3xl'>{formatMoney(balance)}</p>
         </div>
      </div>
   )
}

AccountCard.propTypes = {
 name: PropTypes.string.isRequired,
 balance: PropTypes.number.isRequired,
 snapshots: PropTypes.array.isRequired,
 type: PropTypes.string.isRequired,
}; 


export default AccountCard
