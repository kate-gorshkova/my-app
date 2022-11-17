import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter((newCount) => newCount.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const onIncrement = (id) => {
        setCounters(
            counters.map((c) => {
                if (c.id === id) {
                    c.value++;
                }
                return c;
            })
        );
    };

    const onDecrement = (id) => {
        setCounters(
            counters.map((c) => {
                if (c.id === id) {
                    c.value--;
                }
                return c;
            })
        );
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={() => onIncrement(count.id)}
                    onDecrement={() => onDecrement(count.id)}
                />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}>
                Сброс
            </button>
        </>
    );
};

export default CountersList;
