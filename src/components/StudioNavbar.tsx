import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-items-center p-5">
        <Link href="/" className="flex items-center text-yellow-500">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-yellow-500" />
          Go to Website
        </Link>

        <div></div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
