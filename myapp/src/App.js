
import {useState, useEffect} from "react";
import {MdOutlineLightMode,MdDarkMode} from "react-icons/md";
import useDarkMode from './hooks/useDarkMode';


function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  const [loading, setLoading] = useState(true);
  const API =
  "https://api.nasa.gov/planetary/apod?api_key=mZOd04B04VfddJyxgt29puJAvUmuV9Yr9w0tuLbD";
const [data, setData] = useState([]);
const fetchdata = async () => {
  const response = await fetch(`${API}`);
  const data = await response.json();
  setData(data);
  setLoading(false);
  //console.log(data);
};

useEffect(() => {
  fetchdata();
}, []);
  return (
   <div className=" bg-rose-200 dark:bg-neutral-800  min-h-screen">
    {loading?<div>
     <p className=" p-10 font-bold text-4xl text-center dark:text-emerald-200 text-emerald-950">loading please wait a moment</p>
    </div>:<div>
      <p className="pt-4 font-russo text-4xl font-bold dark:text-red-200 text-rose-950 text-center">This is "{data.title}"</p>
      <img className="   m-auto p-6 drop-shadow-lg" src={data.hdurl} alt="dataurl"/>
      {!data.copyright?<p className="p-4 text-4xl font-bold dark:text-rose-200 text-rose-950 text-center">nasa astronomy picture</p>:<p className="p-4 text-center text-5xl font-bold dark:text-red-200 text-rose-950"><span className="text-4xl text-lime-950 dark:text-lime-200 p-2">Image taken by</span> <br/>{data.copyright}</p>}
      <p className=" italic tracking-wide p-4 text-2xl font-semibold font-ubuntu text-center dark:text-purple-200 text-purple-950">{data.explanation}</p>
      <div className=" p-4 text-center">
      <button onClick={handleMode}>{darkTheme ? (
        <MdOutlineLightMode size='40' className=' text-white' />
      ) : (
        <MdDarkMode size='40' className='' />
      )}</button>
    
      </div>
    </div>}
   </div>
   
  );
}

export default App;
