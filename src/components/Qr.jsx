export const Qr = (props) => {
  const { image, title, body } = props;

  return (
    <section className='flex justify-center items-center h-[100vh]'>
      <div className='border rounded-2xl p-4 bg-white w-[321px]'>
        <img className='qr-image rounded-xl' src={image} alt='QR image' />
        <section className='px-[1.4rem] py-6'>
          <h2 className='image-title text-[#1f3251] text-[21px]/7 font-extrabold pb-3.5'>
            {title}
          </h2>
          <span className='body-title text-[#7b879d] text-[15px] leading-4'>
            {body}
          </span>
        </section>
      </div>
    </section>
  );
};
