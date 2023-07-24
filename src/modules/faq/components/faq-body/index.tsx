import Accordion from "@modules/common/components/accordion"

const FaqBody = () => {

  const email = 'codecultureapparel@gmail.com'

  const faqContent = [
    {
      title: 'Returns and Exchange Policy',
      href: 'returns',
      content: (
        <>
          <h4 className='small:text-xl text-lg font-bold pb-2'>What is your return Policy?</h4>
          <p className='pb-8'>As long as the item is in brand new condition (unworn and unwashed), you can return it within *30 days* of receiving your order. Once we receive the returned item(s), we will refund you the cost of the item(s) within about one week from when the item is delivered to us. The original shipping cost will not be refunded.</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>My item arrived damaged / This isn&apos;t what I ordered, what do I do?</h4>
          <p className='pb-8'>If you have received a damaged/incorrect item, please send an e-mail to <a href='mailto: ${email}' target="_blank" rel="noopener noreferrer">${email}</a> with the subject line “Damaged Item” or “Incorrect Item” within 30 days of delivery and&nbsp;we will take care of it at no cost to you.</p>
        </>
      )
    },
    {
      title: 'Shipping & Orders',
      href: 'shipping',
      content: (
        <>
          <h4 className='small:text-xl text-lg font-bold pb-2'>How long does it take my order to ship?</h4>
          <p className='pb-8'>It depedns on the shipping service you paid for. Your order may take anywhere from 3-14+ days to ship </p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>Do you ship internationally?</h4>
          <p className='pb-8'>We ship to most countries except for Guadeloupe, North Korea, Russia, and Ukraine.</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>How do I track my order?</h4>
          <p className='pb-8'>TBD</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>I haven&apos;t gotten my package yet, what do I do?</h4>
          <p className='pb-8'>Domestic packages can take anywhere from a 3 - 7 days. If it&apos;s been more than this range please email {email} for updates.</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>When will I recieve my order?</h4>
          <p className='pb-8'>Domestic orders can take 3-14 days while international orders can take anywhere from 2 - 12 weeks.</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>How do I cancel my order?</h4>
          <p className='pb-8'>As long as your order is still &quot;pending&quot; send an email to {email} with the subject line &quot;Cancel Order&quot; and we will take care of the rest!</p>
        </>
      )
    },
    {
      title: 'Product Info. and Care',
      href: 'order',
      content: (
        <>
          <h4 className='small:text-xl text-lg font-bold pb-2'>I have a question about an order / product. Who do I contact?</h4>
          <p className='pb-8'>Please send all your questions to {email} if you have questions about a certain product or and order. Please be sure to include any relavant information like an order number so we can process your question efficiently.</p>
          <h4 className='small:text-xl text-lg font-bold pb-2'>Can I still buy discontinued designs, will X design come back?</h4>
          <p className='pb-8'>It depends, but usually no you will not be able to buy discontinued designs. If a design is going to be discontinued, there will be a opportunity for a &quot;last chance&quot; sale. Be sure to be subscribed to our mailing list so you don&apos;t miss out!</p>
        </>
      )
    },
    {
      title: 'General',
      href: 'general',
      content: (
        <>
          <h4 className='small:text-xl text-lg font-bold pb-2'>Are you open to collaborating/partnering/sponsoring?</h4>
          <p className='pb-8'>Sure! Send an email to {email} and we can discuss!</p>
        </>
      )
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="content-container small:flex block">
        <aside className="sticky top-20 self-start min-w-[320px] hidden small:block">
          <div className="font-mono text-2xl pb-4">Table of Contents</div>
          <ul>
            {faqContent.map((item, index) => (
              <li className="pb-2" key={index}><a href={`#${item.href}`}>◘ {item.title}</a></li>
            ))}
          </ul>
        </aside>
        <div>
          <h2 className='text-4xl font-mono text-center small:pb-16 pb-12'>FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion content={faqContent}/>
        </div>
      </div>
    </section>
  )
}

export default FaqBody