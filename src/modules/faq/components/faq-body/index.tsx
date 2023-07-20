import Accordion from "@modules/common/components/accordion"

const FaqBody = () => {

  const email = 'codecultureapparel@gmail.com'

  const faqContent = [
    {
      title: 'Returns and Exchange Policy',
      href: 'returns',
      content: (
        <>
          <h4 className='text-xl font-bold pb-2'>What is your return Policy?</h4>
          <p className='pb-8'>As long as the item is in brand new condition (unworn and unwashed), you can return it within *30 days* of receiving your order. Once we receive the returned item(s), we will refund you the cost of the item(s) within about one week from when the item is delivered to us. The original shipping cost will not be refunded.</p>
          <h4 className='text-xl font-bold pb-2'>My item arrived damaged / This isn&apos;t what I ordered, what do I do?</h4>
          <p className='pb-8'>If you have received a damaged/incorrect item, please send an e-mail to <a href='mailto: ${email}' target="_blank" rel="noopener noreferrer">${email}</a> with the subject line “Damaged Item” or “Incorrect Item” within 30 days of delivery and&nbsp;we will take care of it at no cost to you.</p>
        </>
      )
    },
    {
      title: 'Shipping',
      href: 'shipping',
      content: (
        <>
          <h4 className='text-xl font-bold pb-2'>How long does it take my order to ship?</h4>
          <p className='pb-8'>TBD</p>
          <h4 className='text-xl font-bold pb-2'>Do you ship internationally?</h4>
          <p className='pb-8'>TBD</p>
          <h4 className='text-xl font-bold pb-2'>How do I track my order?</h4>
          <p className='pb-8'>TBD</p>
          <h4 className='text-xl font-bold pb-2'>I haven&apos;t gotten my package yet, what do I do?</h4>
          <p className='pb-8'>TBD</p>
          <h4 className='text-xl font-bold pb-2'>When will I recieve my order?</h4>
          <p className='pb-8'>TBD</p>
        </>
      )
    },
    {
      title: 'Placing an Order',
      href: 'order',
      content: (
        <>
          <h4 className='text-xl font-bold pb-2'>I have a question about an order / product. Who do I contact?</h4>
          <p className='pb-8'>TBD</p>
        </>
      )
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="content-container flex ">
        <aside className="sticky top-20 self-start min-w-[320px]">
          <div>
            <div className="font-mono text-2xl pb-4">Table of Contents</div>
            <ul>
              {faqContent.map((item, index) => (
                <li className="pb-2" key={index}><a href={`#${item.href}`}>◘ {item.title}</a></li>
              ))}
            </ul>
          </div>
        </aside>
        <div>
          <h2 className='text-4xl font-mono text-center pb-16'>FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion content={faqContent}/>
        </div>
      </div>
    </section>
  )
}

export default FaqBody