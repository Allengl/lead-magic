import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/api'
import Link from 'next/link'
import React from 'react'

const LandingPageNavbar = async () => {
  const user: User | null = await currentUser()

  console.log('user', user);

  return (
    <nav className="flex w-screen items-center justify-between p-6">
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-sky-500 no-underline"
        >
          LeadTrans
        </Link>
      </div>
      <div className='text-sky-500 font-semibold text-lg'>
        {user ? (
          <div className='flex flext-row gap-x-4 items-center'>
            <Link href={`/lead-mantra`}>
              <Button variant='outline'>Open App</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )

        }

      </div>
    </nav>
  )
}

export default LandingPageNavbar
