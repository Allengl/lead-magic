import { prismadb } from '@/lib/prismadb'
import { auth } from '@clerk/nextjs';
import React from 'react'

const getLeadMagic = async (userId: string) => {
  try {
    const leadMagic = await prismadb.leadMagic.findMany({
      where: {
        userId
      }
    })
    return leadMagic
  } catch (error) {
    console.log(error);
    return []
  }
}

const getLeads = async (userId: string) => {
  try {
    const leads = await prismadb.lead.findMany({
      where: {
        userId
      }
    })
    return leads
  } catch (error) {
    console.log(error);
    return []
  }
}

const LeadMagicPage = async () => {
  const { userId } = auth();

  if (!userId) return <div>No user found...</div>

  const leads = await getLeads(userId)
  const leadMagic = await getLeadMagic(userId)

  console.log('leads', leads);
  console.log('leadMagic', leadMagic);
  return (
    <div>LeadMagicPage</div>
  )
}

export default LeadMagicPage
