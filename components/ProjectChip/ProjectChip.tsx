import React from 'react'

interface ProjectChipProps {
  classname: string
  chipName: string
}

const ProjectChip = ({classname, chipName}:ProjectChipProps) => {
  return (
    <div className={`${classname} absolute bg-neutral-500 rounded-full px-2 py-1 text-white text-xs `}>{chipName}</div>
  )
}

export default ProjectChip