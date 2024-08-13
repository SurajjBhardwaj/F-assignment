import { loginIsRequiredServer } from '@/lib/Auth'
import Image from 'next/image';
import React from 'react'


const page = async() => {

  const session = await loginIsRequiredServer();
  console.log(session);


  return (
    <div>
      hey  {session.user.email} 

      <Image

        src={session?.user?.image}
        width={100}
        height={100}
      />
    </div>
  )
}

export default page
