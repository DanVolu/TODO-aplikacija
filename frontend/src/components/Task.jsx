import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

function Task(){
    return(
        <>
        <div className="w-[80%] h-[9rem] bg-mainBg  mt-5 rounded-lg flex flex-col mx-auto border-2">
        
        <div className="flex justify-between w-full h-min">
            <h1 className="font-semibold text-xl p-2">Task Example</h1> 

            <div>
            <button className="w-[5rem] h-[3rem] bg-todo rounded-bl-lg rounded-tr-lg border-l-2 border-b-2">TODO</button>
            </div>
        </div>

        <h1 className="p-2">Text example</h1>
        <div className="text-red-600">
        <h1 className="p-2 text-red font-medium">Deadline: 1984</h1>

        <div className=''>
        <EditIcon></EditIcon>
        <ClearIcon></ClearIcon>
        </div>

         </div>
                
            
        </div>

        
        </>
    )
}

export default Task