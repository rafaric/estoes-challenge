import Image from "next/image"

interface UserProp{
  user:string
}

const User:React.FC<UserProp> = ({user}) => {
  return (
    <div className="flex items-center h-6 gap-2"><Image src={"/Avatar.png"} alt="avatar" width={24} height={24} />
    <p className="text-xs text-black/65">{user}</p>
    </div>
  )
}

export default User