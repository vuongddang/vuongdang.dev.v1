export default function Technologies() {
  const technologies = [
    {
      imagePath: '/images/technologies/react.svg',
      name: 'React',
    },
    {
      imagePath: '/images/technologies/nextjs.svg',
      name: 'Next.js',
    },
    {
      imagePath: '/images/technologies/angularjs.svg',
      name: 'AngularJS',
    },
    {
      imagePath: '/images/technologies/spring.svg',
      name: 'Spring Framework',
    },
    {
      imagePath: '/images/technologies/mongodb.svg',
      name: 'MongoDB',
    },
    {
      imagePath: '/images/technologies/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      imagePath: '/images/technologies/elastic.svg',
      name: 'Elastic Search',
    },
    {
      imagePath: '/images/technologies/docker.svg',
      name: 'Docker',
    },
    {
      imagePath: '/images/technologies/aws.svg',
      name: 'Amazon Web Services',
    },
  ];
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
  );
}
