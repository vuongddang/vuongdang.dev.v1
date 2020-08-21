import { ReactElement } from 'react'
import mongoDbSvg from '../../public/images/technologies/mongodb.svg'
import postgresSqlSvg from '../../public/images/technologies/postgresql.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function Technologies(): ReactElement {
  const technologies: { icon?: IconProp; name: string; imagePath?: string }[] = [
    {
      icon: ['fab', 'java'],
      name: 'Java',
    },
    {
      icon: ['fab', 'react'],
      name: 'React',
    },
    {
      icon: ['fab', 'angular'],
      name: 'AngularJS',
    },
    {
      imagePath: mongoDbSvg,
      name: 'MongoDB',
    },
    {
      imagePath: postgresSqlSvg,
      name: 'PostgreSQL',
    },
    {
      icon: ['fab', 'docker'],
      name: 'Docker',
    },
    {
      icon: ['fab', 'aws'],
      name: 'aws',
    },
  ]

  return (
    <div>
      <div className="mt-12 text-3xl font-medium text-gray-800 sm:text-5xl sm:leading-none">Tech Stack</div>
      <ul className="grid gap-x-2 gap-y-6 md:gap-6 mt-10 grid-cols-3 md:grid-cols-6 justify-center">
        {technologies.map((tech, i) => (
          <li key={i} className="flex flex-col items-center">
            {tech.icon && <FontAwesomeIcon icon={tech.icon} className="text-5xl text-gray-500" />}
            {tech.imagePath && <img src={tech.imagePath} className="w-12 h-12 icon-gray text-gray-500" />}
            <p className="text-gray-500 text-base mt-2">{tech.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
