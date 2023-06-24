import Style from './Section1.module.css'

const Section1 = () => {
    const Section1Image = 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/01/smart-form-builder.jpg'
    return (
        <section className={`${Style.section_title_one} mt-5 mx-auto`}>
            <div className="row">
                <div className='col p-0'>
                    <h2 className=' fw-bold text-secondary'>
                        <span className='d-block text-success'>01.</span>
                        Free Online Form Builder
                    </h2>
                    <p className='my-4 text-secondary'>Create secure online forms and surveys using our no-code, drag & drop free form builder. 2000+ <a className={Style.section_link} href='#'>form templates</a> are available to get you started. Build beautiful forms, collect data securely, and improve your productivity — all with just a few clicks.</p>
                    <div className=''>
                        <p>123FormBuilder handles a wide variety of uses cases, such as:</p>
                        <ul>
                            <li>
                                <a className={Style.section_link} href="">Event registration forms</a>
                                <span> for a better planning of events</span>
                            </li>
                            <li>
                                <a className={Style.section_link} href="">Order forms </a>
                                <span> for collecting payments</span>
                            </li>
                            <li>
                                <a className={Style.section_link} href="">Application forms</a>
                                <span> for enrolling new members</span>
                            </li>
                            <li>
                                <a className={Style.section_link} href="">Survey forms </a>
                                <span> for collecting client feedback.</span>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-success text-uppercase text-white fw-medium px-3 py-3 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-circle-fill text-light" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                        <span className='ms-2'>TAKE PRODUCT TOUR</span>
                    </button>
                </div>
                <div className='col p-0 d-flex' style={{
                    justifyContent: "end"
                }}>
                    <figure>
                        <img height={650} src={Section1Image} alt='' />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Section1;