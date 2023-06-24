import Style from './Section1.module.css'

const Section2 = () => {
    const SmartFormBuilder = 'https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/01/integrations-logos.png'
    return (
        <section className={`${Style.section_title_one} my-5 mx-auto`}>
            <div className="row">
                <div className='col d-flex' style={{
                    justifyContent: "start"
                }}>
                    <figure>
                        <img src={SmartFormBuilder} alt='' />
                    </figure>
                </div>
                <div className='col px-4'>
                    <h2 className=' fw-bold text-secondary'>
                        <span className='d-block text-warning'>02.</span>
                        Integration with your digital tools
                    </h2>
                    <p className='my-4 text-secondary'>Automate workflows within your organization, instead of manually exporting and importing data.</p>
                    <div className=''>
                        <p>123FormBuilder handles a wide variety of uses cases, such as:</p>
                        <ul>
                            <li>
                                <span>Push and pull data with </span>
                                <a className={Style.section_link} href="">Salesforce forms</a>,
                            </li>
                            <li>
                                <span>Get paid through</span>
                                <a className={Style.section_link} href="">PayPal order forms</a>,
                            </li>
                            <li>

                                <span>Add new contacts to your Mailchimp mailing list,</span>
                            </li>
                            <li>
                                <span> Send data to Google spreadsheets or Google Calendar through the Google, </span>
                                <a className={Style.section_link} href="">Workspace integration</a>
                            </li>
                            <li>
                                <span>
                                    …and integrate your forms with 4,000 other tools, like Wix, Shopify, Dropbox, Marketo or HubSpot, either through direct integration or through Zapier.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-warning text-uppercase text-white fw-medium px-3 py-3">
                        BROWSE INTEGRATIONS
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Section2;