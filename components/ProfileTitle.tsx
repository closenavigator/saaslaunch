import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MarkerText } from '@/components/MarkerText'
import LocationBadge from '@/components/LocationBadge'
import VerifiedBadge from '@/components/VerifiedBadge'

interface ProfileTitleProps {
  name: string;
  currentRole: string;
  location: string;
  avatar: string;
  isVerified: boolean; // Add this line
}

const ProfileTitle: React.FC<ProfileTitleProps> = ({ name, currentRole, location, avatar, isVerified }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <MarkerText>
          <h2 className="text-2xl font-bold">{name}</h2>
        </MarkerText>
        <p className="text-muted-foreground">{currentRole}</p>
        <div className="mt-1 text-sm flex flex-wrap items-center gap-2">
          <LocationBadge location={location} />
          {isVerified && <VerifiedBadge />}
        </div>
      </div>
    </div>
  )
}

export default ProfileTitle