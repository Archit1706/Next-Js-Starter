'use client';
import CampaignCard from 'components/CampaignCard'
import CouponCard from 'components/CouponCard';
import React from 'react'

type Props = {}

const Camapins = (props: Props) => {
  return (
    <div className='p-2 space-y-5' >
       <CampaignCard />
    </div>
  )
}

export default Camapins