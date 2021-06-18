import { ReactElement } from 'react'
import mongoDbSvg from '../../public/images/technologies/mongodb.svg'
import postgresSqlSvg from '../../public/images/technologies/postgresql.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'

export default function Technologies(): ReactElement {
  const technologies: { icon?: IconProp; name: string; imagePath?: StaticImageData }[] = [
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
      <div className="mt-12 text-3xl font-medium tracking-tighter text-white sm:text-5xl sm:leading-none">Tech Stack</div>
      <ul className="grid justify-center grid-cols-3 mt-10 gap-x-2 gap-y-6 md:gap-6 md:grid-cols-6">
        {technologies.map((tech, i) => (
          <li key={i} className="flex flex-col items-center">
            {tech.icon && <FontAwesomeIcon icon={tech.icon} className="text-5xl text-gray-400" />}
            {tech.imagePath && <Image src={tech.imagePath} alt={tech.name} className="w-12 h-12 text-gray-500 icon-gray" />}
            <p className="mt-2 text-base text-gray-400">{tech.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
