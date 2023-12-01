export const Button = ({children, style}) => {
    return (
      <button className={`py-[16px] px-[40px] rounded-[50px] text-white-1 text-[24px] font-normal bg-gradient-to-tr from-[#64BB47] to-[#2C9553] ${style}`}>{children}</button>
    )
  }
