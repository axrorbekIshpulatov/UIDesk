export const Button = ({children, style}) => {
    return (
      <button className={`mt-[30px] py-[16px] px-[40px] rounded-[50px] text-[white] text-[24px] font-normal bg-[#494949] ${style}`}>{children}</button>
    )
  }