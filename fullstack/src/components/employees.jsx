import EditEmployee from "./EditEmployee";

/* eslint-disable react/prop-types */
function Employee(props){

    return(
      <>
        <div className="m-2 py-8 px-8 max-w-sm space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            <img className="object-cover h-[30px] w-[30px]block mx-auto rounded-full sm:mx-0 sm:shrink-0" src={props.img} alt="photo" />
            <div className="text-center space-y-2 sm:text-left">
             <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {props.name}
                </p>
                <p className="text-slate-500 font-medium">
                        {props.role}
                </p>
                </div>

                    <EditEmployee/>

                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">update</button>
            </div>
        </div>
</>

    );

}

export default Employee;