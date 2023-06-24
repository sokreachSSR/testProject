import React, { useContext } from 'react'
import InfiniteScroll from '../../../othersComponent/InfiniteScroll'
import UserCard from './Card/UserCard'
import UserCardInterested from './Card/UserCardInterested'
import PropValueContext from '../../../../utils/context';
import { useState } from 'react';

export default function InterestedPeopleCompany() {
  const [dataHello, setDataHello] = useState([])
  return (
    <div>
      <div className={`bg-white font-MainFont  m-auto p-6 ${dataHello.length == 0 ? " flex justify-center items-center" : ""}`}>
        <div>
          <UserCardInterested prop={setDataHello} />
        </div>
      </div>
    </div>
  )
}