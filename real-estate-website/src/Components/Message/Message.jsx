import "./Message.css"
function Message() {
    return (
        <div className="message">

            <div className="messageUp">
                <h1>GET IN TOUCH</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
            </div>

            <div className="messageDown">
                <div className="a1" >
                    <div><input type="text" placeholder="Name"/></div>
                    <div><input type="text" placeholder="Email addres"/></div>
                </div>
                <div className="a1">
                    <div><input type="text" placeholder="Subject"/></div>
                    <div><input type="text" placeholder="Phone"/></div>
                </div>
            </div>

            <div className="bigText"><input type="text" cols="30" rows="5" placeholder="Whrite your message here..."/></div>

            <div className="send"><a href="">Send Message</a></div>
        </div>
    )
}
export default Message