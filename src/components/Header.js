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
    let [butNews, setButNews] = useState(false)
    let [butBrain, setButBrain] = useState(false)

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
                            Автор проекта. <dr />
                            Создание Вэб приложений при помощи современных информационных технологий. <dr />
                            Продажа произведений Искусства и кастомных украшений, амулетов. <br />
                            Ознакомится с Работами можно на Академическом переулке Васильевского острова. <br />
                            Связь по телефону, в мессенжерах.
                        </div>
                    )}

                    <button onClick={() => setButNews(butNews = !butNews)} className={`butNews ${butNews && 'active'}`} >News</button>
                    {butNews && (
                        <div className='news'>
                            Рабиновичи в театре: <br />
                            -Сарочка, тебе удобно сидеть? <br />
                            -Да, Абрамчик, удобно! <br />
                            -Тебе видно? <br />
                            -Да, любимый <br />
                            -Тебе не дует? <br />
                            -Нет, золотой. <br />
                            -Давай поменяемся местами. <br />
                            : <br />
                            "Нет богатства лучше телесного здоровья" <br />
                            : <br />
                            : <br />

                        </div>
                    )}
                    <button onClick={() => setButBrain(butBrain = !butBrain)} className={`butBrain ${butBrain && 'active'}`} >brain</button>
                    {butBrain && (
                        <div className='brain'>
                            Мозг человеческий невероятно сложен.
                            В нем есть такие закоулки, о которых его
                            обладатель даже не подозревает. <br />
                            : <br />
                            В каждой естественной науке заключенно столько истины, сколько в ней есть математики. И.Кант<br />
                            : <br />
                            Не согласен с  математикой. Считаю, что сумма нулей дает грозную цифру. С.Е.Лец <br />
                            : <br />

                        </div>
                    )}

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
