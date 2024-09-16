import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LocationBadge from '@/components/LocationBadge'

interface ProfileTitleProps {
  name: string;
  currentRole: string;
  location: string;
  avatar: string;
}

const ProfileTitle: React.FC<ProfileTitleProps> = ({ name, currentRole, location, avatar }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-20 w-20">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h2 className="text-2xl font-bold leading-none tracking-tight">{name}</h2>
        <p className="text-sm text-muted-foreground">{currentRole}</p>
        <LocationBadge location={location} />
      </div>
    </div>
  )
}

export default ProfileTitle