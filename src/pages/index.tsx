import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { signals } from '~/data'
import { HiLockOpen } from 'react-icons/hi'
import { HiOutlineLightBulb, HiCamera } from 'react-icons/hi'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Iphone Notification Clone</title>
      </Head>
      {/* iOS 15 Notification Summary */}
      <div className="grid min-h-screen bg-purple-50 place-items-center">
        {/* The iPhone Shell */}
        <div className="relative mx-auto h-[712px] w-[350px] bg-black overflow-hidden rounded-[60px] border-[14px] border-black ring ring-purple-400 shadow-xl">
          <Image
            src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg"
            layout="fill"
            alt="rainbow"
            className="inset-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 inset-x-0">
            <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
          </div>
          <div className="relative">
            {/* Small icons on top right */}
            <div className="mt-2 mr-5 flex justify-end space-x-1">
              {signals.map(({ Icon }, i) => (
                <Icon key={i} className="h-4 w-4 text-white" />
              ))}
            </div>
            <div className="h-0.5 w-10 mt-1.5 mr-7 bg-white rounded ml-auto"></div>
            {/* Date & time */}
            <div className=" mt-2 flex flex-col items-center">
              <HiLockOpen className="w-8 h-8 text-white" />
              <p className="mt-3 text-white text-6xl font-extralight">9:20</p>
              <p className="mt-1 text-white text-xl font-light">
                Friday, July 16
              </p>
            </div>
            {/* Notification Summary */}
            <div className="relative mt-4 mx-2">
              {/* Stacked panels (sitting below) */}
              <div className="absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 bg-white/40 h-full w-full backdrop-blur-md rounded-2xl"></div>
              <div className="absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm"></div>
              {/* Main, current panel */}
              <div className="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold">9:10 AM</p>
                    <h2 className="text-lg font-bold">Your Morning Summary</h2>
                  </div>
                  <span className="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">
                    11
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                    <div className="relative h-[96px] w-full">
                      <Image
                        src="https://images.unsplash.com/photo-1588974269162-4c0d5ccc6094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80"
                        layout="fill"
                        alt="phot-1"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="mt-2 text-xs font-bold leading-tight">
                      Surfing: heals the soul, kills the ribs
                    </h3>
                    <p className="mt-1 text-xs">
                      It`s all fun and thrills until you get sucked over the
                      falls.
                    </p>
                  </div>
                  <div>
                    <div>
                      <div className="relative h-[96px] w-full">
                        <Image
                          src="https://media.bleacherreport.com/image/upload/v1625368217/ilertc3nqs53klcp9xvx.jpg"
                          layout="fill"
                          alt="phot-1"
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="mt-2 text-xs font-bold leading-tight">
                        The NBA Finals are here!
                      </h3>
                      <p className="mt-1 text-xs">
                        Bucks vs Suns is shaping up to be a very intriguing
                        series!
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-4 border-black/20" />
                <div className="mt-3 grid grid-cols-3 items-end">
                  <div className="col-span-2">
                    <h3 className="text-xs font-bold">More Updates</h3>
                    <p className="mt-0.5 text-xs">
                      Polywork, Keystone 6, and Sarah Drasner
                    </p>
                  </div>
                  <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                    <li>
                      <div className="relative h-8 w-8">
                        <Image
                          className="h-full w-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/29187606?v=4"
                          layout="fill"
                          alt="profile-1"
                          objectFit="cover"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="relative h-8 w-8">
                        <Image
                          className="h-full w-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/26340308?v=4"
                          alt="profile-2"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="relative h-8 w-8">
                        <Image
                          className="h-full w-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/38458781?v=4"
                          alt="profile-3"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Flashlight, camera and bottom swipe menu */}
            <div className="absolute -bottom-36 inset-x-0 h-20">
              <div className="px-10 flex justify-between">
                <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                  <HiOutlineLightBulb className="h-6 w-6" />
                </button>
                <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                  <HiCamera className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute bottom-1 inset-x-0">
                <div className="mx-auto h-1 w-28 rounded bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Index
