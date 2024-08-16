import { FC } from 'react'

interface SidebarChatlistProps {
    friends: User[]
}

const SidebarChatlist: FC<SidebarChatlistProps> = ({friends}) => {
  return <ul role='list' className='max-h-[25rem] overflow-y-auto -mx-2 space-y-1'>
    {friends.sort().map((friend) => {
        
    })}
  </ul>
}

export default SidebarChatlist