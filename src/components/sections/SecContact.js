const SecContact = () => {
    return (
        <section className="contact" id="contact">
            <p className="title">Contact</p>
            <p>Send me an e-mail if you want to ask me something, by filling this form.</p>
            <p>You can ask me anything, suggest a collaboration or a work.</p>

            <div className="contactContainer">
                <form className="contactForm">
                    <text className="subtitle">Name</text>
                    <input className="inputBox" type="text" placeholder="Name"/>

                    <text className="subtitle">E-mail</text>
                    <input className="inputBox" type="email" placeholder="E-mail"/>

                    <text className="subtitle">Subject</text>
                    <input className="inputBox" type="text" placeholder="Subject"/>

                    <text className="subtitle">Message</text>
                    <textarea className="largeInputBox" placeholder="Message"/>

                    <input className="submitButton" type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    );
}

export default SecContact;