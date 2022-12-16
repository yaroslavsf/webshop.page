import { useField, ErrorMessage } from "formik";
export interface TextFieldInterface {
    label:string,
     name: string,
    type: string 
} 

export const TextField = (props: TextFieldInterface) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>{field.name}</label>
      <input
        autoComplete="off"
        {...field}
        {...props}
        className={`${meta.touched && meta.error && "border border-red-500"} form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
      />
      <ErrorMessage component="div" name={field.name} className="text-red-500" />
    </>
  );
};
