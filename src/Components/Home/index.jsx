import React, { useEffect, useState } from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import './style.css'
import axios from 'axios'
import { motion } from "framer-motion"

function Home() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [popup, setpopup] = useState(false);

    const CreateTaskToggle = () => {
        popup ? setpopup(false) : setpopup(true)
    }
    
    const [task, setTask] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost/TodoList/api.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setTask(result);
                }
            )
    }, [])

    const handleCreateTask = () => {
        if (title.length === 0) {
            alert("Enter Title");
        }
        else if (description.length === 0) {
            alert("Enter Description");
        }
        else {
            const url = 'http://localhost/TodoList/insertApi.php';

            let fData = new FormData();
            fData.append('title', title);
            fData.append('description', description);

            axios.post(url, fData)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));

            window.location.reload(false);
            
        }
    }

    return (
        <>
            <Header />
            <SideBar />

            <div className='absolute w-[80%] flex right-0 p-16 justify-between items-center border-b border-[#282828]'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold text-[#fff]'>Welcome, User</h1>
                    <p className='text-lg font-reglar text-[#818387] mt-1 flex items-center'>Lets do your best today, complete your tasks <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 icon icon-tabler icon-tabler-edit" width="23" height="23" viewBox="0 0 24 24" stroke-width="1.5" stroke="#19976A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                    </svg></p>
                </div>

                <div>
                    <button onClick={CreateTaskToggle} className='w-max p-2.5 px-10 bg-[#19976A] rounded-lg text-lg font-medium flex items-center'><svg xmlns="http://www.w3.org/2000/svg" class="mr-4 icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0f0f0f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg> Create Task</button>
                </div>
            </div>

            <div className='absolute w-[80%] flex right-0 p-16 pr-16 pl-16 flex-col top-1/3'>
                <div>
                    <h2 className='relative text-3xl font-medium text-[#fff] left-[20px]'>My Tasks</h2>
                </div>

                {/* //TASKS CONTAINER */}
                <div className='relative mt-[3rem] container flex flex-wrap justify-between items-start gap-y-8 overflow-y-scroll max-h-[27rem] tasks'>

                    {/* //TASK */}

                    {
                        task.map(task => (

                            <div className='w-[49%] rounded-xl p-8 border border-[#3b3b3b] text-[#fff] task'>
                                <div className='w-full flex justify-between items-center'>
                                    <h3 className='text-xl font-medium relative flex items-center left-[20px]'>{task.title}</h3>

                                    <div className='flex items-center'>
                                        <svg onClick={() => {let completeTask = (task.id);
                                        alert(completeTask);
    
                                        let completed = new FormData();
  
                                        //Adding files to the formdata
                                        completed.append("id", completeTask);
                                        const deleteUrl = 'http://localhost/TodoList/complete.php';

                                        axios.post(deleteUrl, completed)
                                        .then(response => console.log(response.data))
                                        .catch(error => console.log(error));

                                        window.location.reload(false);
                                        
                                        }} xmlns="http://www.w3.org/2000/svg" class="hoverIcon icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>

                                        <svg onClick={() => {let deletedId = (task.id);
    
                                        let formData = new FormData();
  
                                        //Adding files to the formdata
                                        formData.append("id", deletedId);
                                        const deleteUrl = 'http://localhost/TodoList/delete.php';

                                        axios.post(deleteUrl, formData)
                                        .then(response => console.log(response.data))
                                        .catch(error => console.log(error));

                                        window.location.reload(false);
                                        
                                        }} xmlns="http://www.w3.org/2000/svg" class="hoverIcon ml-3 icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                </div>

                                <p className='mt-2 text-lg font-regular text-[#e9e9e9e7] max-w-[85%]'>{task.description}</p>
                                <p className='mt-3 text-md font-regular text-[#818387] flex justify-between items-center'>Created at: {task.date_time} <small name='id'>Id: {task.id}</small></p>
                            </div>
                        ))}
                </div>
            </div>

           <div onClick={CreateTaskToggle} className={popup ? 'w-screen h-screen left-0 top-0 fixed popupbg' : 'hidden'}></div>

            <div className='fixed flex flex-col justify-start popupContainer'>
            {popup && (<motion.div initial={{opacity: 0, y: 120}} animate={{opacity: 1, y: 0}} ><div className='border border-[#282828] flex flex-col justify-start p-8 rounded-3xl w-[45rem] h-max popup bg-[#222222] shadow-md text-[#fff]'>
                    <div className=' flex justify-between items-center border-b border-[#343434] pb-6'><h1 className='text-xl font-reuglar'>Create Task</h1> <svg onClick={CreateTaskToggle} xmlns="http://www.w3.org/2000/svg" class="hoverIcon ml-3 icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e9e9e9" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /></svg></div>
                    <div className='flex flex-col justify-start items-start mt-8 w-full'>
                        <div className='w-full'>
                            <label htmlFor="title">Title</label>
                            <input className='border mt-3 border-[#3b3b3b] rounded-lg' placeholder='Your Task Title here' type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mt-7 w-full'>
                            <label htmlFor="description">Description</label>
                            <textarea className='mt-3 border border-[#3b3b3b] rounded-lg ' name="description" id="description" cols="30" rows="6" placeholder='Your Task Description here' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>

                        <button onClick={handleCreateTask} className='flex items-center justify-center mt-9 bg-[#19976A] rounded-lg text-[#222222] text-lg font-medium p-3 w-full shadow-md' type='submit' name='send' id='send' value='SEND'><svg xmlns="http://www.w3.org/2000/svg" class=" mr-4 icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0f0f0f" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg> Create Task</button>
                    </div>
                </div></motion.div>)}
            </div>
        </>
    )
}

export default Home