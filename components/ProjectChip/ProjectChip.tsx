import React from 'react'

interface ProjectChipProps {
  classname: string
  chipName: string
}

const ProjectChip = ({classname, chipName}:ProjectChipProps) => {
  return (
    <div className={`${classname} absolute bg-neutral-500 rounded-full px-3 py-2 text-white text-xs md:text-sm `}>{chipName}</div>
  )
}

export default ProjectChip