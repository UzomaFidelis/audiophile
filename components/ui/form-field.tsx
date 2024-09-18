import clsx from "clsx";

const FormField = ({
  type,
  placeholder,
  name,
  error,
  // register,
  // error,
}: {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        /*{ {...register(name)} } */
        className={clsx(
          // error ? "border-b-red-700" : "border-b-light-pale",
          "w-full pl-6 py-4 border-b border-b-light-pale bg-pale-blue outline-none",
          "focus:border-b focus:border-b-san-juan-blue-100",
        )}
      />
      {error && (
        <span
          className={clsx(
            "text-red-700 absolute right-0 top-0 text-sm",
            "text-base",
          )}
        >
          {/* {error.message} */}
        </span>
      )}
    </>
  );
};

export default FormField;
