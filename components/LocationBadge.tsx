import React from 'react'
import { Badge } from "@/components/ui/badge"

interface LocationData {
  city: string;
  state?: string;
  country: string;
  countryCode: string;
  continent: string;
  emoji: string;
  color: string;
}

const continentColors = {
  'North America': 'bg-blue-50 text-blue-700 border-blue-200',
  'South America': 'bg-green-50 text-green-700 border-green-200',
  'Europe': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Africa': 'bg-orange-50 text-orange-700 border-orange-200',
  'Asia': 'bg-red-50 text-red-700 border-red-200',
  'Oceania': 'bg-purple-50 text-purple-700 border-purple-200',
  'Antarctica': 'bg-cyan-50 text-cyan-700 border-cyan-200',
}

const getLocationData = (location: string): LocationData => {
  const [city, stateOrCountry, possibleCountry] = location.split(', ')
  let state, country, countryCode, continent, emoji

  if (possibleCountry) {
    state = stateOrCountry
    country = possibleCountry
  } else {
    country = stateOrCountry
  }

  switch (country) {
    case 'USA':
    case 'US':
      countryCode = 'US'
      country = 'United States'
      continent = 'North America'
      emoji = '🇺🇸'
      break
    case 'UK':
      countryCode = 'GB'
      country = 'United Kingdom'
      continent = 'Europe'
      emoji = '🇬🇧'
      break
    case 'Canada':
      countryCode = 'CA'
      continent = 'North America'
      emoji = '🇨🇦'
      break
    case 'Australia':
      countryCode = 'AU'
      continent = 'Oceania'
      emoji = '🇦🇺'
      break
    case 'Germany':
      countryCode = 'DE'
      continent = 'Europe'
      emoji = '🇩🇪'
      break
    case 'Japan':
      countryCode = 'JP'
      continent = 'Asia'
      emoji = '🇯🇵'
      break
    default:
      countryCode = 'UNKNOWN'
      continent = 'Unknown'
      emoji = '🌎'
  }

  return {
    city,
    state,
    country,
    countryCode,
    continent,
    emoji,
    color: continentColors[continent as keyof typeof continentColors] || 'bg-gray-50 text-gray-700 border-gray-200'
  }
}

interface LocationBadgeProps {
  location: string;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({ location }) => {
  const locationData = getLocationData(location)

  return (
    <Badge 
      variant="outline" 
      className={`inline-flex items-center px-3 py-1 text-xs font-medium ${locationData.color} border transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 rounded-[12px] select-none cursor-default`}
    >
      <span className="mr-1" role="img" aria-label={`Flag of ${locationData.country}`}>
        {locationData.emoji}
      </span>
      {locationData.city}
      {locationData.state && `, ${locationData.state}`}
      {`, ${locationData.country}`}
    </Badge>
  )
}

export default LocationBadge