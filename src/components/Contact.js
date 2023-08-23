
const Portfolio = () => {
    return (
        <>
            <div id="contact" className='section'>
                <div className='innerSection container'>
                    <div className='contact-title'>
                        <h3>Contact <span className='primarySpan'>Me!</span></h3>
                    </div>
                    <div className='contact-form'>
                        <form>
                            <div className='fname-lname'>
                                <input type="text" name="fname" placeholder='First Name' className='input-field fname' />
                                <input type="text" name="lname" placeholder='Last Name' className='input-field lname' />
                            </div>
                            <div className='form-info'>
                                <input type="email" name="email" placeholder='Email Address' className='input-field' />
                                <input type="text" name="subject" placeholder='Subject' className='input-field' />
                            </div>
                            <textarea name='message' cols="30" rows="10" placeholder='Your Message' ></textarea>
                            <div className='submit-contact-div'>
                                <input type="submit" className='btn-custom' value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Portfolio;