export default function Icon({ img, status } : { img?: string, status?: string } ) {
  interface Icon {
    'Completed': string,
    'Wont-do': string,
    'In-Progress': string,
    [status: string]: string
  }
  
  const StatusIcon: Icon = {
    'Completed': 'Done_round_duotone.svg',
    'Wont-do': 'close_ring_duotone.svg',
    'In-Progress': 'Time_atack_duotone.svg',
  }

  return (
    <div className={`bg-[#F8FAFC] ${status} w-fit transition-colors p-3 rounded-xl`}>
      <img className="w-5" src={`/assets/${(status && !img) ? StatusIcon[status] : img}`} alt=""/>
    </div>
  )
}
