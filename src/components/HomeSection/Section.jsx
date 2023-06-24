import Style from './Section1.module.css'
const Section = () => {
    const SectionImage = 'https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/01/data-collection.png'
    return (
        <section className={`${Style.section_title_one} my-5 mx-auto`}>
            <div className="row">
                <div className='col p-0'>
                    <h2 className=' fw-bold text-secondary'>
                        <span className='d-block text-primary'>03.</span>
                        Secure Online Forms

                    </h2>
                    <div style={{
                        width: '510px'
                    }}>
                        <p className='my-4 text-secondary'> Beautiful forms can be safe, too! Build <strong>GDPR-ready forms</strong> and<a className={Style.section_link} href='#'><strong> HIPAA-compliant forms</strong></a> with our form maker. Create secure online forms with multiple layers of security and various levels of compliance, all to make sure you collect data in a highly safe and protected environment.
                            <br />
                            <br />
                            Our data residency options allow you to choose where your forms and collected data are stored: in the US or in the EU. Building secure and compliant forms that follow your organization’s security protocols has never been easier!
                        </p>
                    </div>
                    <div className='d-flex' style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <button type="button" className="btn btn-primary text-uppercase text-white fw-medium px-3 py-3">
                            CREATE YOUR FORM
                        </button>
                        <div className='p-4 text-primary'>
                            <a href="#" className='link-offset-2 link-underline link-underline-opacity-0 fw-normal'
                                style={{
                                    fontSize: '18px'
                                }}>GET YOUR HIPAA FORMS</a>
                        </div>
                    </div>
                </div>
                <div className='col p-0 d-flex' style={{
                    justifyContent: "end"
                }}>
                    <figure>
                        <img height={550} width={510} src={SectionImage} alt='' />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Section;