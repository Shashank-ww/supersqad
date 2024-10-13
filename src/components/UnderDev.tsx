import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

function UnderDev() {
  return (
    <>
    <MaxWidthWrapper className="mb-12 mt-24 sm:mt-36 flex flex-col items-center justify-center">
        <h1 className="m-2 font-normal">
        <span id="superstack" className="font-normal">supersqad</span>
        <span className="font-extralight">studios</span>
        </h1>
        <div className="relative group w-auto">
        <div
        className="mx-auto mb-4 max-w-fit text-center items-center justify-center space-x-2 rounded-full border border-gray-200 bg-stone-200 px-6 py-3 shadow-md backdrop-blur transition-all hover:bg-red-100 focus:border-red-500">
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-12 hidden group-hover:block bg-amber-500 text-white text-xs rounded py-1 px-2">
        &quot;Stay Tuned for more updates!&ldquo;
        </div>
        <p className="text-sm font-semibold text-gray-800">
        site/section under development!
        </p>
        </div>
        </div>
    </MaxWidthWrapper>
</>
  )
}

export default UnderDev