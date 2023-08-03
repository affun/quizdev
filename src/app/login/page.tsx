import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
  return (
    <div>
      <a onClick={()=>{useRouter().push('/')}}>home</a>
    </div>
  )
}

export default page