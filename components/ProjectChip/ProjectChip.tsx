import React from 'react'

interface ProjectChipProps {
  chipName: string
}

const ProjectChip = ({chipName}:ProjectChipProps) => {
  return (
    <div>{chipName}</div>
  )
}

export default ProjectChip