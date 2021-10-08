export const ControlsButton = ({ children }) => {
  return (
    <button className="px-8 py-3 font-bold bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2">
      {children}
    </button>
  );
};

export const PrimaryButton = ({ children }) => {
  return (
    <button className="px-8 font-bold bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-auto sm:text-lg rounded-none w-full  sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6">
      {children}
    </button>
  );
};
