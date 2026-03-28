import { useState } from "react"

const Contact = () => {
    const [details, setDetails] = useState({ name: '', email: '', message: '' });

    const onChangeDetails = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const onSubmit = () => {
        e.preventDefault();

    }

    return <>
        <div >
            <h1>Contact Me</h1>
            <form className='contactForm' onSubmit={onSubmit}>
                <div className="group"><label>From</label>
                    <input name='name' value={details.name} onChange={onChangeDetails} /></div>
                <div className="group"><label>Email</label>
                    <input name='email' value={details.email} onChange={onChangeDetails} /></div>
                <div className="group"><label>Message</label>
                    <textarea name="message" value={details.message} onChange={onChangeDetails} /></div>
                <button className="submitBtn" type='submit'>Send</button>
            </form>
        </div>
    </>
}

export default Contact;