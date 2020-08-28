import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'

export default function Intro(): ReactElement {
  const socialLinks: { icon: IconProp; link: string; bgClass: string }[] = [
    {
      icon: ['fab', 'twitter'],
      link: 'https://twitter.com/VuongDDang',
      bgClass: 'bg-gray-700',
    },
    {
      icon: ['fab', 'github'],
      link: 'https://github.com/vuongddang',
      bgClass: 'bg-gray-700',
    },
    {
      icon: ['fab', 'linkedin'],
      link: 'https://www.linkedin.com/in/vuong-dang-b223b8b',
      bgClass: 'bg-gray-700',
    },
    {
      icon: ['fab', 'dev'],
      link: 'https://dev.to/vuongddang',
      bgClass: 'bg-gray-700',
    },
  ]
  return (
    <>
      <div className="mt-8 text-3xl font-medium text-white tracking-tighter sm:text-5xl sm:leading-none">
        Vuong Dang
      </div>
      <div className="mt-10 text-xl text-gray-400 sm:text-3xl">
        A pragmatic Full Stack Developer experienced in building Web applications with Spring Boot / ReactJS / AngularJS
        / AWS and other cool technologies and frameworks.
      </div>
      <div className="mt-6 flex items-center space-x-2">
        {socialLinks.map((socialLink, i) => (
          <a
            href={socialLink.link}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 hover:bg-gray-900 rounded-full shadow-xs outline-none focus:outline-none ${socialLink.bgClass}`}
            type="button"
          >
            <FontAwesomeIcon icon={socialLink.icon} className="text-xl sm:text-2xl text-white" />
          </a>
        ))}
      </div>
    </>
  )
}
