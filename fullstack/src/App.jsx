import Employee from "./components/employees";
import './App.css'
import { useState } from "react";


function App(){

    const [role,setRole] = useState("dev");

    return(
            <div className="Hero">

            <input type="rext" onChange={(e)=>{
                console.log(e.target.valve);
                setRole(e.target.valve);
            }}/>

                <>

                <div className="flex flex-wrap">
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
                <Employee name= "kojo" role={role} img="src/assets/Bigman.jpg"/>
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
                <Employee name= "kojo" role={role} img="src/assets/Bigman.jpg"/>
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
                <Employee name= "kojo" role={role} img="src/assets/Bigman.jpg"/>
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
                <Employee name= "kojo" role={role} img="src/assets/Bigman.jpg"/>
                <Employee name="Sammy" role={role} img="src/assets/otas.jpg"/>
               
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
