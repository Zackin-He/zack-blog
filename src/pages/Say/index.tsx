import React from 'react'
import MainContainer from '@/layouts/MainContainer';
import SayItem from "./SayItem/index"

const Say:React.FC = () => {
  return (
    <MainContainer title="自言自语">
      <SayItem />
      <SayItem />
      <SayItem />
      <SayItem />
    </MainContainer>
  )
}

export default Say;
