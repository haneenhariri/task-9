import { Button, Container } from 'react-bootstrap';
import './Order.css';
import { useEffect, useState } from "react";
import { useEffectOnce } from 'react-use';

export default function Order() {
    const [index, setIndex] = useState(0);
    const [count , setCount] = useState(false);
    const [reachedThousand, setReachedThousand] = useState(false);
    const [alertsShown, setAlertsShown] = useState({
        initial: false,
        ten: false,
        hundred: false,
        thousand: false,
    });
    const [popupMessage, setPopupMessage] = useState(null);

    const showAlert = (message) => {
        setPopupMessage(message);
    };

    useEffectOnce(() => {
        if (!alertsShown.initial) {
            showAlert('Welcome to our Restoran');
            setAlertsShown((prev) => ({ ...prev, initial: true }));
        }
    });

    const [bgImg, setBgImg] = useState('linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(/src/assets/images/bg-hero.jpg)');
    useEffect(() => {
        if (index === 10 && !alertsShown.ten) {
            showAlert('you Order 10 dish!');
            setAlertsShown((prev) => ({ ...prev, ten: true }));
            setBgImg('linear-gradient( rgba(15, 23, 43, 0.9), rgb(15, 23, 43, 0.9)), url(/src/assets/images/order-1.jpeg)');
        } else if (index === 100 && !alertsShown.hundred) {
            showAlert('you Order 100 dish!');
            setAlertsShown((prev) => ({ ...prev, hundred: true }));
            setBgImg('linear-gradient( rgba(15, 23, 43, 0.9), rgb(15, 23, 43, 0.9)), url(/src/assets/images/order.webp)');
        } else if (index === 1000 && !alertsShown.thousand) {
            showAlert('you Order 1000 dish!');
            setAlertsShown((prev) => ({ ...prev, thousand: true }));
            setReachedThousand(true);
            setBgImg('linear-gradient( rgba(15, 23, 43, 0.9), rgb(15, 23, 43, 0.9)), url(/src/assets/images/healthy-food.webp)');
        }
    }, [index, alertsShown]);

    const closePopup = () => {
        setPopupMessage(null);
    };

    const incrementBtn = () => {
        if (index < 10) {
            setIndex(index + 1);
        } else if (index < 100) {
            setIndex(index + 10);
        } else if (index < 1000) {
            setIndex(index + 100);
        }
    };

    const decrementBtn = () => {
        if (index > 100) {
            setIndex(index - 100);
        } else if (index > 10) {
            setIndex(index - 10);
        } else if (index > 0) {
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        if (index === 1000) {
            setCount(true);
        }
    }, [index]);

    return (
        <section className='order p-5' style={{ background: bgImg }}>
            <Container className='count d-flex justify-content-center align-items-center flex-column'>
                <h2 className='mb-5'>Order your dish</h2>
                {popupMessage && (
                    <div className="popup">
                        <div className="popup-content">
                            <p>{popupMessage}</p>
                            <button className="popup-button" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
                {!count ? (
                    <Button className="increment btn-color mb-3" onClick={incrementBtn}>
                        Order
                    </Button>
                ) : (
                    index > 0 && (
                        <Button className="decrement btn-color" onClick={decrementBtn}>
                            Undo order
                        </Button>
                    )
                )}
                <div>{index}</div>
            </Container>
        </section>
    );
}
