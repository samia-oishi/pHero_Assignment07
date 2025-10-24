import vector1 from '../assets/vector1.png'
import vector1R from '../assets/vector1R.png'

export default function PRcard({pCardNo,rCardNo}) {
  return (
    <>
    <div className='flex justify-center items-center gap-5 m-10'>
    <div className="relative w-[600px] h-[180px] rounded-lg overflow-hidden bg-gradient-to-br from-violet-700 via-violet-500 to-blue-600 flex flex-col justify-center items-center text-white hover:bg-linear-to-tl transition-[3s]">
      <img
        src={vector1}
        alt=""
        className="absolute top-0 left-0 w-[200px] h-full object-cover opacity-full"
      />
      <img
        src={vector1R}
        alt=""
        className="absolute bottom-0 right-0 w-[200px] h-full object-cover opacity-full"
      />
      <div className="relative z-10 text-center">
        <p className="text-xl font-medium">In-Progress</p>
        <p className="text-4xl font-semibold mt-1">{pCardNo}</p>
      </div>
    </div>
    {/* rcard */}
    <div className="relative w-[600px] h-[180px] rounded-lg overflow-hidden bg-gradient-to-br from-lime-300 via-green-500 to-emerald-600 flex flex-col justify-center items-center text-white hover:bg-linear-to-tl transition-[3s]">
      <img
        src={vector1}
        alt=""
        className="absolute top-0 left-0 w-[200px] h-full object-cover opacity-full"
      />
      <img
        src={vector1R}
        alt=""
        className="absolute bottom-0 right-0 w-[200px] h-full object-cover opacity-full"
      />
      <div className="relative z-10 text-center">
        <p className="text-xl font-medium">Resolved</p>
        <p className="text-4xl font-semibold mt-1">{rCardNo}</p>
      </div>
    </div>
    </div>
    </>
  )
}
