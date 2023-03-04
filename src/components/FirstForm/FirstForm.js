import Container from "react-bootstrap/Container";
import {useState} from "react";

//import "./FirstForm.css";

function FirstForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nMessage: ${message}`);
    }

    return (
        <Container>
            <div>
                <h1>Зворотній зв'язок</h1>
                <p>Задай своє запитання, або повідом про порушення під час вступної кампанії</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="name"
                       value={name}
                       placeholder="Ім'я"
                       onChange={(e) => {
                           setName(e.target.value);
                       }}
                /><br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="E-mail*"
                    required={true}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                /><br />
                <input
                    type="text"
                    name="topic"
                    value={topic}
                    placeholder="Тема*"
                    required={true}
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                /><br />
                <textarea
                    placeholder="Повідомлення"
                    name="message"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                ></textarea><br />
                <span className="text-muted">Поля відмічені * мають бути обов'язково заповненими</span><br />
                <input type="submit" value="Відправити" />
                <hr />
            </form>
        </Container>
    );
}

export default FirstForm;