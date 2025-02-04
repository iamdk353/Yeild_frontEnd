const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`
        w-full 
        p-2 
        border-2 
        rounded-xl
        pl-6
        focus:outline-none 
        max-w-md
        transition-all
        border-[var(--color-primaryGreen)] 
        text-[var(--color-thirdGreen)] 
        focus:border-[var(--color-secondaryGreen)] 
        placeholder-[var(--color-secondaryGreen)] 
        `}
    />
  );
};
export default Input;
