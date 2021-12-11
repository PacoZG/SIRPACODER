import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Cypress } from '../../utils/assets/cypress.svg'
import { ReactComponent as Typescript } from '../../utils/assets/typescript.svg'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <div className="p-8 md:p-16 bg-gray-300 dark:bg-gray-900 transition duration-500">
      <div className="flex flex-col justify-center lg:space-x-28 border-double border-b-8 border-gray-400 pb-12">
        <div className="hidden lg:flex flex-col space-y-9">
          <div className="flex items-center justify-center space-x-28">
            <div className="flex flex-col items-center ">
              <img
                className="skill-logo bg-yellow-200 p-2 "
                src="https://img.icons8.com/nolan/96/javascript.png"
                alt="JS"
              />
              <p className="text-black dark:text-yellow-500 transition duration-500">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-600 p-2  "
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />
              <p className="text-black dark:text-blue-300 transition duration-500">React</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-3 "
                src="https://img.icons8.com/color/96/000000/redux.png"
                alt="React"
              />
              <p className="text-black dark:text-purple-800 transition duration-500">Redux</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-2 "
                src="https://img.icons8.com/nolan/96/react-native.png"
                alt="React"
              />
              <p className="text-black dark:text-pink-800 transition duration-500">React-Native</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-24">
            <div className="flex flex-col items-center ">
              <Typescript className=" skill-logo w-20 rounded-none  " />
              <p className="text-black dark:text-yellow-500 transition duration-500">Typescript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-300 p-2 "
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="React"
              />
              <p className="text-black dark:text-green-400 transition duration-500">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-200 p-2 "
                src="https://img.icons8.com/color/48/000000/graphql.png"
                alt="React"
              />
              <p className="text-black dark:text-pink-500 transition duration-500">GraphQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-green-400 p-2  "
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="React"
              />
              <p className="text-black dark:text-green-400 transition duration-500">Node</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-20">
            <div className="flex flex-col items-center">
              <img
                className="skill-logo p-3 "
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
                alt="React"
              />
              <p className="text-black dark:text-blue-300 transition duration-500">Tailwindcss</p>
            </div>
            <div className="flex flex-col items-center">
              <Cypress className="skill-logo h-16 sm:h-20 md:h-24" />
              <p className="text-black dark:text-gray-50 transition duration-500">Cypress.io</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 md:space-y-12">
            <div className="flex items-center justify-evenly space-x-9 sm:space-x-16 md:space-x-20">
              <div className="flex flex-col items-center ">
                <img
                  className="skill-logo bg-yellow-200 p-2 "
                  src="https://img.icons8.com/nolan/96/javascript.png"
                  alt="JS"
                />
                <p className="text-sm text-black dark:text-yellow-500 transition duration-500">Javascript</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-gray-600 p-2 "
                  src="https://img.icons8.com/officel/80/000000/react.png"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-blue-300 transition duration-500">React</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-white p-3 "
                  src="https://img.icons8.com/color/96/000000/redux.png"
                  alt="Redux"
                />
                <p className="text-sm text-black dark:text-purple-800 transition duration-500">Redux</p>
              </div>
            </div>

            <div className="flex items-center justify-evenly space-x-9 sm:space-x-16 md:space-x-20">
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-white p-2 "
                  src="https://img.icons8.com/nolan/96/react-native.png"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-pink-800 transition duration-500">React-Native</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-gray-300 p-2 "
                  src="https://img.icons8.com/color/96/000000/mongodb.png"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-green-400 transition duration-500">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-gray-200 p-2 "
                  src="https://img.icons8.com/color/48/000000/graphql.png"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-pink-500 transition duration-500">GraphQL</p>
              </div>
            </div>

            <div className="flex items-center justify-evenly space-x-5 sm:space-x-11 md:space-x-14">
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo bg-green-400 p-2  "
                  src="https://img.icons8.com/color/96/000000/nodejs.png"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-green-400 transition duration-500">Node</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="skill-logo p-3 "
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
                  alt="React"
                />
                <p className="text-sm text-black dark:text-blue-300 transition duration-500">Tailwindcss</p>
              </div>
              <div className="flex flex-col items-center">
                <Cypress className="skill-logo h-20 sm:h-24 md:h-28" />
                <p className="text-sm text-black dark:text-gray-300 transition duration-500">Cypress.io</p>
              </div>
            </div>

            <div className="flex items-center justify-evenly space-x-5 sm:space-x-11 md:space-x-14">
              <div className="flex flex-col items-center">
                <Typescript className="skill-logo w-16 rounded-none" />
                <p className="text-sm text-black dark:text-green-400 transition duration-500">Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center space-y-5 xl:space-y-0 p-6 pl-12">
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 w-full">
          <div className="relative flex items-center justify-evenly space-x-7 w-full md:w-1/2">
            <span className="spinner"></span>
            <p className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 w-full transition duration-500">
              {t('skills.multitask')}
            </p>
          </div>
          <div className="relative flex items-center justify-evenly space-x-7 w-full md:w-1/2">
            <span className="spinner"></span>
            <p className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 w-full transition duration-500">
              {t('skills.engaged')}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 w-full">
          <div className="relative flex items-center justify-evenly space-x-7 w-full md:w-1/2">
            <span className="spinner"></span>
            <p className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 transition duration-500">
              {t('skills.lang1')}
            </p>
          </div>
          <div className="relative flex items-center justify-evenly space-x-7 w-full md:w-1/2">
            <span className="spinner"></span>
            <p className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 transition duration-500">
              {t('skills.lang2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills