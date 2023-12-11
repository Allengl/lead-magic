import DashboardNavbar from '@/components/DashboardNavBar'
import React from 'react'

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}
) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <DashboardNavbar />
    </div>
  )
}

export default DashboardLayout
