import React from 'react'

interface ProjectChipProps {
  classname: string
  chipName: string
}

const ProjectChip = ({classname, chipName}:ProjectChipProps) => {
  return (
    <div className={`${classname} absolute`}>{chipName}</div>
  )
}

export default ProjectChip