
import Employee from "./components/employees";
import './App.css'
import { useState } from "react";
import {v4 as uuidv4} from "uuid";


function App(){

    // const [role,setRole] = useState("");
    const [employees,setEmployees] = useState(
        [
            {
                id:1,
                name:"Kojo",
                role:"manager",
                img:"src/assets/Bigman.jpg",
            },

            {
                id:2,
                name:"Sammy",
                role:"dev",
                img:"src/assets/otas.jpg",
            }
        ]
    );

    return(
            <div className="Hero">

            <input type="rext" onChange={(e)=>{
                console.log(e.target.value);
                //setRole(e.target.value);
                setEmployees(e.target.value);
            }}/>

                <>

                <div className="flex flex-wrap justify-center">
               
                    {employees.map((employee)=>{
                        return(
                    <Employee 
                    key = {uuidv4()} //this syntax is used when you decide to use a guid sam as uuid.
                    //key = {employee.id} this can used when you decide not install uuid
                    name = {employee.name}
                     role={employee.role} 
                     img ={employee.img} 
                     alt=""/>
                     
                );
                    })}

                </div>

                </>
    
                    
            </div>
    );

}

export default App;








































































































































































































































































































// import { useState } from 'react';
// import Employee from './components/Employee';
// import './App.css';

// function App() {
//   const [employee] = useState([
//     {
//       name: 'Okai Tettey-Antie Samuel',
//       role: 'Mechanical&Telecomms Engineering',
//       img: '', // Add valid image paths
//     },
//     {
//       name: 'Josh Laing',
//       role: 'Software Engineer',
//       img: '', // Add valid image paths
//     },
//     {
//       name: 'Barbara Sowu',
//       role: 'Student',
//       img: '', // Add valid image paths
//     },
//   ]);

//   // If role is unnecessary, remove the following line
//   const [role, setRole] = useState('');

//   const showEmployee = true;

//   return (
//     <div className="Hero bg-slate-300">
//       {showEmployee ? (
//         <>
//           {/* Example usage of the role state */}
//           <input
//             type="text"
//             value={role}
//             onChange={(e) => {
//               console.log(e.target.value);
//               setRole(e.target.value);
//             }}
//             placeholder="Update role"
//           />
//           <div className="flex flex-wrap justify-center">
//             {employee.map((emp, index) => (
//               <Employee key={index} name={emp.name} role={emp.role} img={emp.img} />
//             ))}
//           </div>
//         </>
//       ) : (
//         <p>No Employee available.</p>
//       )}
//     </div>
//   );
// }

// export default App;
