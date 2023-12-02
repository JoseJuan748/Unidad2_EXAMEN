import React, { useState } from 'react';
import "../style/Lista.css"

type Props = {
    Name: string;
    primerAdjetivo?: string;
    item?: string;
};

const Lista = (props: Props) => {
    const { Name } = props;
    const [valorInput, setValorInput] = useState('');
    const [itemsAgregados, setItemsAgregados] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(e.target.value);
    };

    const handleClick = () => {
        setItemsAgregados([...itemsAgregados, valorInput]);
        setValorInput('');
    };

    return (
        <>
            <div className="center-container">
                <h1>Que lenguajes de programacion conoces?</h1>
                <h3>{Name}</h3>
                <div className="input-container">
                    <input type="text" value={valorInput} onChange={handleChange} />
                    <button onClick={handleClick}>Añadir</button>
                </div>
                <ul className="lista">
                    {itemsAgregados.map((item, index) => (
                        <li key={index}><h3>-{item}</h3></li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Lista;
