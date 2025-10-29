import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}

            <p className='summa'>Итого: {new Intl.NumberFormat().format(summa)} $ </p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empy'>
            <h2>Добавь товар</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    let [butInfo, setButInfo] = useState(false)

    return (
        <header>
            <div>
                <span className='span'>styleroom</span>
                <ul className='nav'>
                    <button onClick={() => setButInfo(butInfo = !butInfo)} className={`butInfo ${butInfo && 'active'}`} >Info</button>
                    {butInfo && (
                        <div className='info'>
                            + 7 921 593 63 24 карта Сбер. <br />
                            Игорь Борисович <br />
                            Город Санкт-Петербург <br />
                            Автор данного проекта. <dr />
                            Создание Вэб сайтов на языкн JavaScript при помощи ReactJS технологий. <dr />
                            Продажа произведений Искусства и кастомных украшений, амутов. <br />
                            Изучить Объекты торга можно на Академическом переулке Васильевского острова. <br />
                            По предварительной записи по телефону или в мессенжерах.
                        </div>
                    )}

                    <li>Слушай</li>
                    <li>Существую</li>

                </ul>

                <TiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
