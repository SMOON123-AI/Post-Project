const Card = ({post}) => {
  return (
    <div className="p-5 bg-[#eeeeef]">
      <h1 className="font-bold text-lg pb-2">Owner</h1>
      <div className="flex flex-col gap-3 w-full h-auto max-w-lg rounded-2xl overflow-hidden">
        <div>
        <img src={post.image} alt="" className="w-full object-cover"/>
        <p className="text-gray-800 p-4 bg-white text-wrap">{post.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
