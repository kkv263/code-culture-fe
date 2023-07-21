import UnderlineLink from '@modules/common/components/underline-link';
const FaqHero = () => {

  const email = 'codecultureapparel@gmail.com'

  return (
    <section className="w-full bg-black">
      <div className="content-container flex flex-col items-center justify-center min-h-[24rem]">
        <h1 className="text-white font-mono small:text-5xl text-4xl pb-4 text-center">Need <span className="text-rose-500">help?</span> <br className='small:hidden block'/> We&apos;ll take care of <span className="text-rose-500">you.</span></h1>
        <p className='text-white max-w-[40rem] text-center pb-12 xsmall:text-base text-sm'>If you have any questions, please feel free to email us at <a className="underline hover:text-rose-500 transition-colors" href={`mailto: ${email}`}>{email}</a> during our business hours from Monday through Friday 8AM-5PM CST. </p>
        <UnderlineLink href={`mailto: ${email}`} bgColor="bg-rose-500">Contact Us &gt;&gt;</UnderlineLink>
      </div>
    </section>
  )
}

export default FaqHero