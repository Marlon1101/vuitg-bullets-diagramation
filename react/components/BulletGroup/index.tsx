import React, { PropsWithChildren } from 'react';
import { useListContext } from "vtex.list-context"
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList';


export interface BulletsGroupProps{
  bullets: BulletsSchema
}
const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletsGroupProps>) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []

  console.log(bullets, list)

  const bulletsContent = getBulletsAsTSXList(bullets)

  if(false){
    children
  }
  return(
    isMobile
    ?
      <div>Mobile</div>
    :
      <div>{bulletsContent}</div>
  )
}

export default BulletGroup
