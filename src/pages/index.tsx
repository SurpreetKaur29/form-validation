import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home() {
  const [inputVal, setInputVal] = useState<any>({
    title: "",
    subtitle: "",
    description: "",
  })
  const [result, setResult] = useState<any>([])
  const [loggedInUser, setLoggeInUser] = useState('')
  console.log("resultresult", result);

  const router = useRouter()

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputVal((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogout = () => {
    localStorage.removeItem('login')
    router.push('/login')
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem('login');
    setLoggeInUser(loggedIn as string)
    if (!loggedIn) {
      router.push('/login')
    }
  }, [])

  console.log("result", result);


  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.getItem('mynotes') && setResult(JSON.parse(localStorage.getItem('mynotes') as string))

    }
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!inputVal.title.trim() || !inputVal.subtitle.trim() || !inputVal.description.trim()) {
      alert('All fields are required')
    } else {
      const loggedIn = localStorage.getItem('login');
      const currentNote = { ...inputVal, user: loggedIn }
      setResult([currentNote, ...result])
      localStorage.setItem('mynotes', JSON.stringify([currentNote, ...result]))
      setInputVal({
        title: "",
        subtitle: "",
        description: ""
      })
    }
  }


  return (
    <>
      <div className='p-4 bg-gray-300 text-black flex items-center justify-between'>
        <h1>Logo</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <div className='m-5'>
          <form className='flex flex-col gap-4 max-w-xl mx-auto p-5 bg-gray-400' onSubmit={handleSubmit}>
            <h2>Add Note</h2>
            <input type='text' name='title' onChange={handleChange} value={inputVal.title} placeholder='Title' className='p-2 text-black' />
            <input type='text' name='subtitle' onChange={handleChange} value={inputVal.subtitle} placeholder='Subtitle' className='p-2 text-black' />
            <input type='text' name='description' onChange={handleChange} value={inputVal.description} placeholder='Description' className='p-2 text-black' />
            <button type='submit' className='bg-black'>Add Note</button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 items-stretch container mx-auto">
        {result?.map((item: any, idx: number) => {
          return (
            item?.user === loggedInUser && <div key={idx} className='bg-gray-400 p-5'>
              <h2 className="text-2xl">{item.title}</h2>
              <h5 className="text-sm my-3">{item.subtitle}</h5>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
