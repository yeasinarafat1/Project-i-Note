import { useEffect } from "react"

const AboutMe = () => {
  useEffect(() => {
  document.title = "i-Note About me section Yeasin Arafat" 
  }, [])
  
  return (
    <div>
      <header className="px-2 py-4  flex flex-col justify-center items-center text-center min-h-custom">
  <img className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48" 
    src="profile.png" 
    alt=""
  />
  <h1 className="text-2xl text-gray-500 font-bold mt-2">
    <div className="text-gray-300">Hi There! 👋 </div>
    <div className="text-gray-300">My Name is Yeasin Arafat.</div>
    <div className="text-xl ">I am a web developer And this is my first project</div>
  </h1>
  <h2 className="text-base md:text-xl text-gray-300 font-bold">
    Follow me on social media
    {/* <a href="" target="_blank"
      className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
      XYZ
    </a> */}
  </h2>
  <ul className="flex flex-row mt-2">
  <li className="mx-2">
      <a href="mailto:yachenarafath@gmail.com" target="_blank" aria-label="Email">
        <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>Mail.Ru</title>
          <path
            d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12">
          </path>
        </svg> 
      </a>
    </li>
    <li className="mx-2">
      <a href="https://www.facebook.com/yeasinarafat27" target="_blank" aria-label="GitHub">
        <img  src="facebook.svg" alt="" />
      </a>
    </li>

    <li className="mx-2">
      <a href="https://github.com/yeasinarafat1" target="_blank" aria-label="GitHub">
        <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
          </path>
        </svg> 
      </a>
    </li>
  

    <li className="mx-2">
      <a href="https://www.linkedin.com/in/yachen-arafath-862a1a1ba/
" target="_blank" aria-label="LinkedIn">
        <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
          </path>
        </svg> 
      </a>
    </li>

    <li className="mx-2">
      <a href="https://twitter.com/Yeasin180013" target="_blank" aria-label="Twitter">
        <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <title>Twitter</title>
          <path
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
          </path>
        </svg> 
      </a>
    </li>

    

    
  </ul>
</header>

    </div>
  )
}

export default AboutMe

