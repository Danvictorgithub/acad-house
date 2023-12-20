export default function Home() {
  return (
    <main>
      <div className='px-12 flex justify-start items-center w-full h-[75px] shadow-sm'>
        <div className='flex items-center justify-start w-full gap-2'>
          <img src="logo.png" className='h-16'></img>
          <h1 className='text-2xl font-bold text-blue-700'>acadhouse</h1>
        </div>
        <div className='w-[500px] flex items-center border-2 rounded-full overflow-hidden p-2'>
            <span className="material-symbols-outlined">more_vert</span>
            <input type="text" className='w-full' placeholder='Enter Location'/>
            <span className="material-symbols-outlined bg-blue-700 text-white p-[5px] rounded-full">search</span>
        </div>
        <div className="w-full flex justify-end">
          <div className='flex items-center justify-center gap-2 border-2 px-4 py-1 rounded-full'>
            <p className='text-xl font-medium text-zinc-700'>login</p>
            <span className="material-symbols-outlined text-4xl text-zinc-700">account_circle</span>
          </div>
        </div>
      </div>
      <div className='px-16 py-12 flex flex-col h-full rounded-full'>
        <div className='flex gap-4 pb-4 overflow-auto whitespace-nowrap snap-mandatory no-scrollbar'>
          {[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5].map(() => {
            return (
            <div className="flex flex-col justify-center items-center snap-start">
              <span className="material-symbols-outlined">night_shelter</span>
              <p>Boarding House</p>
            </div>
            )
          })}
        </div>
        <div className=''>
          {[1,2,3].map(() => {
            return (
          <div className='w-[275px] h-[360px]'>
            <img src="bhouse.jpg" alt="" className='h-[260px] object-cover rounded-lg'/>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Jukcatts Boarding House</h2>
              <p className='flex items-center'><span className="material-symbols-rounded text-lg">star</span>5.00</p>
            </div>
          </div>
              
            )
          })}
      </div>
    </div>
   </main>
  )
}
