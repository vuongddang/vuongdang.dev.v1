import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import heroSvg from '../../public/images/technologies/undraw_developer_activity_bv83.svg'
// import heroSvg from '../../public/images/technologies/undraw_fatherhood_7i19.svg'
export default function Intro(): ReactElement {
  const socialLinks: { icon: IconProp; link: string; bgClass?: string; hoverClass?: string; label?: string }[] = [
    {
      icon: ['fab', 'twitter'],
      link: 'https://twitter.com/VuongDDang',
      label: 'Twitter',
    },
    {
      icon: ['fab', 'github'],
      link: 'https://github.com/vuongddang',
      label: 'Github',
    },
    {
      icon: ['fab', 'linkedin'],
      link: 'https://www.linkedin.com/in/vuong-dang',
      label: 'Linkedin',
    },
    {
      icon: ['fab', 'dev'],
      link: 'https://dev.to/vuongddang',
      label: 'Dev Community',
    },
  ]
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
        <div className="lg:-mr-10">
          <div className="mt-10 text-3xl font-medium tracking-tight text-white lg:mt-20 sm:text-6xl sm:leading-none">
            <div>
              Hi, I&apos;m <span className="text-green-500">Vuong Dang</span>.
            </div>
          </div>
          <div className="mt-8 text-xl font-medium text-gray-400 sm:text-2xl sm:leading-10">
            <p>
              I'm a full-stack web developer who has built software products from the ground up. I'm motivated by new
              technologies, product success, and business growth.
            </p>
            <p className="mt-8">
              Even though my expertise is in building scalable backend services and data-intensive applications with
              Spring Boot and AWS, I've been leaning toward front end development (React) and Serverless Architecture in
              the recent year.
            </p>
          </div>

          <div className="flex items-center mt-10 space-x-2">
            {socialLinks.map((socialLink, i) => (
              <a
                href={socialLink.link}
                target="_blank"
                rel="noreferrer"
                aria-label={socialLink.label}
                key={i}
                className={`flex group items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:${
                  socialLink.hoverClass ?? 'bg-gray-700'
                } focus:${
                  socialLink.hoverClass ?? 'bg-gray-900'
                }  rounded-full shadow-xs outline-none focus:outline-none focus:ring focus:ring-opacity-70 focus:ring-green-600 ${
                  socialLink.bgClass ?? 'bg-gray-800'
                }`}
                type="button"
              >
                <FontAwesomeIcon icon={socialLink.icon} className="h-5 sm:h-6 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <img src={heroSvg} alt="Software Engineer" className="opacity-90" />
        </div>
      </div>
    </>
  )
}
