import { ReactElement } from 'react'
import reactSvg from '../../public/images/technologies/react.svg'
import nextSvg from '../../public/images/technologies/nextjs.svg'
import angularJsSvg from '../../public/images/technologies/angularjs.svg'
import springSvg from '../../public/images/technologies/spring.svg'
import mongoDbSvg from '../../public/images/technologies/mongodb.svg'
import postgresSqlSvg from '../../public/images/technologies/postgresql.svg'
import elasticSearchSvg from '../../public/images/technologies/elastic.svg'
import dockerSvg from '../../public/images/technologies/docker.svg'
import awsSvg from '../../public/images/technologies/aws.svg'

export default function Technologies(): ReactElement {
  const technologies = [
    {
      imagePath: reactSvg,
      name: 'React',
    },
    {
      imagePath: nextSvg,
      name: 'Next.js',
    },
    {
      imagePath: angularJsSvg,
      name: 'AngularJS',
    },
    {
      imagePath: springSvg,
      name: 'Spring Framework',
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
      imagePath: elasticSearchSvg,
      name: 'Elastic Search',
    },
    {
      imagePath: dockerSvg,
      name: 'Docker',
    },
    {
      imagePath: awsSvg,
      name: 'Amazon Web Services',
    },
  ]

  return (
    <div>
      <div className="mt-8 text-2xl font-medium leading-10 tracking-tight text-gray-800 sm:text-2xl sm:leading-none">
        Technologies I Work With
      </div>
      <ul className="grid max-w-md col-gap-8 mt-10 row-gap-14 grid-columns">
        {technologies.map((technology, i) => (
          <li key={i}>
            <img src={technology.imagePath} className="h-14"></img>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .grid-columns {
          grid-template-columns: 1fr 1fr 3.5rem;
        }
      `}</style>
    </div>
  )
}
