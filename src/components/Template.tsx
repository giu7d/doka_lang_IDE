import React from 'react'

interface ITemplateProps {
  children: React.ReactElement[]
}

export const Template: React.FC<ITemplateProps> = ({ children = [] }) => {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen">
      <div className="w-full h-1/4 md:w-1/3 md:h-full lg:w-1/4 ">
        {children[0]}
      </div>
      <div className="w-full h-3/4 md:w-2/3 md:h-full lg:flex lg:flex-row lg:w-3/4">
        <div className="h-2/3 lg:h-full lg:w-2/3">{children[1]}</div>
        <div className="h-1/3 lg:h-full lg:w-1/3">{children[2]}</div>
      </div>
    </main>
  )
}
