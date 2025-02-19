import Employee from "./components/employees";
import './App.css'



function App(){

    const showEmployees = false;

    return(
            <div className="Hero bg-slate-300">

                {showEmployees ? (
                <>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                </>
        )
        :(

              <p>You can not see the employees</p>  
       ) }
                    
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
