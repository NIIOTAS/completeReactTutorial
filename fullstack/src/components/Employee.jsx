










































































































































































































































































































// //import otas from "../assets/otas.jpg"; // Adjust based on the file location relative to Employee.jsx
// //import Bigman from "../assets/Bigman.jpg"
// //import Barabara from "../assets/Barabara.jpg"



// import PropTypes from 'prop-types';

// function Employee({ name, role, img }) {
//   return (
//     <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg">
//       <img
//         className="block mx-auto h-24 rounded-full"
//         src={img || 'https://via.placeholder.com/150'} // Fallback image
//         alt={`${name}'s avatar`}
//       />
//       <div className="text-center space-y-2">
//         <p className="text-lg font-semibold">{name}</p>
//         <p className="text-slate-500">{role}</p>
//       </div>
//     </div>
//   );
// }

// // Default props
// Employee.defaultProps = {
//   name: 'Unknown Employee',
//   role: 'No role specified',
//   img: 'https://via.placeholder.com/150',
// };

// // Prop types validation
// Employee.propTypes = {
//   name: PropTypes.string.isRequired,
//   role: PropTypes.string.isRequired,
//   img: PropTypes.string,
// };




// // function Employee() {
// //   return (
// //     <div className="flex flex-wrap justify-center">
// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px]  rounded-full sm:mx-0 sm:shrink-0"
// //           src={otas}
// //           alt="Gee's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Okai Tettey-Antie Samuel</p>
// //             <p className="text-slate-500 font-medium">Mechanical&Telecomms Engineer</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>

// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0"
// //           src={Bigman}
// //           alt="Gee's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Josh Laing</p>
// //             <p className="text-slate-500 font-medium">Software Engineer</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>

// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0"
// //           src={Barabara}
// //           alt="Woman's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Barbara Sowu</p>
// //             <p className="text-slate-500 font-medium">Student</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>

// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0"
// //           src={otas}
// //           alt="Gee's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Okai Tettey-Antie Samuel</p>
// //             <p className="text-slate-500 font-medium">Mechanical&Telecomms Engineer</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>

// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0"
// //           src={Bigman}
// //           alt="Gee's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Josh Laing</p>
// //             <p className="text-slate-500 font-medium">Software Engineer</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>

// //       <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
// //         <img
// //           className="block mx-auto h-[100px] w-[100px] rounded-full sm:mx-0 sm:shrink-0"
// //           src={Barabara}
// //           alt="Woman's Face"
// //         />
// //         <div className="text-center space-y-2 sm:text-left">
// //           <div className="space-y-0.5">
// //             <p className="text-lg text-black font-semibold">Barbara Sowu</p>
// //             <p className="text-slate-500 font-medium">Student</p>
// //           </div>
// //           <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
// //             Message
// //           </button>
// //         </div>
// //       </div>


// //     </div>
// //   );
// // }

// export default Employee;
