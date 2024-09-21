'use client'
import { useState } from "react"

function Home() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState(null)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo)

    await fetch("/api/image", {
      method: "POST", 
      body: formData
    })

    // await fetch("/api/create", {
    //   method: "POST", 
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email
    //   })
    // })


    alert("submitted");
  }

  return (
    <div className="container mx-auto p-4">
      <form method="POST" className="space-y-4" onSubmit={submitHandler}>
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName}
            onChange={({target}) => setFirstName(target.value)}
            name="firstName" 
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName}
            onChange={({target}) => setLastName(target.value)}
            name="lastName" 
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input 
            type="text" 
            id="email" 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            name="email" 
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            photo
          </label>
          <input 
            type="file" 
            id="photo" 
            onChange={({target}) => setPhoto(target.files[0] || null)}
            name="photo" 
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Home