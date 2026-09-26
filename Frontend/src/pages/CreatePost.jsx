import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

  const [caption, setCaption] = useState('')
  const [preview, setPreview] = useState('')

  const navigate = useNavigate()
  

  const submitHandler = async (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)

    const response = await axios.post('http://localhost:3000/create-post',formData)

    console.log(response.data.message)

    setCaption('')
    setPreview('')

    navigate('/feed')
  }

  return (
    <div className="h-screen w-full flex flex-col items-center text-black">
      
      <div className="text-3xl font-bold mt-5 pb-2">Create Post</div>
      
      <form onSubmit={(e)=>{submitHandler(e)}} className="bg-lime-50  flex flex-col h-[80%] items-center justify-between gap-3 border-none rounded-2xl p-2 w-[90%] max-w-2xl mx-4">
          <div className="flex flex-col gap-3 h-[80%] w-full">
            <label
            htmlFor="image"
            className="w-full h-full border-2 border-dashed border-black rounded-xl flex items-center justify-center cursor-pointer overflow-hidden hover:bg-slate-200 transition"
            >
            {preview ? (
              <img
               src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold">
                  Click to upload image
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PNG, JPG or JPEG
                </p>
              </div>
            )}

              <input id="image" type="file" name="image" accept="image/*"
                onChange={(e)=>{
                  
                  const file=e.target.files[0]
                  
                  if (file) {
                    setPreview(URL.createObjectURL(file))
                  }
                }}
                className="hidden"
              />
            </label>

            <input type="text" name="caption" placeholder="Enter caption" value={caption} required className="border border-black w-full py-2 px-1 rounded outline-none"
            onChange={(e)=>{
              setCaption(e.target.value)
            }}/>

          </div>
          <button className="bg-gray-400 text-white border-none rounded-3xl text-lg px-3 py-2 mb-2 active:scale-95 transition-all ease-in-out duration-300 cursor-pointer hover:bg-gray-500">Submit</button>
        </form>
    </div>
  )
}

export default CreatePost
