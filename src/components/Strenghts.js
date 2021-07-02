import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

const Strenghts = () => {
  const [stgr1, setStgr1] = useState(false)
  const [stgr2, setStgr2] = useState(false)
  const [stgr3, setStgr3] = useState(false)
  const [stgr4, setStgr4] = useState(false)
  return (
    <div className="bg-green-100 flex flex-col items-center">
      <div className="p-6 w-2/3 text-center">
        <div className="p-4 border-2 border-yellow-600 rounded-md bg-green-300 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl cursor-pointer pb-2 text-left" onClick={() => setStgr1(!stgr1)}>
              Committed and perseverance
            </p>
            <div className={stgr1 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <Transition
            show={stgr1}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <div className="border-t-2 border-yellow-700 pt-2">
              Strengths that were certainly the key to be able finish the{' '}
              <a
                className="text-indigo-600 hover:text-red-800 hover:underline"
                href="https://fullstackopen.com/en/"
                alt="course"
              >
                Full Stack Course
              </a>{' '}
              that gave the necessary skills to transition into a development career.
            </div>
          </Transition>
        </div>
        <div className="p-4 border-2 border-black rounded-md bg-yellow-400 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl cursor-pointer pb-2 text-left" onClick={() => setStgr2(!stgr2)}>
              Customer Service oriented
            </p>
            <div className={stgr2 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Transition
            show={stgr2}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className="border-t-2 border-black pt-2">
              I am certain I can use my extensive experience in the field to easily communicate to the clients in a more
              empathetic and approachable way.
            </p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-black rounded-md bg-blue-400 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-black cursor-pointer pb-2 text-left" onClick={() => setStgr3(!stgr3)}>
              Academic experience
            </p>
            <div className={stgr3 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Transition
            show={stgr3}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className="text-black border-t-2 border-black pt-2">
              As a drum teacher, I learned to place myself on my student's perspective, finding ways to introduce new
              concepts and technics. Skill that I can use in this industry to introduce our customers to the services
              and explain their functionality in a very understandable way.
            </p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-black rounded-md bg-yellow-100">
          <div className="flex items-center justify-between">
            <p
              className="text-2xl text-black cursor-pointer pt-1 pb-3 text-left font-bold"
              onClick={() => setStgr4(!stgr4)}
            >
              HIGH <span className="border-4 border-yellow-300 p-1">5</span> TEST
            </p>
            <div className={stgr4 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Transition
            show={stgr4}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className="text-black border-t-2 border-black pt-2">
              Click{' '}
              <a
                className="text-indigo-600 hover:text-red-800 hover:underline"
                href="https://high5test.com/test/result-your-friend/MTUwMTU5Mg==/"
                target="blank"
              >
                here
              </a>{' '}
              and discover the result of my test
            </p>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Strenghts
