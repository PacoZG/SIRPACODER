/* eslint-disable no-extend-native */
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import useDarkMode from '../hooks/useDarkMode'
import localdb from '../utils/localdb'
import Div from './private/Div'
import Input from './private/Input'
import Span from './private/Span'

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const timeNow = new Date()
  const hours = timeNow.getHours()

  // console.log({ timeNow })
  // Date.prototype.stdTimezoneOffset = function () {
  //   var apr = new Date(this.getFullYear(), 4, 1)
  //   var oct = new Date(this.getFullYear(), 10, 1)
  //   return Math.max(apr.getTimezoneOffset(), oct.getTimezoneOffset())
  // }
  // Date.prototype.isDstObserved = function () {
  //   return this.getTimezoneOffset() < this.stdTimezoneOffset()
  // }
  // console.log(timeNow.isDstObserved())

  useEffect(() => {
    if (!localdb.getTheme()) {
      if (hours >= 10 && hours < 17) {
        setTheme('light')
      }
      if (hours < 10 || hours >= 17) {
        setTheme('dark')
      }
    }
  }, [setTheme, hours])
  const handleTheme = () => {
    setTheme(colorTheme)
    localdb.setTheme(colorTheme)
  }

  return (
    <Div>
      <Div className="block md:hidden">
        <Div className="flex justify-end items-center space-x-2">
          <Div>
            <Input type="checkbox" name="" id="toggle" className="hidden" />
            <Span
              className="relative w-14 h-7 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => handleTheme()}
            >
              <SunIcon className="absolute left-1 h-6 w-6 transition duration-500 text-gray-800 text-opacity-0 dark:text-opacity-100" />
              <Div
                className={
                  colorTheme === 'light'
                    ? 'w-6 h-6 bg-blue-800 rounded-full shadow-md transition duration-500 transform translate-x-6 '
                    : 'w-6 h-6 bg-blue-800 rounded-full shadow-md transition duration-500'
                }
              ></Div>
              <MoonIcon className="absolute right-1 h-5 w-5 transition duration-500 text-gray-800 text-opacity-100 dark:text-opacity-0" />
            </Span>
          </Div>
        </Div>
      </Div>
      <Div className="hidden md:block">
        <Div className="flex justify-end items-center space-x-2">
          <SunIcon className="h-6 w-6 transition duration-500 dark:text-gray-300" />
          <Div>
            <Input type="checkbox" name="" id="toggle" className="hidden" />
            <Span
              className="w-9 h-5 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => handleTheme()}
            >
              <Div
                className={
                  colorTheme === 'light'
                    ? 'w-4 h-4 bg-blue-800 rounded-full shadow-md transition duration-100 transform translate-x-3'
                    : 'w-4 h-4 bg-blue-800 rounded-full shadow-md transition duration-100'
                }
              ></Div>
            </Span>
          </Div>
          <MoonIcon className="h-5 w-5 transition duration-500 dark:text-gray-300 " />
        </Div>
      </Div>
    </Div>
  )
}

export default Toggle
